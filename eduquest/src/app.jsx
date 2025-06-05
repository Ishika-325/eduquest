"use client"
import Header from "./pages/Header"
import Hero from "./pages/Hero"
import Categories from "./pages/Categories"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import "./index.css"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
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
import Benefits from "./pages/Benefits"
import Footer from "./pages/Footer"
import Assessment from "./pages/Assessment"
import CoursesSection from "./pages/Courses"
import Destinations from "./pages/Destination"
import Blog from "./pages/Blog"
import TeamSection from "./pages/Instructor"


export default function EduQuestLanding() {
  return (
    <div className="min-h-screen bg-[#e1dce8] px-4 py-4">
       <Header />
      <Hero />
      <Benefits />
      <Categories />
      <Assessment />
      <CoursesSection />
      <Destinations/>
      <TeamSection />
      <Blog />
      <Footer />
    </div>
  )
}
