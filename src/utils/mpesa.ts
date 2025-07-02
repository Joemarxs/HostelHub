
export interface MpesaPaymentRequest {
  amount: number;
  phoneNumber: string;
  accountReference: string;
  transactionDesc: string;
}

export interface MpesaPaymentResponse {
  success: boolean;
  message: string;
  checkoutRequestId?: string;
}

export const initiateMpesaPayment = async (paymentData: MpesaPaymentRequest): Promise<MpesaPaymentResponse> => {
  try {
    // This would normally call your Django backend API
    // For now, we'll simulate the M-Pesa STK push
    console.log('Initiating M-Pesa payment:', paymentData);
    
    // Simulate API call to your Django backend
    const response = await fetch('/api/mpesa/stkpush', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Payment initiation failed');
    }

    const data = await response.json();
    return {
      success: true,
      message: 'STK push sent to your phone. Please complete the payment.',
      checkoutRequestId: data.checkoutRequestId,
    };
  } catch (error) {
    console.error('M-Pesa payment error:', error);
    return {
      success: false,
      message: 'Failed to initiate payment. Please try again.',
    };
  }
};

export const checkPaymentStatus = async (checkoutRequestId: string) => {
  try {
    const response = await fetch(`/api/mpesa/status/${checkoutRequestId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Payment status check error:', error);
    return { success: false, message: 'Failed to check payment status' };
  }
};
