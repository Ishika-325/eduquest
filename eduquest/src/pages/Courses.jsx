import React from "react";
import {Code} from 'lucide-react';

import course1 from "../assets/b1.png";
import course2 from "../assets/b2.png";
import course3 from "../assets/b3.png";

const CourseCard = ({ image, title, description, price }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm w-full transform transition duration-300 hover:-translate-y-2 group">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      {/* Rating and metadata */}
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <span className="text-yellow-500 mr-1">4.5 ★★★★★</span>
        <span className="ml-1">(15,456)</span>
        <span className="mx-2">•</span>
        <span>Lesson 10</span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 ">{description}</p>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button className=" border px-4 py-2 rounded-md   text-sm transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
          Buy Now
        </button>
        <span className="font-bold text-gray-800">${price}</span>
      </div>
    </div>
  </div>
);

const CoursesSection = () => {
  return (
    <section id="courses" className="py-8 bg-white px-16">
      <div className="max-w-7xl mx-auto text-center">
       <div className='flex text-purple-600 text-sm font-semibold tracking-wide uppercase mb-3 items-center justify-center gap-2'>
                   <Code size={20} color="#8b5cf6" />Popular Courses
          </div>
        <h2 className="text-4xl font-bold mb-4 max-[380px]:text-3xl" >Choose Your Next Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Consectetur morbi et elementum amet arcu venenatis vitae. Ullamcorper
          interdum odio quis risus ac et ac. Eget at mi tempor nunc donec elit
          lacus porta venenatis. lore
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <CourseCard
            image={course1}
            title="Sales Accelerator: Closing Deals Like a Pro"
            description="Consectetur morbi et elementum amet venenatis vitae..."
            price={350}
          />
          <CourseCard
            image={course2}
            title="Money Management & Investment Strategies for All"
            description="Consectetur morbi et elementum amet venenatis vitae  ..."
            price={350}
          />
          <CourseCard
            image={course3}
            title="HR Fundamentals: Hiring, Training & Retention"
            description="Consectetur morbi et elementum amet venenatis vitae..."
            price={350}
          />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
