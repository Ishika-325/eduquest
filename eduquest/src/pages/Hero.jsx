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


import h2 from "../assets/h2.png"

function Hero() {
  return (
    <div id="home">
        <section className="px-14 py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 heading max-[400px]:text-3xl">Empowering Your Dreams with Our Courses</h1>
            <p className="text-lg text-gray-600 mb-8">
              Unlock your potential with our comprehensive online learning platform. Join thousands of students who have
              transformed their careers.
            </p>
            <div className="flex items-center mecheck gap-4 mb-8">
              <Button className="bg-indigo-600  px-8 py-3 text-white transform transition duration-300 hover:scale-110">Find Courses </Button>
              <Button variant="outline" className="flex items-center gap-2 hover:bg-indigo-600 hover:text-white">
                <Play className="w-4 h-4"  />
                Watch Demo
              </Button>
              <style>{`
                     @media (max-width: 450px) {
                      .mecheck {
                       flex-direction: column ;
                         }
                       }
            `}</style>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                src={h2}
                alt="Student learning"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
