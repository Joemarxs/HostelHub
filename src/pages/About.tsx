
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Users, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About HostelHub Kenya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing student accommodation in Kenya by connecting students 
            with verified, affordable, and comfortable hostels across the country.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To make quality student accommodation accessible and affordable for every 
                Kenyan student, while providing hostel owners with a reliable platform 
                to reach their target audience.
              </p>
              <p className="text-gray-600">
                We believe every student deserves a safe, comfortable place to call home 
                during their educational journey.
              </p>
            </div>
            <div className="flex justify-center">
              <Building2 className="h-64 w-64 text-primary/20" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
            <p className="text-gray-600">Students Served</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Verified Hostels</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">47</h3>
            <p className="text-gray-600">Counties Covered</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Founded in 2024 by a team of Kenyan university graduates who experienced 
            firsthand the challenges of finding quality student accommodation. We 
            understand the struggles students face - from lengthy searches to unsafe 
            conditions and unfair pricing. That's why we created HostelHub Kenya, 
            a platform that prioritizes transparency, safety, and affordability.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
