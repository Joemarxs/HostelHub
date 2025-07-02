
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, AlertTriangle, Phone, Users } from 'lucide-react';

const SafetyGuidelines = () => {
  const guidelines = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Verified Listings Only",
      description: "All hostels undergo thorough verification including license checks, property visits, and safety assessments before being listed."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Research Before Booking",
      description: "Read reviews, check photos, and verify amenities. Contact the hostel directly if you have specific questions or concerns."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Secure Your Belongings",
      description: "Always use provided lockers or secure storage. Keep valuables with you and never leave important items unattended."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Trust Your Instincts",
      description: "If something feels unsafe or uncomfortable, contact our support team immediately or consider alternative accommodation."
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Emergency Contacts",
      description: "Always have emergency contacts saved and know the local emergency numbers. Share your accommodation details with family or friends."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Respect Community Rules",
      description: "Follow hostel rules and respect other guests. This creates a safe and comfortable environment for everyone."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Safety Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety is our top priority. Follow these guidelines to ensure 
            a safe and comfortable stay at any hostel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guidelines.map((guideline, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="mb-4">{guideline.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{guideline.title}</h3>
              <p className="text-gray-600">{guideline.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            Emergency Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Kenya Emergency Numbers</h3>
              <ul className="text-red-700 space-y-1">
                <li>Police: 999 or 112</li>
                <li>Fire & Rescue: 999</li>
                <li>Medical Emergency: 999</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-800 mb-2">HostelHub Support</h3>
              <ul className="text-red-700 space-y-1">
                <li>24/7 Hotline: +254 700 123 456</li>
                <li>Emergency Email: emergency@hostelhubkenya.com</li>
                <li>Live Chat: Available on our website</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Report Safety Concerns
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you encounter any safety issues or have concerns about a hostel, 
              please report them immediately. Your safety and the safety of other 
              students is our highest priority.
            </p>
            <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Report an Issue
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SafetyGuidelines;
