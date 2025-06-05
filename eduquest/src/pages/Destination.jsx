import React from "react";
import {Code} from 'lucide-react'

const destinations = [
  { name: "London", courses: 596, image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Paris", courses: 596, image: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Casablanca", courses: 596, image: "https://media.istockphoto.com/id/2166954164/photo/hassan-ii-mosque-in-casablanca-morocco.webp?b=1&s=612x612&w=0&k=20&c=yuxSw1lepemezy9lUpqMP-Z3jJF8vj89cvLW97IXtis=" },
  { name: "Rome", courses: 596, image: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Barcelona", courses: 596, image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Amsterdam", courses: 596, image: "https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Istanbul", courses: 596, image: "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Madrid", courses: 596, image: "https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const Destinations = () => {
  return (
    <section className="px-14 py-16 bg-white text-center">
      <div className='flex text-purple-600 text-sm font-semibold tracking-wide uppercase mb-3 items-center justify-center gap-2'>
                   <Code size={20} color="#8b5cf6" />Destination
          </div>
      <h2 className="text-3xl font-bold mb-4">Choose Your Courses Destination</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Consectetur morbi et elementum amet arcu venenatis vitae. Ullamcorper
        interdum odio quis risus ac et ac. Eget at mi tempor nunc donec elit
        lacus porta venenatis.
      </p>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex p-2 transform transition duration-300 hover:scale-110"
          >
            <div className="relative h-24 w-full">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-opacity-0.2 flex items-center justify-center">
                <h4 className="text-white font-bold text-lg">{item.name}</h4>
              </div>
            </div>
            <div className="p-2 flex justify-center items-center">
              <span className="text-purple-600 font-semibold text-lg">
                {item.courses}
              </span>
              <span className="text-sm text-gray-600 ml-1">Course</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
