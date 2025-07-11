import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import PaymentSelector from '@/components/PaymentSelector';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Premium = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; amount: number } | null>(null);

  const benefits = [
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: "Priority Placement",
      description: "Your hostel appears at the top of search results"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Enhanced Visibility", 
      description: "Featured in our homepage and category highlights"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Verified Badge",
      description: "Display the trusted 'Verified Premium' badge"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "5x More Views",
      description: "Premium listings get significantly more student inquiries"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Analytics Dashboard",
      description: "Track views, inquiries, and booking performance"
    }
  ];

  const features = [
    "Priority placement in search results",
    "Featured on homepage",
    "Verified premium badge",
    "Enhanced photo gallery (up to 20 photos)",
    "Video tour capability",
    "24/7 priority customer support",
    "Advanced analytics and insights",
    "Social media promotion",
    "Direct booking system",
    "Mobile app priority features"
  ];

  const handleSubscribe = (planName: string, amount: number) => {
    setSelectedPlan({ name: planName, amount });
    setShowPayment(true);
  };

  const handlePaymentSuccess = (transactionId: string, paymentMethod: string) => {
    console.log('Payment successful:', { transactionId, paymentMethod });
    setShowPayment(false);
    setSelectedPlan(null);
    // Here you would typically update the user's subscription status
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Premium Listings
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stand Out from the Crowd
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get premium placement, verified badges, and exclusive features to attract 
            more students to your hostel.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 border-2 hover:border-primary/20 transition-colors">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Premium Listing Plans
              </h2>
              <p className="text-gray-600">
                Choose the plan that works best for your hostel
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Monthly Plan */}
              <Card className="relative h-full flex flex-col">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Monthly Premium</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">KES 2,500</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2">Perfect for trying premium features</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-auto"
                    onClick={() => handleSubscribe('Monthly Premium', 2500)}
                  >
                    Clck to Pay
                  </Button>
                </CardContent>
              </Card>

              {/* Annual Plan */}
              <Card className="relative border-2 border-primary h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Annual Premium</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">KES 25,000</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <p className="text-primary font-medium mt-2">Save KES 5,000 (17% off)</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-auto"
                    onClick={() => handleSubscribe('Annual Premium', 25000)}
                  >
                    Click to Pay 
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly will my premium listing go live?
              </h3>
              <p className="text-gray-600">
                Premium listings are reviewed and activated within 24 hours of payment confirmation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I upgrade my existing listing to premium?
              </h3>
              <p className="text-gray-600">
                Yes! You can upgrade any existing listing to premium at any time. The premium features will be activated immediately.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept M-Pesa payments for all premium subscriptions. Simply enter your M-Pesa phone number and complete the STK push.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel my premium subscription?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel anytime. Your listing will continue to have premium features until the end of your billing period.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Dialog */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Payment</DialogTitle>
          </DialogHeader>
          {selectedPlan && (
            <PaymentSelector
              amount={selectedPlan.amount}
              description={`${selectedPlan.name} - HostelHub Kenya`}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentCancel={handlePaymentCancel}
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Premium;
