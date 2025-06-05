import React from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import {
  Star,
  Play,
  Users,
  BookOpen,
  Award,
  Globe,
  Laptop,
  Briefcase,
  Heart,
  Camera,
  Palette,
  Code,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react"

import h1 from "../assets/h1.png";

function Benefits() {
  return (
    <div id="about">
       {/* Benefits Section */}
      <section className="px-14 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={h1} alt="Online learning benefits" />
          </div>

          <div>
            <div className='flex text-violet-600 items-center gap-2 font-semibold'>
            <Code size={20} color="#8b5cf6" /> ABOUT US
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 max-[380px]:text-3xl">
              Benefit From Our Online Learning Expertise Earn <span className='text-violet-600  '>Professional</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Our platform offers comprehensive courses designed by industry experts. Learn at your own pace and gain
              practical skills that employers value.Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ratione similique modi cum error, laborum ab eaque necessitatibus quos est facilis, neque corrupti quidem magni cupiditate dolores! Eveniet odit veniam, est ab ea eum dolore! Explicabo obcaecati ullam quo sapiente nihil quaerat qui voluptatum saepe fugiat vel. Ipsum, ducimus mollitia.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
