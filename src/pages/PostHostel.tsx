
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HostelForm from '@/components/HostelForm';
import { MapPin, Star, Shield } from 'lucide-react';

const PostHostel = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            List Your Hostel
          </h1>
          <p className="text-xl text-gray-600">
            Reach thousands of students looking for accommodation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why List With Us?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Star className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Wide Reach</h3>
                  <p className="text-sm text-gray-600">Connect with students from all over Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Verified Listings</h3>
                  <p className="text-sm text-gray-600">Build trust with verified property details</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Easy Management</h3>
                  <p className="text-sm text-gray-600">Simple dashboard to manage your listings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <HostelForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostHostel;
