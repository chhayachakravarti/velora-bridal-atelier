import React from 'react'
import hero from '../assets/hero.png'
function Hero() {
    const stats = [
        {value: '2,500+', label:"happy Clients"},
        {value: '15+', label:"Specialists"},
        {value: '50+', label:"Treatments"},
        {value: '10+', label:"Years"},

    ];
  return (
   <section id='home' className='relative overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100'>
    <article className='container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-8'>
       {/* Text Section */}
<div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left md:pl-4 lg:pl-16">
  <hgroup data-aos="fade-up" data-aos-delay="500">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-5 md:mb-6 leading-tight">
      Enhance Your Natural{' '}
      <mark className="text-pink-600 bg-transparent">Beauty</mark>
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-7 md:mb-8 max-w-lg mx-auto md:mx-0">
      Welcome to our salon, where beauty meets relaxation! Our skilled
      team of professionals is dedicated to providing you with
      personalized services that enhance your natural beauty. From
      luxurious hair treatments to rejuvenating skincare, we create a
      serene environment for you to unwind and indulge in self-care.
    </p>
  </hgroup>

            <nav  data-aos='fade-up' data-aos-delay='600'  className='flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mb-8'>
                <a href="#appointment" className='bg-pink-600 hover:bg-pink-700 text-white px-7 py-3 rounded-full text-center transition shadow-lg' aria-label='Book a consultation'>
                    Book a Consultation
                </a>
                <a href="#services" className='border border-pink-600 text-pink-600 hover:bg-pink-50 px-7 py-3 rounded-full text-center transition' aria-label='Explore Our services'>
                    Explore Services
                </a>
            </nav>
            <aside data-aos='fade-up' data-aos-delay='800' className='py-2 md:py-4'>
                <ul className='grid grid-cols-2 sm:flex sm:flex-wrap justify-center md:justify-start gap-4 md:gap-6 lg:gap-8 text-center'>
                    {
                        stats.map((stat, index)=>(
                            <li key={index} className='px-2'>
                                <strong className='text-xl sm:text-2xl font-bold text-pink-600'>{stat.value}</strong>
                                <small className='block text-xs sm:text-sm text-gray-600'>{stat.label}</small>
                            </li>
                        ))
                    }
                </ul>
            </aside>
               
        </div>
        <figure data-aos='fade-up' data-aos-delay='700' className='w-full md:w-1/2 flex justify-center'>
            <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center'>
                <span className='bg-pink-500 rounded-full w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 absolute -top-6 -left-4 sm:-top-10 sm:-left-10 opacity-20' aria-hidden='true'>

                </span>
                <span className='bg-purple-400 rounded-full w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 opacity-20' aria-hidden='true'>

                </span>
                <img src={hero} alt="cosmetic treatment" className='relative z-10 rounded-full shadow-2xl w-64 sm:w-full max-w-xs md:max-w-sm object-cover aspect-square' width='400' height='400' loading='eager'/>
            </div>
        </figure>
    </article>
   </section>
  )
}

export default Hero
