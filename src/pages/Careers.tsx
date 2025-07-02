
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Rocket, Heart, Globe } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Nairobi, Kenya",
      type: "Full-time"
    },
    {
      title: "Backend Developer",
      department: "Engineering", 
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Nairobi, Kenya", 
      type: "Full-time"
    },
    {
      title: "Customer Success Representative",
      department: "Support",
      location: "Nairobi, Kenya",
      type: "Full-time"
    }
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Student-First",
      description: "Everything we do is centered around making student life better and more affordable."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We constantly push boundaries to create better solutions for accommodation challenges."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "We believe in building strong communities that support each other's growth."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Impact",
      description: "We're committed to making a positive impact on education in Kenya and beyond."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us revolutionize student accommodation in Kenya. We're looking for 
            passionate individuals who want to make a difference in students' lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume 
            and tell us how you'd like to contribute to our mission.
          </p>
          <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Get In Touch
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
