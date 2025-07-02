import { Building2, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Explore Hostels', href: '/hostels' },
      { name: 'Post Hostel', href: '/post-hostel' },
      { name: 'Premium Listings', href: '/premium' },
      { name: 'How it Works', href: '/how-it-works' }
    ],
    support: [
      { name: 'Help Center', href: '/help-center' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Safety Guidelines', href: '/safety-guidelines' },
      { name: 'FAQ', href: '/faq' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Community Guidelines', href: '/community-guidelines' }
    ]
  };

  const socialLinks = [
  {
    name: 'Facebook',
    icon: <Facebook className="h-5 w-5" />,
    href: 'https://www.facebook.com/victor.collins.589583/' // ← your Facebook page
  },
  {
    name: 'Instagram',
    icon: <Instagram className="h-5 w-5" />,
    href: 'https://www.instagram.com/kiplah_1/' // ← your Instagram handle
  },
  {
    name: 'Twitter',
    icon: <Twitter className="h-5 w-5" />,
    href: 'https://x.com/kiplah001' // ← your Twitter handle
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://www.linkedin.com/in/victor-kiplangat-03b2b3350/' // ← your LinkedIn profile
  }
];


  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated with HostelHub Kenya
              </h3>
              <p className="text-primary-foreground/90">
                Get the latest hostel listings, student tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[400px]">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-gray-900 border-0 flex-1"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">
                  HostelHub <span className="text-accent">Kenya</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Kenya's premier platform for student accommodation. We connect students with 
                verified, affordable, and comfortable hostels across the country.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>vicktechsolutions4@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+254 703924936</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Platform</h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} HostelHub Kenya. All rights reserved. Built for Kenyan students ❤️ .
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🇰🇪 Made in Kenya</span>
              <span>•</span>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
