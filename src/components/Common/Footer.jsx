import React from 'react';
import Logo from '../../assets/Logo/BookAndExplorelogo.png'
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-4 mb-4">
            <img src={Logo} alt="bookandexplore.in" className="h-10"/>
            <div>
              <h2 className="text-xl font-bold">Srart Tour Travel</h2>
              <p>Your Journey, Our Passion</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip e the 1500s, when an unknown.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul>
            <li><a href="#" className="hover:underline">Index</a></li>
            <li><a href="#" className="hover:underline">Guide</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul>
            <li><a href="#" className="hover:underline">About T3</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Book a demo</a></li>
            <li><a href="#" className="hover:underline">Server status</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
          <ul>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Book a demo</a></li>
            <li><a href="#" className="hover:underline">Server status</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div><p className="mb-4 md:mb-0">Website Visitors: 1233</p></div>
      </div>
      <div className="container mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
         
        <p className="mb-4 md:mb-0">Terms of service | Privacy Policy</p>
        <p className="mb-4 md:mb-0">&copy; All rights reserved by bookandexplore.in | Designed & Developed by Web3grow.in</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
