import React from 'react'
import {
  FaClinicMedical,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF className="text-lg" />, label: 'Facebook' },
    { icon: <FaTwitter className="text-lg" />, label: 'Twitter' },
    { icon: <FaInstagram className="text-lg" />, label: 'Instagram' },
    { icon: <FaLinkedinIn className="text-lg" />, label: 'LinkedIn' },
    { icon: <FaYoutube className="text-lg" />, label: 'YouTube' },
  ]

  const quickLinks = [
    { text: 'Home', href: '#' },
    { text: 'About Us', href: '#about' },
    { text: 'Our Services', href: '#services' },
    { text: 'Our Specialists', href: '#specialists' },
    { text: 'Contact Us', href: '#contact' },
    { text: 'Book Appointment', href: '#appointment' },
  ]

  const contactInfo = [
    {
      icon: <MdLocationOn className="text-pink-500 text-xl mt-1 mr-4" />,
      content: (
        <span className="text-gray-400">
          123 Beauty Avenue, Tripuri Road, Jabalpur
        </span>
      ),
    },
    {
      icon: <MdPhone className="text-pink-500 text-xl mt-1 mr-4" />,
      content: (
        <a
          href="tel:+919875748593"
          className="text-gray-400 hover:text-pink-500 transition"
        >
          +91 987 574 8593
        </a>
      ),
    },
    {
      icon: <MdEmail className="text-pink-500 text-xl mt-1 mr-4" />,
      content: (
        <a
          href="mailto:info@glamclin.com"
          className="text-gray-400 hover:text-pink-500 transition"
        >
          info@glamclin.com
        </a>
      ),
    },
    {
      icon: <MdAccessTime className="text-pink-500 text-xl mt-1 mr-4" />,
      content: (
        <span className="text-gray-400">Sun–Thu: 9AM–8PM, Fri: 2PM–9PM</span>
      ),
    },
  ]

  const legalLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Sitemap', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* --- TOP GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* --- Brand Section --- */}
          <section className="sm:col-span-2 lg:col-span-2">
            <header className="flex items-center mb-6">
              <FaClinicMedical
                className="text-3xl text-pink-500 mr-3"
                aria-hidden="true"
              />
              <h2 className="text-2xl font-bold tracking-wide">
                Glamour Clinic
              </h2>
            </header>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Elevate your beauty experience with Glamour Clinic — where
              confidence meets care. Your trusted partner in flawless looks and
              self-love.
            </p>
            <nav aria-label="Social media links">
              <ul className="flex space-x-4">
                {socialLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* --- Quick Links --- */}
          <section>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
              Quick Links
            </h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-500 transition"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* --- Contact Section --- */}
          <address>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
              Contact Us
            </h3>
            <ul className="space-y-4 not-italic">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  {info.icon}
                  {info.content}
                </li>
              ))}
            </ul>
          </address>
        </div>

        {/* --- Newsletter Section --- */}
        <section
          className="bg-gray-800 rounded-2xl p-6 sm:p-8 mb-10 md:mb-12 shadow-lg"
          aria-labelledby="newsletter-heading"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h3
                id="newsletter-heading"
                className="text-xl font-bold mb-2 tracking-wide"
              >
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-400">
                Get exclusive updates, offers, and beauty tips every week!
              </p>
            </div>

            <form
              className="flex flex-col sm:flex-row w-full lg:w-auto"
              aria-label="Newsletter subscription form"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 mb-3 sm:mb-0 sm:mr-4 w-full"
                required
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* --- Bottom Footer --- */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Glamour Clinic. All rights
            reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-pink-500 transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
