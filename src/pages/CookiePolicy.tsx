
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600">
            Last updated: March 25, 2024
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your 
                preferences and analyzing how you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are necessary for our website to function properly. They enable 
                    core functionality such as security, network management, and accessibility.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-600">
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-600">
                    These cookies allow our website to remember choices you make and provide 
                    enhanced, more personal features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are used to deliver advertisements more relevant to you and 
                    your interests.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>To keep you signed in to your account</li>
                <li>To remember your search preferences</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To personalize your experience</li>
                <li>To improve our services</li>
                <li>To show you relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Most browsers allow you to refuse or accept cookies</li>
                <li>You can delete cookies that have already been set</li>
                <li>You can set your browser to prevent cookies from being set</li>
                <li>You can use our cookie preference center (when available)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600">
                Some cookies on our website are set by third-party services such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                <li>Google Analytics (for website analytics)</li>
                <li>Payment processors (for secure transactions)</li>
                <li>Social media platforms (for social sharing)</li>
                <li>Advertising networks (for targeted advertising)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacy@hostelhubkenya.com<br/>
                  <strong>Phone:</strong> +254 700 123 456
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

export default CookiePolicy;
