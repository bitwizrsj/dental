import React from 'react';
import { ChevronRight } from 'lucide-react';

const HealthcarePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white font-sans">
      {/* Header Navigation */}
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center">
          <div className="text-teal-500 mr-2">
            {/* Medical caduceus symbol */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5C18.5 5 17.25 6.25 17.25 7.75C17.25 8.5 17.5 9.25 18 9.75C18.5 10.25 18.75 11 18.75 11.75V14.25H21.25V11.75C21.25 11 21.5 10.25 22 9.75C22.5 9.25 22.75 8.5 22.75 7.75C22.75 6.25 21.5 5 20 5Z" fill="currentColor"/>
              <path d="M28.75 10C28.75 8.5 27.5 7.25 26 7.25C25.25 7.25 24.5 7.5 24 8C23.5 8.5 22.75 8.75 22 8.75H18C17.25 8.75 16.5 8.5 16 8C15.5 7.5 14.75 7.25 14 7.25C12.5 7.25 11.25 8.5 11.25 10C11.25 10.75 11.5 11.5 12 12C12.5 12.5 12.75 13.25 12.75 14V22.75H15.25V14C15.25 13.25 15.5 12.5 16 12C16.5 11.5 16.75 10.75 16.75 10C16.75 9.25 17.25 8.75 18 8.75H22C22.75 8.75 23.25 9.25 23.25 10C23.25 10.75 23.5 11.5 24 12C24.5 12.5 24.75 13.25 24.75 14V22.75H27.25V14C27.25 13.25 27.5 12.5 28 12C28.5 11.5 28.75 10.75 28.75 10Z" fill="currentColor"/>
              <path d="M25.5 25.25H14.5C14.25 25.25 14 25.5 14 25.75C14 26 14.25 26.25 14.5 26.25H25.5C25.75 26.25 26 26 26 25.75C26 25.5 25.75 25.25 25.5 25.25Z" fill="currentColor"/>
              <path d="M24.5 28.75H15.5C15.25 28.75 15 29 15 29.25C15 29.5 15.25 29.75 15.5 29.75H24.5C24.75 29.75 25 29.5 25 29.25C25 29 24.75 28.75 24.5 28.75Z" fill="currentColor"/>
              <path d="M21.5 32.25H18.5C18.25 32.25 18 32.5 18 32.75V35.25C18 35.5 18.25 35.75 18.5 35.75H21.5C21.75 35.75 22 35.5 22 35.25V32.75C22 32.5 21.75 32.25 21.5 32.25Z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-800">Michigan Healthcare</h1>
            <p className="text-xs font-medium text-gray-600">Freedom™</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-gray-600 text-sm">
          <a href="#" className="hover:text-teal-500">About us</a>
          <a href="#" className="hover:text-teal-500">How we work?</a>
          <a href="#" className="hover:text-teal-500">Mission & Vision</a>
          <a href="#" className="hover:text-teal-500">Our team</a>
          <a href="#" className="hover:text-teal-500">Resources</a>
          <a href="#" className="hover:text-teal-500">Contact us</a>
        </nav>
        
        <div className="flex space-x-2">
          <button className="bg-blue-700 text-white px-4 py-2 rounded text-xs font-bold">DONATE NOW</button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded text-xs font-bold">GET NOW</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row gap-12 mb-16">
        {/* Left Section */}
        <div className="w-full md:w-2/5">
          <p className="text-teal-500 uppercase text-xs font-medium tracking-wider mb-2">MICHIGAN HEALTHCARE FREEDOM</p>
          <h2 className="text-4xl font-bold mb-4 leading-tight text-gray-900">Exposing state <br/>barriers to your <br/>care.<span className="text-red-500">❤️</span></h2>
          <p className="mb-8 text-gray-700">Support our activities and make a donation.</p>
          
          {/* Donation Section */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-teal-500 p-4 rounded text-white text-center cursor-pointer w-24 h-24 flex flex-col items-center justify-center shadow-sm">
                <span className="text-2xl font-bold">20</span>
                <span className="text-xs">USD</span>
              </div>
              <div className="border border-gray-300 p-4 rounded text-center cursor-pointer w-24 h-24 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">40</span>
                <span className="text-xs text-gray-600">USD</span>
              </div>
              <div className="border border-gray-300 p-4 rounded text-center cursor-pointer w-24 h-24 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">60</span>
                <span className="text-xs text-gray-600">USD</span>
              </div>
            </div>
            
            <div className="flex items-center mt-4">
              <span className="mr-2 text-gray-500">or</span>
              <button className="flex items-center text-blue-600 font-medium text-sm">
                DONATE ANY AMOUNT 
                <div className="ml-1 bg-blue-600 rounded-full text-white w-4 h-4 flex items-center justify-center text-xs">?</div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Section - Image Collage */}
        <div className="w-full md:w-3/5 relative">
          <div className="grid grid-cols-12 gap-2 relative">
            {/* Top row */}
            <div className="col-span-8 row-span-2 rounded-lg overflow-hidden" style={{height: '200px'}}>
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=780&q=80" className="object-cover w-full h-full"/>
            </div>
            <div className="col-span-4 row-span-2 rounded-lg overflow-hidden" style={{height: '200px'}}>
              <img src="https://images.unsplash.com/photo-1531840320144-d5a7e63f6c3b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjI1OXwwfDF8c2VhcmNofDYzfHxmb3JtYWwlMjBhZ2l8ZW58MHx8fHwxNjEyNzY5OTM2&ixlib=rb-1.2.1&q=80&w=1080" className="object-cover w-full h-full"/>
            </div>
            {/* Bottom row */}
            <div className="col-span-6 row-span-1 rounded-lg overflow-hidden" style={{height: '140px'}}>
              <img src="https://images.unsplash.com/photo-1587731410477-4f81919cc6a6?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjI1OXwwfDF8c2VhcmNofDExfHxmb3JtYWwlMjBhZ2l8ZW58MHx8fHwxNjE3Njk5OTM3&ixlib=rb-1.2.1&q=80&w=1080" className="object-cover w-full h-full"/>
            </div>
            <div className="col-span-6 row-span-1 rounded-lg overflow-hidden" style={{height: '140px'}}>
              <img src="https://images.unsplash.com/photo-1576140042412-2a6b0bc0fd0d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjI1OXwwfDF8c2VhcmNofDJ8fGZvcm1hbCUyMGFnfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080" className="object-cover w-full h-full"/>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center text-gray-600">
        <div className="container mx-auto text-sm">
          <p className="mb-4">© 2025 Michigan Healthcare. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-teal-500">Privacy Policy</a>
            <a href="#" className="hover:text-teal-500">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthcarePage;
