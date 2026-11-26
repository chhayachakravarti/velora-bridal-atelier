import React from 'react'
import { FaAward, FaClinicMedical, FaHeart, FaUserMd } from 'react-icons/fa'
import { FaH } from 'react-icons/fa6'
import aboutImage from '../assets/aboutImage.png'

function About() {
    const stats =[
        {value: '10+', label: 'Years Experience', icon: <FaAward className='text-pink-500' aria-hidden='true'/>},
         {value: '2.5+', label: 'Happy Clients', icon: <FaHeart className='text-pink-500' aria-hidden='true'/>},
          {value: '15+', label: 'Expert worker', icon: <FaUserMd className='text-pink-500' aria-hidden='true'/>},
           {value: '10+', label: 'Treatments', icon: <FaClinicMedical className='text-pink-500' aria-hidden='true'/>},
    ]
    const approachTtems = [
        {
            icon: <FaHeart className='text-pink-600' aria-hidden = 'true'/>,
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate beatae pariatur.",
        },
        {
            icon: <FaUserMd className='text-pink-600' aria-hidden = 'true'/>,
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate beatae pariatur.",
        },
        {
            icon: <FaClinicMedical className='text-pink-600' aria-hidden = 'true'/>,
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate beatae pariatur.",
        },
    ]
  return (
    <section id='about' className='py-14 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100'>
        <div className='container mx-auto px-4'>
            <article data-aos-delay='400' className='flex flex-col lg:flex-row items-center gap-10 lg:gap-12'>
                <figure className='w-full lg:w-5/12 relative'>
                    <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto'>
                        <img src={aboutImage} alt="" className='w-full h-auto object-cover aspect-[4/5]' loading='lazy'/>
                        <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' aria-hidden='true'>

                        </div>
                    </div>
                    <span className='hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-500 opacity-20 z-0' aria-hidden='true'></span>
                    <span className='hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-pink-600 opacity-20 z-0' aria-hidden='true'></span>
                    <aside className='absolute bottom-2 right-2 sm:bottom-3 sm:right-4 lg:-right-5 bg-white p-3 rounded-xl shadow-lg z-20'>
                        <strong className='text-xl sm:text-2xl font-bold text-pink-600'>10+

                        </strong>
                        <small className='block text-xs font-medium text-gray-600'>Years Experience</small>
                    </aside>
                </figure>
                <div  data-aos='fade-up' data-aos-delay='600' className='w-full lg:w-7/12'>
                <header>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6'>
                       About <span className='text-pink-600'>Beauty Salon</span>
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 mb-6'>
                         we offer a wide range of personalized beauty services designed to enhance your natural beauty. Our skilled professionals are dedicated to providing a relaxing and rejuvenating experience in a welcoming atmosphere.
                    </p>
                </header>
                <section className='mb-8'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>Our Approach</h3>
                <ul className='space-y-3'>
                    {approachTtems.map((item, index)=>(
                        <li key={index} className='flex items-start'>
                            <figure className='bg-pink-100 p-1 rounded-full mr-3 shrink-0 mt-0.5'>
                                {item.icon}
                            </figure>
                            <p className='text-gray-700'>{item.text}</p>
                        </li>
                    ))}
                </ul>

                </section>
                <section className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
                    {stats.map((item, index)=>(
                        <article key={index} className='bg-white p-4 rounded-lg shadow-sm flex items-center min-w-0'>
                            <figure className='mr-3 shrink-0'>
                                {item.icon}
                            </figure>
                            <div className='min-w-0'>
                                <strong className='text-xl font-bold text-gray-800'>{item.value}</strong>
                                <p className='text-sm text-gray-600'>{item.label}</p>
                            </div>
                        </article>
                    ))}  

                </section>
                <nav>
                    <a href="#specialists" className='inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2'>Meet Our Specialists</a>

                    </nav>

                </div>
            </article>
            <aside className='mt-12 md:mt-20 bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg relative overflow-hidden '>
            <span className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500 opacity-40' aria-hidden='true'>

            </span>
            <div className='relative z-10'>
                <h3 className='text-2xl font-bold text-gray-800 mb-6'>Our Mission</h3>
                <blockquote className='text-lg text-gray-600 mb-6'>
                   "We strive to empower individuals by providing exceptional beauty services that inspire confidence and promote self-expression."
        
                </blockquote>
                <figure className='flex items-center'>
                    <div className='w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4'>
                            <FaUserMd className='text-pink-600' aria-hidden='true' />
                    </div>
                    <figcaption>
                        <cite className='font-semibold text-gray-800 not-italic'> sara Joshi </cite>
                        <p> Director & Founder</p>
                    </figcaption>
                </figure>
            </div>

            </aside>
        </div>
    </section>
  )
}

export default About
