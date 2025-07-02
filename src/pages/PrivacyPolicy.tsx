
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: March 25, 2024
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                list a hostel, make a booking, or contact us for support.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal information (name, email, phone number)</li>
                <li>Account credentials and preferences</li>
                <li>Payment information (processed securely by third parties)</li>
                <li>Communications with us</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Process bookings and payments</li>
                <li>Communicate with you about your account or transactions</li>
                <li>Provide customer support</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Improve our platform and user experience</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>With hostel owners when you make a booking</li>
                <li>With service providers who assist us in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Lodge a complaint with data protection authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-600">
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze usage patterns, and personalize content. You can control cookie 
                preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacy@hostelhubkenya.com<br/>
                  <strong>Phone:</strong> +254 700 123 456<br/>
                  <strong>Address:</strong> Nairobi, Kenya
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
