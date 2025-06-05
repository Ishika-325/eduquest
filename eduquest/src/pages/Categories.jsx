import React from "react";
import {
  Briefcase,
  DollarSign,
  Users,
  Globe,
  Server,
  PieChart,
  ShoppingCart,
  Building2,
  ShieldCheck,
  Hotel,
  UserCog,
  Code,
  ClipboardList
} from "lucide-react"; 

const categories = [
  { label: "Corporate Communication", icon: <Briefcase className="w-6 h-6" /> },
  { label: "Finance", icon: <DollarSign className="w-6 h-6" /> },
  { label: "General Management", icon: <Users className="w-6 h-6" /> },
  { label: "Hospitality and Tourism", icon: <Hotel className="w-6 h-6" /> },
  { label: "Human Resource", icon: <UserCog className="w-6 h-6" /> },
  { label: "IT and Data", icon: <Server className="w-6 h-6" /> },
  { label: "Procurement and Sales", icon: <ShoppingCart className="w-6 h-6" /> },
  { label: "Real Estate and Investment", icon: <Building2 className="w-6 h-6" /> },
  { label: "Risk and Audit", icon: <PieChart className="w-6 h-6" /> },
  { label: "Secretary and Administration", icon: <ClipboardList className="w-6 h-6" /> },
  { label: "Politics and Security", icon: <ShieldCheck className="w-6 h-6" /> },
];

const CategoriesSection = () => {
  return (
    <section id="category" className="bg-gray-50 py-16 px-14 text-center text-gray-600">
      <div className="max-w-5xl mx-auto">
        <div className='flex text-violet-600 items-center gap-2 justify-center font-semibold'>
            <Code size={20} color="#8b5cf6" /> CATEGORIES
        </div>
        <h2 className="text-3xl text-black font-bold mb-4">Browse By Categories</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Consectetur morbi et elementum amet arcu venenatis vitae. Ullamcorper
          interdum odio quis risus ac et ac. Eget at mi tempor nunc donec elit
          lacus porta venenatis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 border rounded-lg shadow-sm transition hover:text-purple-600 bg-white`}
            >
              <div className="p-2 rounded-full border border-gray-300">
                {cat.icon}
              </div>
              <span className="text-sm font-medium">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
