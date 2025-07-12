"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Settings, Plus, MessageSquare, Star, Clock, CheckCircle, XCircle, Edit } from "lucide-react"

interface UserProfile {
  name: string
  location: string
  avatar: string
  skillsOffered: string[]
  skillsWanted: string[]
  rating: number
  completedSwaps: number
  availability: string
}

interface SwapRequest {
  id: string
  type: 'incoming' | 'outgoing'
  user: string
  userAvatar: string
  skillOffered: string
  skillWanted: string
  status: string
  date: string
}

interface Activity {
  id: string
  type: string
  message: string
  date: string
}

interface DashboardData {
  userProfile: UserProfile
  swapRequests: SwapRequest[]
  recentActivity: Activity[]
  stats: {
    activeRequests: number
    completedSwaps: number
    averageRating: number
  }
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      
      // Get user from localStorage (simple session management)
      const userData = localStorage.getItem('skillswap-user')
      if (!userData) {
        setError('Please login to view dashboard')
        return
      }

      const user = JSON.parse(userData)
      
      const response = await fetch(`/api/users/dashboard?userId=${user.id}`)
      const data = await response.json()

      if (response.ok) {
        setDashboardData(data)
      } else {
        setError(data.error || 'Failed to fetch dashboard data')
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      setError('Failed to fetch dashboard data')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={fetchDashboardData}>Try Again</Button>
        </div>
      </div>
    )
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No dashboard data available</p>
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    )
  }

  const { userProfile, swapRequests, recentActivity, stats } = dashboardData

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-indigo-600">SkillSwap</h1>
            <div className="flex items-center space-x-4">
              <Link href="/browse">
                <Button variant="ghost">Browse</Button>
              </Link>
              <Link href="/profile">
                <Button variant="ghost">Profile</Button>
              </Link>
              <Link href="/create-swap">
                <Button>Create Swap</Button>
              </Link>
              <Avatar>
                <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                <AvatarFallback>
                  {userProfile.name
                    ? userProfile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    : "U"}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                  <AvatarFallback>
                    {userProfile.name
                      ? userProfile.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      : "U"}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{userProfile.name}</CardTitle>
                <CardDescription>{userProfile.location}</CardDescription>
                <div className="flex items-center justify-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-medium">{userProfile.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({userProfile.completedSwaps} swaps)</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Skills I Offer:</h4>
                  <div className="flex flex-wrap gap-1">
                    {userProfile.skillsOffered.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Skills I Want:</h4>
                  <div className="flex flex-wrap gap-1">
                    {userProfile.skillsWanted.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {userProfile.availability}
                </div>
                <div className="space-y-2">
                  <Link href="/profile">
                    <Button className="w-full" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>
                  <Link href="/create-swap">
                    <Button className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Swap
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="requests">Swap Requests</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <MessageSquare className="h-8 w-8 text-blue-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Active Requests</p>
                          <p className="text-2xl font-bold">{stats.activeRequests}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Completed Swaps</p>
                          <p className="text-2xl font-bold">{stats.completedSwaps}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <Star className="h-8 w-8 text-yellow-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">Average Rating</p>
                          <p className="text-2xl font-bold">{stats.averageRating}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{activity.message}</p>
                            <p className="text-xs text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requests" className="space-y-4">
                <div className="space-y-4">
                  {swapRequests.map((request) => (
                    <Card key={request.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={request.userAvatar || "/placeholder.svg"} alt={request.user} />
                              <AvatarFallback>
                                {request.user
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{request.user}</p>
                              <p className="text-sm text-gray-500">
                                {request.skillOffered} ↔ {request.skillWanted}
                              </p>
                              <p className="text-xs text-gray-400">{request.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={request.status === 'accepted' ? 'default' : 'secondary'}
                              className={
                                request.status === 'accepted'
                                  ? 'bg-green-100 text-green-800'
                                  : request.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }
                            >
                              {request.status}
                            </Badge>
                            {request.status === 'pending' && (
                              <div className="flex space-x-1">
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <Card key={activity.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{activity.message}</p>
                            <p className="text-xs text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
