
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, CreditCard, CheckCircle } from 'lucide-react';
import { initiateMpesaPayment, checkPaymentStatus } from '@/utils/mpesa';
import { useToast } from '@/hooks/use-toast';

interface MpesaPaymentProps {
  amount: number;
  description: string;
  onPaymentSuccess?: (transactionId: string) => void;
  onPaymentCancel?: () => void;
}

const MpesaPayment = ({ amount, description, onPaymentSuccess, onPaymentCancel }: MpesaPaymentProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const [checkoutRequestId, setCheckoutRequestId] = useState<string>('');
  const { toast } = useToast();

  const formatPhoneNumber = (phone: string) => {
    // Remove any non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Convert to international format
    if (cleaned.startsWith('0')) {
      return `254${cleaned.slice(1)}`;
    } else if (cleaned.startsWith('254')) {
      return cleaned;
    } else if (cleaned.startsWith('7') || cleaned.startsWith('1')) {
      return `254${cleaned}`;
    }
    return cleaned;
  };

  const handlePayment = async () => {
    if (!phoneNumber.trim()) {
      toast({
        title: "Phone number required",
        description: "Please enter your M-Pesa phone number",
        variant: "destructive",
      });
      return;
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);
    
    if (formattedPhone.length !== 12) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid Kenyan phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setPaymentStatus('processing');

    try {
      const response = await initiateMpesaPayment({
        amount,
        phoneNumber: formattedPhone,
        accountReference: `HOSTELHUB_${Date.now()}`,
        transactionDesc: description,
      });

      if (response.success && response.checkoutRequestId) {
        setCheckoutRequestId(response.checkoutRequestId);
        toast({
          title: "STK Push Sent!",
          description: "Please check your phone and enter your M-Pesa PIN to complete the payment.",
        });

        // Start polling for payment status
        pollPaymentStatus(response.checkoutRequestId);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setPaymentStatus('failed');
      toast({
        title: "Payment Failed",
        description: error instanceof Error ? error.message : "Failed to initiate payment",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const pollPaymentStatus = async (requestId: string) => {
    const maxAttempts = 30; // Poll for 5 minutes (10 seconds interval)
    let attempts = 0;

    const poll = async () => {
      try {
        const status = await checkPaymentStatus(requestId);
        
        if (status.success && status.resultCode === '0') {
          setPaymentStatus('success');
          toast({
            title: "Payment Successful!",
            description: `Payment of KES ${amount.toLocaleString()} has been received.`,
          });
          onPaymentSuccess?.(status.transactionId);
        } else if (status.resultCode && status.resultCode !== '0') {
          setPaymentStatus('failed');
          toast({
            title: "Payment Failed",
            description: status.resultDesc || "Payment was not completed",
            variant: "destructive",
          });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(poll, 10000); // Poll every 10 seconds
        } else {
          setPaymentStatus('failed');
          toast({
            title: "Payment Timeout",
            description: "Payment verification timed out. Please try again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        if (attempts < maxAttempts) {
          attempts++;
          setTimeout(poll, 10000);
        } else {
          setPaymentStatus('failed');
          toast({
            title: "Payment Verification Failed",
            description: "Could not verify payment status. Please contact support.",
            variant: "destructive",
          });
        }
      }
    };

    poll();
  };

  if (paymentStatus === 'success') {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-700 mb-2">Payment Successful!</h3>
          <p className="text-gray-600">
            Your payment of KES {amount.toLocaleString()} has been processed successfully.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          M-Pesa Payment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-1">Payment Details</h4>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <p className="text-2xl font-bold text-primary">KES {amount.toLocaleString()}</p>
        </div>

        <div>
          <Label htmlFor="phoneNumber">M-Pesa Phone Number</Label>
          <div className="relative mt-1">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="0700123456 or 254700123456"
              className="pl-10"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={paymentStatus === 'processing'}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Enter the phone number registered with M-Pesa
          </p>
        </div>

        {paymentStatus === 'processing' && (
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-blue-700 font-medium">
              STK Push sent to {phoneNumber}
            </p>
            <p className="text-xs text-blue-600 mt-1">
              Please complete the payment on your phone
            </p>
          </div>
        )}

        <div className="flex gap-3">
          {onPaymentCancel && (
            <Button 
              variant="outline" 
              onClick={onPaymentCancel}
              disabled={paymentStatus === 'processing'}
              className="flex-1"
            >
              Cancel
            </Button>
          )}
          <Button 
            onClick={handlePayment}
            disabled={isLoading || paymentStatus === 'processing'}
            className="flex-1"
          >
            {isLoading ? 'Processing...' : 'Pay with M-Pesa'}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Powered by Safaricom M-Pesa
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MpesaPayment;
