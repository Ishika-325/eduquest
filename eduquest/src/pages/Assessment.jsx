import React from "react";
import chart1 from "../assets/categories.png"; // Placeholder images
import {Code} from "lucide-react"


const Assessment = () => {
  return (
    <section className="bg-white pb-8 pt-16 px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <div className='flex text-purple-600 text-sm font-semibold tracking-wide uppercase mb-3 items-center gap-2 max-[1024px]:justify-center'>
            <Code size={20} color="#8b5cf6" />Specialized Program
            </div>
          <h2 className="text-4xl font-bold mb-4 leading-tight max-[380px]:text-3xl">
            Assessment Program <br />
            Based on Competencies
          </h2>
          <p className="text-gray-600 mb-6">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem magnam neque magni harum in, quos dolorem earum facilis saepe aut maiores maxime cum perferendis voluptatem voluptate est repudiandae explicabo nesciunt, repellendus recusandae inventore fugit? Hic, quaerat facere quia molestiae quam labore. Temporibus aut, error earum cum, incidunt laborum officia, nihil sint exercitationem sequi tenetur quisquam? Iusto atque modi, quos quis dolorum saepe perspiciatis enim eum nostrum ipsum mollitia inventore!
          </p>
          <button className="bg-indigo-600 transform transition duration-300 hover:scale-110 text-white font-medium px-6 py-3 rounded-lg transition">
            Read More
          </button>
        </div>

        {/* Right Images */}
        <div className="relative">
          <img src={chart1} alt="Chart 1"  />
        </div>
      </div>
    </section>
  );
};

export default Assessment;
