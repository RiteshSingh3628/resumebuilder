import React from 'react'
import resume1 from '../assets/resume1.webp'

function Home() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-12 ">
        {/* Mobile-only heading */}
        <div className="md:hidden text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Best Online Resume Builder
          </h1>
          <p className="text-lg text-gray-600">
            Create a professional resume in minutes with our easy-to-use resume builder
          </p>
        </div>

        <article className="flex  flex-col md:flex-row items-center justify-between gap-8">
          {/* left side of the hero section */}
          <div className="w-full md:w-1/2">
            <img 
              src={resume1} 
              className="w-full h-[500px] object-contain rounded-lg" 
              alt="Professional resume template" 
            />
          </div>
          
          {/* right side of the hero section - hidden on mobile */}
          <div className="w-full md:w-1/2 hidden md:flex flex-col items-center justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Best Online Resume Builder
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Create a professional resume in minutes with our easy-to-use resume builder
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300 shadow-md hover:shadow-lg">
              Create Your Resume
            </button>
          </div>
        </article>

        {/* Mobile-only button */}
        <div className="md:hidden text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300 shadow-md hover:shadow-lg">
            Create Your Resume
          </button>
        </div>
      </section>

      {/* second section of the home page */}
      <section>
        <main className='w-full md:w-2/3 mx-auto flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-center px-12 text-red-300'>
            Pick one of many world-class templates and build your resume in minutes
          </h1>
          {/* carousel with images of the templates*/}
          <div className='w-full m-12 md:m-24 flex flex-row items-center justify-center'>
            <img className='w-1/2' src={resume1} alt="resume template" />
          </div>
        </main>
      </section>
    </div>
  )
}

export default Home
