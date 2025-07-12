"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Settings, Plus, MessageSquare, Star, Clock, CheckCircle, XCircle } from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const userProfile = {
    name: "Alex Thompson",
    location: "Seattle, WA",
    avatar: "/placeholder.svg?height=80&width=80",
    skillsOffered: ["JavaScript", "React", "Node.js", "MongoDB"],
    skillsWanted: ["Python", "Machine Learning", "Data Science"],
    rating: 4.8,
    completedSwaps: 12,
    availability: "Weekends & Evenings",
  }

  const swapRequests = [
    {
      id: 1,
      type: "incoming",
      user: "Sarah Chen",
      userAvatar: "/placeholder.svg?height=40&width=40",
      skillOffered: "Python",
      skillWanted: "React",
      status: "pending",
      date: "2 hours ago",
    },
    {
      id: 2,
      type: "outgoing",
      user: "Mike Johnson",
      userAvatar: "/placeholder.svg?height=40&width=40",
      skillOffered: "Data Science",
      skillWanted: "JavaScript",
      status: "accepted",
      date: "1 day ago",
    },
    {
      id: 3,
      type: "incoming",
      user: "Emily Rodriguez",
      userAvatar: "/placeholder.svg?height=40&width=40",
      skillOffered: "UI/UX Design",
      skillWanted: "Node.js",
      status: "pending",
      date: "3 days ago",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "swap_completed",
      message: "Completed swap with John Doe - React for Python",
      date: "2 days ago",
    },
    {
      id: 2,
      type: "rating_received",
      message: "Received 5-star rating from Jane Smith",
      date: "1 week ago",
    },
    {
      id: 3,
      type: "new_request",
      message: "New swap request from Mike Wilson",
      date: "1 week ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-indigo-600">SkillSwap</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                <AvatarFallback>AT</AvatarFallback>
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
                  <AvatarFallback>AT</AvatarFallback>
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
                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
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
                          <p className="text-2xl font-bold">3</p>
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
                          <p className="text-2xl font-bold">{userProfile.completedSwaps}</p>
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
                          <p className="text-2xl font-bold">{userProfile.rating}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Requests */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Swap Requests</CardTitle>
                    <CardDescription>Your latest incoming and outgoing requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {swapRequests.slice(0, 3).map((request) => (
                        <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Avatar>
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
                                {request.type === "incoming" ? "Wants to learn" : "Offering"}: {request.skillOffered} →{" "}
                                {request.skillWanted}
                              </p>
                              <p className="text-xs text-gray-400">{request.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={request.status === "pending" ? "secondary" : "default"}>
                              {request.status}
                            </Badge>
                            {request.status === "pending" && request.type === "incoming" && (
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <XCircle className="h-4 w-4" />
                                </Button>
                                <Button size="sm">
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requests" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>All Swap Requests</CardTitle>
                    <CardDescription>Manage your incoming and outgoing swap requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {swapRequests.map((request) => (
                        <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Avatar>
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
                              <Badge variant="outline" className="mt-1">
                                {request.type === "incoming" ? "Incoming" : "Outgoing"}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={request.status === "pending" ? "secondary" : "default"}>
                              {request.status}
                            </Badge>
                            {request.status === "pending" && (
                              <div className="flex space-x-2">
                                {request.type === "incoming" ? (
                                  <>
                                    <Button size="sm" variant="outline">
                                      Decline
                                    </Button>
                                    <Button size="sm">Accept</Button>
                                  </>
                                ) : (
                                  <Button size="sm" variant="outline">
                                    Cancel
                                  </Button>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent actions and updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                          <div className="flex-shrink-0">
                            {activity.type === "swap_completed" && <CheckCircle className="h-5 w-5 text-green-500" />}
                            {activity.type === "rating_received" && <Star className="h-5 w-5 text-yellow-500" />}
                            {activity.type === "new_request" && <MessageSquare className="h-5 w-5 text-blue-500" />}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{activity.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
