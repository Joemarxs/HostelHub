
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last updated: March 25, 2024
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing or using HostelHub Kenya, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                HostelHub Kenya is a platform that connects students with hostel accommodations. 
                We provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Search and booking services for student accommodation</li>
                <li>Listing services for hostel owners</li>
                <li>Communication tools between students and hostel owners</li>
                <li>Payment processing facilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 mb-4">
                To use certain features of our service, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Booking and Payments</h2>
              <p className="text-gray-600 mb-4">
                When you make a booking through our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>You enter into a direct contract with the hostel owner</li>
                <li>Payment terms are determined by the individual hostel</li>
                <li>Cancellation policies vary by hostel</li>
                <li>We may charge service fees for our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hostel Owner Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                If you list accommodation on our platform, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide accurate descriptions and pricing</li>
                <li>Maintain your property in good condition</li>
                <li>Comply with all local laws and regulations</li>
                <li>Respond promptly to booking inquiries</li>
                <li>Honor confirmed bookings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Activities</h2>
              <p className="text-gray-600 mb-4">
                You may not use our platform to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Post false or misleading information</li>
                <li>Engage in fraudulent activities</li>
                <li>Harass or discriminate against other users</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with the proper functioning of our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600">
                HostelHub Kenya acts as an intermediary between students and hostel owners. 
                We are not responsible for the quality, safety, or legality of accommodations 
                listed on our platform. Our liability is limited to the maximum extent 
                permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Changes will be 
                effective immediately upon posting. Your continued use of our service 
                constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-600">
                  <strong>Email:</strong> legal@hostelhubkenya.com<br/>
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

export default TermsOfService;
