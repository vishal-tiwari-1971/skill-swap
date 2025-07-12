"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, Clock, Star, MessageSquare } from "lucide-react"

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const users = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "San Francisco, CA",
      avatar: "/placeholder.svg?height=60&width=60",
      skillsOffered: ["React", "TypeScript", "UI/UX Design", "Figma"],
      skillsWanted: ["Python", "Data Science", "Machine Learning"],
      rating: 4.9,
      completedSwaps: 15,
      availability: "Weekends",
      isOnline: true,
    },
    {
      id: 2,
      name: "Mike Johnson",
      location: "New York, NY",
      avatar: "/placeholder.svg?height=60&width=60",
      skillsOffered: ["Python", "Machine Learning", "Data Analysis", "SQL"],
      skillsWanted: ["React", "Frontend Development", "JavaScript"],
      rating: 4.8,
      completedSwaps: 22,
      availability: "Evenings",
      isOnline: false,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Austin, TX",
      avatar: "/placeholder.svg?height=60&width=60",
      skillsOffered: ["Graphic Design", "Photoshop", "Branding", "Illustration"],
      skillsWanted: ["Web Development", "JavaScript", "CSS"],
      rating: 4.7,
      completedSwaps: 8,
      availability: "Flexible",
      isOnline: true,
    },
    {
      id: 4,
      name: "David Kim",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg?height=60&width=60",
      skillsOffered: ["Node.js", "Express", "MongoDB", "AWS"],
      skillsWanted: ["React Native", "Mobile Development", "Swift"],
      rating: 4.6,
      completedSwaps: 12,
      availability: "Weekdays",
      isOnline: true,
    },
    {
      id: 5,
      name: "Lisa Wang",
      location: "Chicago, IL",
      avatar: "/placeholder.svg?height=60&width=60",
      skillsOffered: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
      skillsWanted: ["Web Development", "WordPress", "E-commerce"],
      rating: 4.9,
      completedSwaps: 18,
      availability: "Evenings & Weekends",
      isOnline: false,
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Boston, MA",
      avatar: "/placeholder.svg?height=60&width=60",
      skillsOffered: ["Photography", "Video Editing", "Adobe Creative Suite"],
      skillsWanted: ["Web Design", "HTML/CSS", "WordPress"],
      rating: 4.5,
      completedSwaps: 6,
      availability: "Weekends",
      isOnline: true,
    },
  ]

  const categories = [
    { value: "all", label: "All Skills" },
    { value: "programming", label: "Programming" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "data", label: "Data Science" },
    { value: "creative", label: "Creative" },
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchQuery === "" ||
      user.skillsOffered.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      user.skillsWanted.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-indigo-600">SkillSwap</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </a>
              <a href="/dashboard" className="text-gray-700 hover:text-indigo-600">
                Dashboard
              </a>
              <a href="/browse" className="text-indigo-600 font-medium">
                Browse
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Profile</Button>
              <Button>Post Skill</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by skill, name, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredUsers.length} of {users.length} members
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <Select defaultValue="rating">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="swaps">Completed Swaps</SelectItem>
                  <SelectItem value="recent">Recently Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {user.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {user.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{user.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{user.completedSwaps} swaps</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-green-700 mb-2 text-sm">Offers:</h4>
                  <div className="flex flex-wrap gap-1">
                    {user.skillsOffered.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {user.skillsOffered.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                        +{user.skillsOffered.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2 text-sm">Wants:</h4>
                  <div className="flex flex-wrap gap-1">
                    {user.skillsWanted.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {user.skillsWanted.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                        +{user.skillsWanted.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Available: {user.availability}
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Request Swap
                  </Button>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  )
}
