
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Phone, Mail, Book, Users, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Support = () => {
  const supportOptions = [
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: "24/7"
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Phone Support",
      description: "Speak directly with our support agents",
      action: "+254 700 123 456",
      available: "Mon-Fri 8AM-6PM"
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Support",
      description: "Send us your questions and concerns",
      action: "support@hostelhubkenya.com",
      available: "Response within 24hrs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help you with any questions or issues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">{option.icon}</div>
                <CardTitle>{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="bg-primary text-white px-4 py-2 rounded-lg font-semibold mb-2">
                  {option.action}
                </div>
                <p className="text-sm text-gray-500">{option.available}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-6 w-6 text-primary" />
                Quick Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Booking Issues</h3>
                <p className="text-gray-600 text-sm">Problems with reservations, payments, or confirmations</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Account Problems</h3>
                <p className="text-gray-600 text-sm">Login issues, password resets, or profile updates</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hostel Information</h3>
                <p className="text-gray-600 text-sm">Questions about amenities, location, or policies</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                Report an Issue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Safety Concerns</h3>
                <p className="text-gray-600 text-sm">Report unsafe conditions or security issues</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fraudulent Listings</h3>
                <p className="text-gray-600 text-sm">Report suspicious or fake hostel listings</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Problems</h3>
                <p className="text-gray-600 text-sm">Website bugs, app crashes, or other tech issues</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
