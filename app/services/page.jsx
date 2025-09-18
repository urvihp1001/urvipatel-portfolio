"use client"
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: "App Development",
    desc: "I develop mobile applications that are tailored to your needs, ensuring a seamless user experience and robust functionality.",
    link: "Learn More"
  },
  {
    num: '02',
    title: "Web Development",
    desc: "I create responsive and engaging websites that effectively represent your brand and captivate your audience.",
    link: "Learn More"
  },
  {
    num: '03',
    title: "Enterprise Solutions",
    desc: "I provide scalable enterprise solutions that streamline your business processes and enhance operational efficiency.",
    link: "Learn More"
  },
  {
    num: '04',
    title: "AI & Machine Learning",
    desc: "I build intelligent solutions using AI and machine learning to help you automate tasks, gain insights, and make data-driven decisions.",
    link: "Learn More"
  }
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn"
            }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {
            services.map((service, index) => {
              return (
                <div key={index} className='flex-1 flex flex-col justify-center gap-6 group cursor-pointer'>
                  <div className='w-full flex justify-between items-center'>
                    <div
                      className="text-5xl font-extrabold transition-colors duration-300"
                      style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px white',
                        transition: 'color 0.3s ease, -webkit-text-stroke 0.3s ease'
                      }}
                    >
                      {service.num}
                    </div>
                    <Link href={service.link} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45  '>
                      <BsArrowDownRight className='text-primary text-3xl' />
                    </Link>
                  </div>
                  <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                  <p>{service.desc}</p>
                  <div className='border-b border-white/20 w-full'></div>

                  <style jsx>{`
                    .group:hover div:first-child {
                      color: #fe37af !important;
                      -webkit-text-stroke: 0 !important;
                    }
                  `}</style>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services
