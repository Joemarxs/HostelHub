
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCard, Smartphone, Banknote, Globe } from 'lucide-react';
import MPesaPayment from './MpesaPayment';

interface PaymentSelectorProps {
  amount: number;
  description: string;
  onPaymentSuccess?: (transactionId: string, method: string) => void;
  onPaymentCancel?: () => void;
}

const PaymentSelector = ({ amount, description, onPaymentSuccess, onPaymentCancel }: PaymentSelectorProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('mpesa');
  const [showPayment, setShowPayment] = useState(false);

  const paymentMethods = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      description: 'Pay with M-Pesa mobile money',
      icon: <Smartphone className="h-5 w-5" />,
      available: true,
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Pay with Visa, Mastercard, or other cards',
      icon: <CreditCard className="h-5 w-5" />,
      available: true,
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'Direct bank transfer',
      icon: <Banknote className="h-5 w-5" />,
      available: true,
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay with your PayPal account',
      icon: <Globe className="h-5 w-5" />,
      available: false,
    },
  ];

  const handlePaymentMethodSelect = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = (transactionId: string) => {
    onPaymentSuccess?.(transactionId, selectedMethod);
  };

  if (showPayment && selectedMethod === 'mpesa') {
    return (
      <MPesaPayment
        amount={amount}
        description={description}
        onPaymentSuccess={handlePaymentSuccess}
        onPaymentCancel={() => setShowPayment(false)}
      />
    );
  }

  if (showPayment && selectedMethod === 'card') {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Card Payment
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <p className="text-gray-600 mb-4">
            Card payment integration coming soon!
          </p>
          <Button variant="outline" onClick={() => setShowPayment(false)}>
            Back to Payment Methods
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showPayment && selectedMethod === 'bank') {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Banknote className="h-5 w-5" />
            Bank Transfer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Transfer Details</h4>
              <div className="text-sm space-y-1">
                <p><strong>Bank:</strong> KCB Bank Kenya</p>
                <p><strong>Account Name:</strong> HostelHub Kenya Ltd</p>
                <p><strong>Account Number:</strong> 1234567890</p>
                <p><strong>Amount:</strong> KES {amount.toLocaleString()}</p>
                <p><strong>Reference:</strong> {description}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Please use the reference number when making the transfer
            </p>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowPayment(false)} className="flex-1">
                Back
              </Button>
              <Button onClick={() => handlePaymentSuccess('BANK_' + Date.now())} className="flex-1">
                I've Made the Transfer
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Choose Payment Method</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-1">Payment Details</h4>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <p className="text-2xl font-bold text-primary">KES {amount.toLocaleString()}</p>
        </div>

        <div>
          <Label className="text-base font-medium">Select Payment Method</Label>
          <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="mt-3">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center space-x-2">
                <RadioGroupItem 
                  value={method.id} 
                  id={method.id}
                  disabled={!method.available}
                />
                <Label 
                  htmlFor={method.id} 
                  className={`flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors ${
                    selectedMethod === method.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-gray-200 hover:border-gray-300'
                  } ${!method.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    {method.icon}
                    <div>
                      <div className="font-medium">{method.name}</div>
                      <div className="text-sm text-gray-500">{method.description}</div>
                      {!method.available && (
                        <div className="text-xs text-orange-600">Coming Soon</div>
                      )}
                    </div>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex gap-3">
          {onPaymentCancel && (
            <Button variant="outline" onClick={onPaymentCancel} className="flex-1">
              Cancel
            </Button>
          )}
          <Button 
            onClick={handlePaymentMethodSelect}
            disabled={!paymentMethods.find(m => m.id === selectedMethod)?.available}
            className="flex-1"
          >
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSelector;
