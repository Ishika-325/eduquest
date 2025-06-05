import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Users, BookOpen, Smile, GraduationCap, Share2 , Facebook,
  Instagram,
  Linkedin,
  Youtube, Code} from "lucide-react";
import map from '../assets/worldmap.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';


const instructors = [
  {
    name: "JESUS PENDLY",
    title: "Instructor",
    image: "https://img.freepik.com/free-photo/vertical-shot-male-wearing-suit-tie-standing-classroom_181624-14287.jpg?ga=GA1.1.1555643979.1731670980&semt=ais_items_boosted&w=740"
  },
  {
    name: "MELISSA NELSON",
    title: "Instructor",
    image: "https://img.freepik.com/free-photo/smiley-businesswoman-posing-city-with-arms-crossed_23-2148767033.jpg?ga=GA1.1.1555643979.1731670980&semt=ais_hybrid&w=740"
  },
  {
    name: "MICHAEL CHANCY",
    title: "Instructor",
    image: "https://img.freepik.com/premium-photo/young-manager-smiling-modern-office-portrait-handsome-businessman_153228-984.jpg?ga=GA1.1.1555643979.1731670980&semt=ais_hybrid&w=740"
  },
  {
    name: "BETTY R. RAZO",
    title: "Instructor",
    image: "https://img.freepik.com/free-photo/businesswoman-posing_23-2148142829.jpg?ga=GA1.1.1555643979.1731670980&semt=ais_hybrid&w=740"
  }
];

const stats = [
  { icon: Users, value: "3K+", label: "Successfully Trained" },
  { icon: BookOpen, value: "15K+", label: "Classes Completed" },
  { icon: Smile, value: "97K+", label: "Satisfaction Rate" },
  { icon: GraduationCap, value: "102K+", label: "Students Community" }
];

export default function TeamSection() {
  return (
    <div id="more" className="bg-white py-8 ">
    <div className="bg-[#7764ed] text-white pt-8 pb-45 px-14 ">
      <div className="text-center max-w-3xl mx-auto mb-12 ">
        <div className='flex  text-sm font-semibold tracking-wide uppercase mb-3 items-center justify-center gap-2'>
                   <Code size={20}  />our team
          </div>
        <h1 className="text-4xl font-semibold mb-4">Meet Our Expert Instructor</h1>
        <p className="text-gray-200 text-sm">
          Consectetur modi et elementum amet arcu venenatis vitae. Ullamcorper interdum odio risus
          donec odio orci ac erat. Egat et in tempor nunc donec vitae donec porta venenatis.
        </p>
      </div>
      </div>

     <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6  mx-2 px-10 max-[450px]:px-1 mt-[-166px] ">
        {instructors.map((instructor, index) => (
          <Card key={index} className="text-center rounded group">
            <CardContent className="p-0 rounded">
              <Avatar className="h-70 mx-auto rounded">
                <AvatarImage src={instructor.image} alt={instructor.name} />
                <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
       
              </Avatar>
              <div className="bg-[#3e3775] h-20 rounded ">
               <div className="flex justify-center relative top-[-20px] group/card">
               <div className="h-[40px] w-[40px] bg-white group-hover:bg-[#7764ed] group-hover:text-white flex justify-center items-center rounded-full py-auto"><Share2 /></div>       
               <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover/card:opacity-100 flex gap-4 p-2 transition-opacity duration-300">
        <a href="#" aria-label="Facebook" className="w-8 h-8 bg-neutral-600 rounded-full  hover:bg-[#7764ed] text-white flex items-center justify-center">
          <Facebook className="w-5 h-5  " />
        </a>
        <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-neutral-600 rounded-full  hover:bg-[#7764ed] text-white flex items-center justify-center">
          <Linkedin className="w-5 h-5  " />
        </a>
        <a href="#" aria-label="Instagram" className="w-8 h-8 bg-neutral-600 rounded-full  hover:bg-[#7764ed] text-white flex items-center justify-center">
          <Instagram className="w-5 h-5 " />
        </a>
        <a href="#" aria-label="YouTube" className="w-8 h-8 bg-neutral-600 rounded-full  hover:bg-[#7764ed] text-white flex items-center justify-center">
          <Youtube className="w-5 h-5   " />
        </a>
      </div> </div> 
               <div className="relative my-0 top-[-15px]">
              <h3 className="font-semibold text-white text-lg">{instructor.name}</h3>
              <p className="text-sm text-white">{instructor.title}</p>
              </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-[#7764ed] text-white rounded-xl py-10 px-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto relative top-[78px]">
        {stats.map(({ icon: Icon, value, label }, index) => (
          <div key={index}>
            <Icon className="mx-auto mb-2 w-6 h-6" />
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm">{label}</div>
          </div>
        ))}
      </div>
   <div
  className="bg-[#faf8fd] bg-cover bg-center px-14 py-16 pt-30"
  style={{ backgroundImage: `url(${map})` }}
>
  <div className="text-center mx-auto max-w-4xl">
    <div className='flex text-purple-600 text-sm font-semibold tracking-wide uppercase mb-3 items-center justify-center gap-2'>
                       <Code size={20} color="#8b5cf6" />Testimonial
              </div>
    <h2 className="text-3xl font-bold text-gray-900 mb-6">From Our Satisfied Clients</h2>
    <p className="text-gray-600 mb-8">
      Consectetur modi et elementum amet arcu venenatis vitae. Ullamcorper interdum odio risus
      donec odio orci ac erat. Egat et in tempor nunc donec vitae donec porta venenatis.
    </p>
  </div>

  <style>{`
  .swiper-pagination-bullet {
    background-color: #d1c4f9; /* optional: lighter purple when inactive */
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #8b5cf6 !important; /* purple-500 */
  }
`}</style>

  {/* Swiper Carousel */}
  <Swiper
    modules={[Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
    className="px-4"
  >
    {[1, 2, 3, 4, 5].map((_, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white border rounded-lg p-6 shadow-md text-left transition-transform hover:border-2 h-full">
          <p className="italic text-gray-700 mb-4">
            "Nibh euismod eget a lacus aliquet et eros. Et massa interdum nec, egestas ut nunc. Arcu
            massa, consectetur pellentesque faucibus tellus. Tellus malesuada erat massa.Consectetur morbi et elementum amet arcu venenatis vitae. Ullamcorper
          interdum odio quis risus ac et ac. Eget at mi tempor nunc donec elit
          lacus porta venenatis. lore"
          </p>
          <div className="font-semibold text-gray-900">JESUS PENDLY</div>
          <div className="text-sm text-gray-500">CEO at Eduwebs</div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
        </div>
      </div>
      
  );
}
