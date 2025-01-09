import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Community', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Refund Policy', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            About SSCPrep
          </h3>
          <p className="text-sm">
            SSCPrep empowers SSC aspirants with AI-driven learning tools,
            interactive tests, and progress tracking to help them excel in their
            exams. Join us to elevate your learning journey!
          </p>
        </div>

        {/* Blurred divider */}
        <div className="relative py-5 mb-8">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-100 dark:bg-gray-900 px-2 text-sm text-gray-500 dark:text-gray-400">
              SSCPrep
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-teal-600 dark:text-teal-400" />
                <a
                  href="mailto:support@sscprep.com"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  support@sscprep.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-teal-600 dark:text-teal-400" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  +91 1234567890
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-teal-600 dark:text-teal-400" />
                <span>Live Chat: Available 24/7</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links and Copyright Notice */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-center text-sm">
            <p>&copy; 2025 SSCPrep. All Rights Reserved.</p>
            <p className="mt-2">Built with ❤️ for SSC Aspirants</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
