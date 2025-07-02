
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, ExternalLink, Calendar } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      title: "HostelHub Kenya Secures Series A Funding to Expand Student Accommodation Platform",
      date: "March 20, 2024",
      summary: "Leading student accommodation platform raises $2M to enhance services and expand to more Kenyan universities."
    },
    {
      title: "Partnership with University of Nairobi to Improve Student Housing",
      date: "February 15, 2024", 
      summary: "HostelHub Kenya partners with UoN to provide verified accommodation options for over 30,000 students."
    },
    {
      title: "HostelHub Kenya Launches Premium Verification Program",
      date: "January 10, 2024",
      summary: "New program ensures highest safety and quality standards for student accommodation across Kenya."
    }
  ];

  const mediaKit = [
    { name: "Company Logo (PNG)", size: "2.1 MB" },
    { name: "Company Logo (SVG)", size: "156 KB" },
    { name: "Brand Guidelines", size: "4.5 MB" },
    { name: "Product Screenshots", size: "8.2 MB" },
    { name: "Founder Photos", size: "12.3 MB" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Press & Media
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest news, press releases, and media resources for HostelHub Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="space-y-8">
              {pressReleases.map((release, index) => (
                <article key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{release.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {release.summary}
                  </p>
                  <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Read Full Release
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Media Kit</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-gray-600 mb-6">
                Download our media kit for logos, brand guidelines, and other press materials.
              </p>
              <div className="space-y-4">
                {mediaKit.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-500 ml-2">({item.size})</span>
                    </div>
                    <button className="text-primary hover:text-primary/80">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Media Inquiries
              </h3>
              <p className="text-gray-600 mb-4">
                For press inquiries, interviews, or additional information, please contact:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> press@hostelhubkenya.com</p>
                <p><strong>Phone:</strong> +254 700 123 456</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Press;
