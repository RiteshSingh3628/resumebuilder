import React, { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img className="h-12 w-auto" src={logo} alt="Logo" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition duration-300">Home</a>
            
            {/* Submenu Container */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}
            >
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium flex items-center transition duration-300"
              >
                Templates
                <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isSubMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-10 border border-gray-100">
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300">Professional</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300">Creative</a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300">Academic</a>
                </div>
              )}
            </div>
            
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition duration-300">About</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-base font-medium transition duration-300 shadow-md hover:shadow-lg">
              Create Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition duration-300"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Navigation */}
      <div className={`fixed inset-0 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-white"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Side Navigation Panel */}
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
          <div className="flex flex-col h-full">
            {/* Side Navigation Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Side Navigation Content */}
            <div className="flex-1 px-4 py-6 space-y-4">
              <a href="#" className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">Home</a>
              
              {/* Mobile Submenu */}
              <div>
                <button 
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  className="w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between transition duration-300"
                >
                  Templates
                  <svg className={`h-5 w-5 transform transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isSubMenuOpen && (
                  <div className="pl-4 space-y-2">
                    <a href="#" className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">Professional</a>
                    <a href="#" className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">Creative</a>
                    <a href="#" className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">Academic</a>
                  </div>
                )}
              </div>
              
              <a href="#" className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">About</a>
              <button className="w-full text-center px-3 py-3 rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
                Create Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar