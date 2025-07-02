
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How do I book a hostel through HostelHub Kenya?",
      answer: "Simply search for hostels in your preferred location, compare options, and click 'Book Now' on your chosen hostel. You'll need to create an account and provide payment details to complete your booking."
    },
    {
      question: "Are all hostels on the platform verified?",
      answer: "Yes, we verify all hostels before listing them on our platform. Our verification process includes checking licenses, visiting properties, and ensuring they meet our safety and quality standards."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, Visa, Mastercard, and bank transfers. All payments are processed securely through our encrypted payment system."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Cancellation policies vary by hostel. Most hostels allow free cancellation up to 24 hours before check-in. Please check the specific cancellation policy for your chosen hostel."
    },
    {
      question: "How do I list my hostel on the platform?",
      answer: "Click 'Post Hostel' in the header, fill out the listing form with your hostel details, upload photos, and submit for review. Our team will verify your listing within 2-3 business days."
    },
    {
      question: "What are Premium Listings?",
      answer: "Premium Listings get enhanced visibility, appear at the top of search results, and include additional features like professional photography and priority customer support."
    },
    {
      question: "Is there a booking fee?",
      answer: "We charge a small service fee to cover payment processing and platform maintenance. This fee is clearly displayed before you complete your booking."
    },
    {
      question: "What if I have issues with my accommodation?",
      answer: "Contact our 24/7 support team immediately. We'll work with you and the hostel owner to resolve any issues quickly and fairly."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about HostelHub Kenya
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you with any other questions you might have.
          </p>
          <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Contact Support
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
