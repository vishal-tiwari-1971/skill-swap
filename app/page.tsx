"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Users, ArrowRight, Star, MapPin, Clock } from "lucide-react"

interface User {
  id: string
  name: string
  location: string
  avatar: string
  skillsOffered: string[]
  skillsWanted: string[]
  rating: number
  availability: string
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [featuredUsers, setFeaturedUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedUsers()
  }, [])

  const fetchFeaturedUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users/browse?limit=3')
      const data = await response.json()

      if (response.ok) {
        setFeaturedUsers(data.users)
      } else {
        console.error('Failed to fetch featured users:', data.error)
      }
    } catch (error) {
      console.error('Error fetching featured users:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">SkillSwap</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/browse" className="text-gray-700 hover:text-indigo-600">
                Browse Skills
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600">
                How it Works
              </a>
              <a href="#community" className="text-gray-700 hover:text-indigo-600">
                Community
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/browse">
                <Button variant="ghost">Browse</Button>
              </Link>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Trade Skills, <span className="text-indigo-600">Build Community</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with others to exchange knowledge and skills. Learn something new while sharing what you know best.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for skills like 'Photoshop', 'Guitar', 'Cooking'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Search</Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Swapping <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/browse">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Browse Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">2,500+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
              <div className="text-gray-600">Skills Exchanged</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Members</h3>
            <p className="text-gray-600">Connect with skilled individuals in our community</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading featured members...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredUsers.map((user) => (
                <Card key={user.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            ? user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                            : "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{user.name}</CardTitle>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {user.location}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{user.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Offers:</h4>
                        <div className="flex flex-wrap gap-1">
                          {user.skillsOffered.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Wants:</h4>
                        <div className="flex flex-wrap gap-1">
                          {user.skillsWanted.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        Available: {user.availability}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!loading && featuredUsers.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No featured members available yet.</p>
              <p className="text-gray-400 text-sm mt-2">Be the first to join our community!</p>
            </div>
          )}
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-gray-600">Simple steps to start swapping skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Create Your Profile</h4>
              <p className="text-gray-600">Sign up and list the skills you can teach and what you want to learn.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Find Your Match</h4>
              <p className="text-gray-600">Browse through members and find someone with complementary skills.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Start Learning</h4>
              <p className="text-gray-600">Connect and begin your skill exchange journey together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h3>
            <p className="text-gray-600">Connect with learners and teachers from around the world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Programming</div>
              <div className="text-gray-600">Web Dev, Python, JavaScript</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Design</div>
              <div className="text-gray-600">UI/UX, Graphic Design, Photoshop</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Creative</div>
              <div className="text-gray-600">Music, Art, Photography</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Business</div>
              <div className="text-gray-600">Marketing, Finance, Strategy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h3>
          <p className="text-indigo-100 mb-8 text-lg">
            Join thousands of learners and teachers in our growing community
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">SkillSwap</h4>
              <p className="text-gray-400">
                Connecting learners and teachers through skill exchange.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Platform</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/browse" className="hover:text-white">Browse Skills</a></li>
                <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
                <li><a href="/profile" className="hover:text-white">Profile</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
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
