import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <section className='min-h-screen flex items-start justify-center pt-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-center gap-8'>
          {/* text */}
          <div className='text-center xl:text-left'>
            <span className='text-xl'>Software Developer</span>
            <h1>
              Hello I'm <br/><span className='text-accent'>Urvi Patel</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I'm a developer skilled in Flutter, Firebase, and Next.js, with a focus on building scalable apps and exploring data-driven and AI solutions.
            </p>
            {/* button and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant='outline' className='uppercase items-center flex gap-2' size='lg'>
                <span className='text-xl'>Download CV</span>
                <FiDownload className='mr-2'/>
              </Button>
              <Socials 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                text-accent text-base hover:bg-accent hover:text-primary hover:border-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
         <div className="mt-12 w-full gap-8 flex items-center justify-center">
        <Stats />
      </div>
      </div>
     
    </section>
  )
}

export default Home
