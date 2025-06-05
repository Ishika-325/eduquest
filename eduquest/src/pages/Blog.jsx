import React from "react";
import {Code } from "lucide-react"
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import cta from "../assets/cta.png";

const blogs = [
  {
    title: "Top 10 Online Courses to Boost Your Career in 2025",
    author: "Mary Smart",
    date: "Jan 30, 2025",
    image: a1,
  },
  {
    title: "Why Online Learning is the Key to Career Growth",
    author: "Mary Smart",
    date: "Jan 30, 2025",
    image: a2,
  },
  {
    title: "How to Stay Motivated While You Learning Online: Tips & Tricks",
    author: "Mary Smart",
    date: "Jan 30, 2025",
    image: a3,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-white py-16 px-14 text-center">
      <div className='flex text-purple-600 text-sm font-semibold tracking-wide uppercase mb-3 items-center justify-center gap-2 '>
            <Code size={20} color="#8b5cf6" />our blog
            </div>
      <h2 className="text-3xl font-bold mb-4">Latest News & Blogs</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Consectetur morbi et elementum amet arcu venenatis vitae. Ullamcorper
        interdum odio quis risus ac et ac. Eget at mi tempor nunc donec elit
        lacus porta venenatis.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden text-left transform transition duration-300 hover:-translate-y-2"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <div className="text-sm text-gray-400 mb-1">
                🖤 {blog.author} | 📅 {blog.date}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h4>
              <p className="text-sm text-gray-500">
                Nunc vehicula volutpat odio in ullamcorper. Integer eget
                hendrerit velit, at rhoncus...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 relative rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-500 p-10 text-white overflow-hidden md:flex group" >
        <div className="absolute inset-0 ">
          <img
            src={cta}
            alt="cta background"
            className="h-full object-cover "
          />
        </div>
        <div className="relative z-10 text-left md:mx-auto ">
          <p className="text-gray-200 font-semibold text-sm md:text-md">Keep in Touch</p>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            With our new courses
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-lg focus:outline-none text-gray-200 w-full sm:w-auto flex-grow transition-all duration-200 focus:ring-white focus:ring-2 border group-hover:ring-1"
            />
            <button className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-lg transform transition duration-300 hover:scale-110">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
