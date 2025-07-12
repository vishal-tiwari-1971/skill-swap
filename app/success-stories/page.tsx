"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Quote, Calendar, MapPin, Users, TrendingUp, Heart } from "lucide-react"

export default function SuccessStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const successStories = [
    {
      id: 1,
      title: "From Designer to Developer",
      users: {
        user1: {
          name: "Sarah Chen",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "San Francisco, CA",
          skillOffered: "UI/UX Design",
          skillLearned: "React Development",
        },
        user2: {
          name: "Mike Johnson",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "New York, NY",
          skillOffered: "React Development",
          skillLearned: "UI/UX Design",
        }
      },
      story: "Sarah and Mike connected through SkillSwap and embarked on a 3-month skill exchange journey. Sarah taught Mike the principles of design thinking and user experience, while Mike helped Sarah build her first React application. Today, Sarah works as a full-stack developer, and Mike has launched his own design agency.",
      rating: 5,
      duration: "3 months",
      date: "2024",
      category: "tech",
      tags: ["Design", "Development", "Career Change"],
      testimonial: "SkillSwap completely changed my career trajectory. I went from being a designer to a developer, and now I can do both!",
      author: "Sarah Chen"
    },
    {
      id: 2,
      title: "Language Exchange Success",
      users: {
        user1: {
          name: "Maria Rodriguez",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "Madrid, Spain",
          skillOffered: "Spanish Language",
          skillLearned: "English Language",
        },
        user2: {
          name: "Emma Thompson",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "London, UK",
          skillOffered: "English Language",
          skillLearned: "Spanish Language",
        }
      },
      story: "Maria and Emma met through SkillSwap and practiced languages together twice a week for 6 months. They used video calls, shared cultural insights, and even planned a trip to visit each other's countries. Both achieved fluency and gained lifelong friendships.",
      rating: 5,
      duration: "6 months",
      date: "2024",
      category: "language",
      tags: ["Spanish", "English", "Cultural Exchange"],
      testimonial: "Not only did I learn Spanish, but I also gained a best friend and a deeper understanding of Spanish culture.",
      author: "Emma Thompson"
    },
    {
      id: 3,
      title: "Cooking Skills Exchange",
      users: {
        user1: {
          name: "David Kim",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "Los Angeles, CA",
          skillOffered: "Korean Cooking",
          skillLearned: "Italian Cooking",
        },
        user2: {
          name: "Sofia Rossi",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "Chicago, IL",
          skillOffered: "Italian Cooking",
          skillLearned: "Korean Cooking",
        }
      },
      story: "David and Sofia exchanged cooking skills through virtual cooking sessions. They learned to make authentic Korean and Italian dishes, shared family recipes, and even started a food blog together documenting their culinary journey.",
      rating: 5,
      duration: "4 months",
      date: "2024",
      category: "creative",
      tags: ["Cooking", "Korean", "Italian", "Food Blog"],
      testimonial: "I never thought I could learn to cook Korean food from my kitchen in Chicago. SkillSwap made it possible!",
      author: "Sofia Rossi"
    },
    {
      id: 4,
      title: "Music Production Collaboration",
      users: {
        user1: {
          name: "Alex Turner",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "Austin, TX",
          skillOffered: "Guitar Playing",
          skillLearned: "Music Production",
        },
        user2: {
          name: "Jordan Lee",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "Nashville, TN",
          skillOffered: "Music Production",
          skillLearned: "Guitar Playing",
        }
      },
      story: "Alex and Jordan combined their skills to create original music together. Alex learned music production software while teaching Jordan advanced guitar techniques. They released an EP together and performed at local venues.",
      rating: 5,
      duration: "5 months",
      date: "2024",
      category: "creative",
      tags: ["Music", "Production", "Guitar", "Collaboration"],
      testimonial: "We went from strangers to bandmates thanks to SkillSwap. Our EP is now on Spotify!",
      author: "Alex Turner"
    },
    {
      id: 5,
      title: "Business Skills Exchange",
      users: {
        user1: {
          name: "Lisa Wang",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "Seattle, WA",
          skillOffered: "Digital Marketing",
          skillLearned: "Financial Planning",
        },
        user2: {
          name: "Robert Davis",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "Boston, MA",
          skillOffered: "Financial Planning",
          skillLearned: "Digital Marketing",
        }
      },
      story: "Lisa and Robert exchanged business skills to help each other grow their respective companies. Lisa learned financial management while teaching Robert digital marketing strategies. Both saw significant growth in their businesses.",
      rating: 5,
      duration: "2 months",
      date: "2024",
      category: "business",
      tags: ["Marketing", "Finance", "Business Growth"],
      testimonial: "The skills I learned helped me increase my business revenue by 40% in just two months.",
      author: "Lisa Wang"
    },
    {
      id: 6,
      title: "Photography & Video Exchange",
      users: {
        user1: {
          name: "James Wilson",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "Portland, OR",
          skillOffered: "Photography",
          skillLearned: "Video Editing",
        },
        user2: {
          name: "Nina Patel",
          avatar: "/placeholder.svg?height=60&width=60",
          location: "Denver, CO",
          skillOffered: "Video Editing",
          skillLearned: "Photography",
        }
      },
      story: "James and Nina exchanged photography and video editing skills. They collaborated on several projects, including a documentary about local artists. Their work was featured in a local gallery exhibition.",
      rating: 5,
      duration: "3 months",
      date: "2024",
      category: "creative",
      tags: ["Photography", "Video Editing", "Documentary", "Exhibition"],
      testimonial: "We created something beautiful together that neither of us could have done alone.",
      author: "Nina Patel"
    }
  ]

  const categories = [
    { value: "all", label: "All Stories" },
    { value: "tech", label: "Technology" },
    { value: "language", label: "Language" },
    { value: "creative", label: "Creative Arts" },
    { value: "business", label: "Business" },
  ]

  const filteredStories = selectedCategory === "all" 
    ? successStories 
    : successStories.filter(story => story.category === selectedCategory)

  const stats = [
    { label: "Success Stories", value: "500+", icon: Heart },
    { label: "Skills Exchanged", value: "1,200+", icon: TrendingUp },
    { label: "Happy Users", value: "2,500+", icon: Users },
    { label: "Countries", value: "45+", icon: MapPin },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-indigo-600">SkillSwap</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link href="/browse" className="text-gray-700 hover:text-indigo-600">
                Browse Skills
              </Link>
              <Link href="/#how-it-works" className="text-gray-700 hover:text-indigo-600">
                How it Works
              </Link>
              <Link href="/success-stories" className="text-indigo-600 font-medium">
                Success Stories
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how SkillSwap has transformed lives and careers through meaningful skill exchanges. 
            Real stories from real people who found their perfect learning partners.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-5">
                {categories.map((category) => (
                  <TabsTrigger key={category.value} value={category.value} className="text-xs">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {story.duration}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          {story.rating}/5
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {story.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Users */}
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={story.users.user1.avatar} alt={story.users.user1.name} />
                        <AvatarFallback>
                          {story.users.user1.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <div className="font-medium">{story.users.user1.name}</div>
                        <div className="text-gray-500">{story.users.user1.skillOffered} → {story.users.user1.skillLearned}</div>
                      </div>
                    </div>
                    <div className="text-gray-400">↔</div>
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={story.users.user2.avatar} alt={story.users.user2.name} />
                        <AvatarFallback>
                          {story.users.user2.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <div className="font-medium">{story.users.user2.name}</div>
                        <div className="text-gray-500">{story.users.user2.skillOffered} → {story.users.user2.skillLearned}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{story.story}</p>
                  
                  {/* Testimonial */}
                  <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <div className="flex items-start space-x-2">
                      <Quote className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 italic">"{story.testimonial}"</p>
                        <p className="text-sm text-gray-500 mt-2">— {story.author}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-sm text-gray-500">{story.date}</span>
                    <Button variant="outline" size="sm">
                      Read Full Story
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Own Success Story?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their lives through skill exchange. 
              Find your perfect learning partner today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/browse">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  Browse Skills
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">SkillSwap</h4>
              <p className="text-gray-400">Connecting learners and building communities through skill exchange.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/browse" className="hover:text-white">
                    Browse Skills
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-white">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkillSwap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 