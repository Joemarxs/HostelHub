
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Home, Shield, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Search & Filter",
      description: "Browse thousands of verified hostels across Kenya using our advanced search and filtering options."
    },
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Compare & Choose",
      description: "Compare prices, amenities, and reviews to find the perfect hostel that fits your budget and preferences."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Book Safely",
      description: "Book directly through our secure platform with verified listings and transparent pricing."
    },
    {
      icon: <Star className="h-12 w-12 text-primary" />,
      title: "Enjoy Your Stay",
      description: "Move in with confidence knowing you've chosen a quality, student-friendly accommodation."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How HostelHub Kenya Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding your perfect student accommodation has never been easier. 
            Follow these simple steps to secure your ideal hostel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Find Your Perfect Hostel?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of students who have found their ideal accommodation through HostelHub Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/hostels" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Searching
              </a>
              <a href="/register" className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
