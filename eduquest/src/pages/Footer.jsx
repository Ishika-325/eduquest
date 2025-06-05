// src/components/Footer.jsx
import React from "react"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Layers
} from "lucide-react" 

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-gray-900  text-gray-300 py-12 px-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 ">
          <div className="flex items-center gap-2">
          <Layers className='mb-4' />
          <h2 className="text-2xl font-bold text-white mb-4">EduQuest</h2>
          </div>
          <p className="text-sm mb-4">
            Empowering learners worldwide with expert-led online courses. Join our
            community and start your journey today.
          </p>
         
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#courses" className="hover:text-white">Courses</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Instructors</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500 md:flex justify-between gap-5">
        
           <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div>
        
        © {new Date().getFullYear()} EduQuest. All rights reserved.
        </div>
        </div>
    
    </footer>
  )
}

export default Footer
