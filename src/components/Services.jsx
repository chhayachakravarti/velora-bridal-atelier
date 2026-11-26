

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaClinicMedical, FaRegSmile, FaUserMd, FaSyringe, FaChevronDown } from 'react-icons/fa'

function Services() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const services = [
    {
      icon: <FaClinicMedical className='text-4xl text-pink-600' />,
      title: "Facelift Procedures",
      desc: 'Experience a transformative journey with our facelift procedures, designed to rejuvenate your appearance and restore youthful contours.',
      link: "#facelift"
    },
    {
      icon: <FaUserMd className='text-4xl text-pink-600' />,
      title: "Botox & Fillers",
      desc: 'Experience a transformative journey with our facelift procedures, designed to rejuvenate your appearance and restore youthful contours.',
      link: "#botox"
    },
    {
      icon: <FaRegSmile className='text-4xl text-pink-600' />,
      title: "Laser Treatment",
      desc: 'Experience a transformative journey with our facelift procedures, designed to rejuvenate your appearance and restore youthful contours.',
      link: "#laser"
    },
    {
      icon: <FaSyringe className='text-4xl text-pink-600' />,
      title: "Nail Extension",
      desc: 'Nail extension services at beauty salons offer clients the opportunity to enhance their natural nails with artificial extensions.',
      link: "#nail"
    }
  ]

  return (
    <section id='services' className='py-14 md:py-20 bg-gradient-to-r from-pink-100 to-purple-100'>
      <div className='container mx-auto px-4'>
        
        {/* Header with dropdown */}
        <header className='text-center mb-8 md:mb-10'>
          <div className='relative inline-block'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 flex flex-wrap items-center justify-center gap-2 mx-auto'
            >
              Our <span className='text-pink-600'>Premium Services</span>
              <FaChevronDown className={`text-xl sm:text-2xl transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <ul className='absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-lg rounded-xl py-2 w-48 z-20'>
                <li>
                  <Link to="/lehengas" className='block px-4 py-2 text-gray-700 hover:bg-pink-100'>Lehengas</Link>
                </li>
                <li>
                  <Link to="/makeup" className='block px-4 py-2 text-gray-700 hover:bg-pink-100'>Makeup</Link>
                </li>
              </ul>
            )}
          </div>
        </header>

        <p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-10 md:mb-16'>
          The focus is on using top-quality products and techniques to ensure exceptional results and a relaxing atmosphere.
        </p>

        {/* Cards */}
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {services.map((service, index) => (
            <li key={index}>
              <article className='bg-white rounded-xl p-6 sm:p-8 hover:shadow-lg transition-transform hover:-translate-y-1 h-full flex flex-col'>
                <figure className='mb-6'>{service.icon}</figure>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>{service.title}</h3>
                <p className='text-gray-600 mb-6 flex-grow'>{service.desc}</p>
                <a href={service.link} className='text-pink-600 font-medium hover:text-pink-700 flex items-center mt-auto'>
                  Learn more
                  <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </a>
              </article>
            </li>
          ))}
        </ul>

        <footer className='mt-14 md:mt-20 text-center'>
          <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6'>Ready to transform your look?</h3>
          <a href="#appointment" className='bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full inline-block transition shadow-lg'>
            Book your consultation now
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Services
