import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about#mission' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Get Involved', href: '/contact' },
    ],
    work: [
      { name: 'Advocacy', href: '/work#advocacy' },
      { name: 'Empowerment', href: '/work#empowerment' },
      { name: 'Recognition', href: '/work#recognition' },
      { name: 'Gallery', href: '/gallery' },
    ],
    support: [
      { name: 'Donate', href: '/contact' },
      { name: 'Volunteer', href: '/contact' },
      { name: 'Partnership', href: '/contact' },
      { name: 'Resources', href: '/work#resources' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white p-1 shadow-medium">
                <Image
                  src="/logo.png"
                  alt="Visibly Crowned Logo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Visibly Crowned</h3>
                <p className="text-sm text-neutral-400">Empowering Africa</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              A Pan-African initiative focused on gender equality, ending violence against women and girls, and creating opportunities for empowerment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-700 rounded-lg flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Work</h4>
            <ul className="space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support Us</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-neutral-800 py-8">
        <div className="container-custom">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-3">Stay Connected</h4>
            <p className="text-neutral-400 text-sm mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for updates on our work, events, and ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary px-6 py-3 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © {currentYear} Visibly Crowned. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
