
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Shield, Heart, AlertTriangle } from 'lucide-react';

const CommunityGuidelines = () => {
  const guidelines = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Respect Everyone",
      description: "Treat all community members with dignity and respect, regardless of background, gender, religion, or any other characteristic."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Be Honest and Accurate",
      description: "Provide truthful information in your listings, reviews, and communications. Misleading information harms the entire community."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Help Others",
      description: "Share helpful advice, answer questions, and support fellow students in finding safe and comfortable accommodation."
    }
  ];

  const prohibitedActions = [
    "Posting false or misleading information about accommodations",
    "Discriminating against users based on protected characteristics", 
    "Harassing, bullying, or threatening other community members",
    "Sharing inappropriate or offensive content",
    "Attempting to bypass our platform for bookings or payments",
    "Creating multiple fake accounts or profiles",
    "Posting spam or excessive promotional content",
    "Violating local laws or regulations"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our community guidelines help create a safe, welcoming, and helpful 
            environment for all students and hostel owners in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {guidelines.map((guideline, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm border">
              <div className="mb-4 flex justify-center">{guideline.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{guideline.title}</h3>
              <p className="text-gray-600">{guideline.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expectations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Students</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Write honest and helpful reviews</li>
                  <li>• Respect hostel property and rules</li>
                  <li>• Communicate clearly with hostel owners</li>
                  <li>• Report any safety concerns immediately</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Hostel Owners</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide accurate listing information</li>
                  <li>• Maintain clean and safe facilities</li>
                  <li>• Respond promptly to inquiries</li>
                  <li>• Follow all local regulations</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Prohibited Actions</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span className="font-semibold text-red-800">The following actions are not allowed:</span>
              </div>
              <ul className="space-y-2">
                {prohibitedActions.map((action, index) => (
                  <li key={index} className="text-red-700 text-sm">
                    • {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Reporting Violations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Report</h3>
              <p className="text-gray-600 mb-4">
                If you encounter behavior that violates our community guidelines:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Use the "Report" button on listings or profiles</li>
                <li>• Contact our support team directly</li>
                <li>• Email us at safety@hostelhubkenya.com</li>
                <li>• Call our 24/7 hotline: +254 700 123 456</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next</h3>
              <p className="text-gray-600 mb-4">
                When you report a violation:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• We investigate all reports promptly</li>
                <li>• We take appropriate action based on our findings</li>
                <li>• We may suspend or ban users who violate guidelines</li>
                <li>• We keep you informed about the outcome</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions About Our Guidelines?
          </h2>
          <p className="text-gray-600 mb-6">
            If you need clarification about our community guidelines or have suggestions for improvement.
          </p>
          <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Contact Our Team
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommunityGuidelines;
