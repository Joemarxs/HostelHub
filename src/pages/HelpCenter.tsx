
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Book, User, CreditCard, Home, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HelpCenter = () => {
  const categories = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Search & Booking",
      description: "Find hostels and make reservations",
      articles: [
        "How to search for hostels",
        "Understanding search filters",
        "Booking process step-by-step",
        "Modifying your booking"
      ]
    },
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Account Management",
      description: "Managing your profile and settings",
      articles: [
        "Creating an account",
        "Updating profile information",
        "Password reset",
        "Account verification"
      ]
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Payments & Billing",
      description: "Payment methods and billing issues",
      articles: [
        "Accepted payment methods",
        "Understanding fees",
        "Refund policies",
        "Payment troubleshooting"
      ]
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Hostel Owners",
      description: "Information for property owners",
      articles: [
        "How to list your hostel",
        "Premium listing benefits",
        "Managing your listing",
        "Understanding payments"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to your questions and get the help you need
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search for help articles..."
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {category.icon}
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-primary hover:underline">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                Popular Articles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-1">How to book a hostel</h3>
                <p className="text-gray-600 text-sm">Step-by-step guide to making your first booking</p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-1">Cancellation policies</h3>
                <p className="text-gray-600 text-sm">Understanding different cancellation terms</p>
              </a>
              <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-1">Payment methods</h3>
                <p className="text-gray-600 text-sm">All accepted payment options explained</p>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Still Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="space-y-3">
                <a href="/contact" className="block bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Contact Support
                </a>
                <a href="/faq" className="block border border-primary text-primary text-center py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  View FAQ
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;
