
import { Shield, CheckCircle, Smartphone, Users, Heart, Zap } from 'lucide-react';

const WhyHostelHub = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified & Secure",
      description: "All hostels are personally verified by our team. Your safety and security are our top priorities.",
      color: "text-emerald-600 bg-emerald-100"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Every listing meets our strict quality standards. Only the best accommodations make it to our platform.",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Student Community",
      description: "Join a thriving community of students. Connect, share experiences, and build lasting friendships.",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Easy Booking",
      description: "Book your perfect hostel in just a few clicks. Our streamlined process makes it simple and fast.",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Student-Focused",
      description: "Built specifically for Kenyan students. We understand your needs, budget, and preferences.",
      color: "text-pink-600 bg-pink-100"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any questions or concerns you might have.",
      color: "text-yellow-600 bg-yellow-100"
    }
  ];

  const stats = [
    { number: "2000+", label: "Happy Students", icon: <Users className="h-6 w-6" /> },
    { number: "500+", label: "Verified Hostels", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "15+", label: "Cities Covered", icon: <Shield className="h-6 w-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Heart className="h-6 w-6" /> }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary">HostelHub</span> Kenya?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just another booking platform. We're your trusted partner in finding the perfect 
            student accommodation across Kenya, with a focus on safety, quality, and affordability.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${feature.color} mr-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Student Stay?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their ideal accommodation through HostelHub Kenya. 
            Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Start Searching
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              List Your Hostel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHostelHub;
