"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, X, Upload, Star } from "lucide-react"

export default function ProfilePage() {
  const [isPublic, setIsPublic] = useState(true)
  const [skillsOffered, setSkillsOffered] = useState(["JavaScript", "React", "Node.js", "MongoDB"])
  const [skillsWanted, setSkillsWanted] = useState(["Python", "Machine Learning", "Data Science"])
  const [newSkillOffered, setNewSkillOffered] = useState("")
  const [newSkillWanted, setNewSkillWanted] = useState("")

  const addSkillOffered = () => {
    if (newSkillOffered.trim() && !skillsOffered.includes(newSkillOffered.trim())) {
      setSkillsOffered([...skillsOffered, newSkillOffered.trim()])
      setNewSkillOffered("")
    }
  }

  const addSkillWanted = () => {
    if (newSkillWanted.trim() && !skillsWanted.includes(newSkillWanted.trim())) {
      setSkillsWanted([...skillsWanted, newSkillWanted.trim()])
      setNewSkillWanted("")
    }
  }

  const removeSkillOffered = (skill: string) => {
    setSkillsOffered(skillsOffered.filter((s) => s !== skill))
  }

  const removeSkillWanted = (skill: string) => {
    setSkillsWanted(skillsWanted.filter((s) => s !== skill))
  }

  const reviews = [
    {
      id: 1,
      reviewer: "Sarah Chen",
      reviewerAvatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment:
        "Alex was an amazing teacher! Helped me understand React concepts clearly and patiently answered all my questions.",
      skill: "React",
      date: "2 weeks ago",
    },
    {
      id: 2,
      reviewer: "Mike Johnson",
      reviewerAvatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment: "Great experience learning Node.js from Alex. Very knowledgeable and provided excellent resources.",
      skill: "Node.js",
      date: "1 month ago",
    },
    {
      id: 3,
      reviewer: "Emily Rodriguez",
      reviewerAvatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      comment: "Solid JavaScript fundamentals session. Alex explained complex concepts in an easy-to-understand way.",
      skill: "JavaScript",
      date: "2 months ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-indigo-600">SkillSwap</h1>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600">
                Dashboard
              </Link>
              <Link href="/browse" className="text-gray-700 hover:text-indigo-600">
                Browse
              </Link>
              <Link href="/profile" className="text-indigo-600 font-medium">
                Profile
              </Link>
            </nav>
            <Button>Save Changes</Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="edit" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit">Edit Profile</TabsTrigger>
            <TabsTrigger value="reviews">Reviews & Ratings</TabsTrigger>
          </TabsList>

          <TabsContent value="edit" className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Photo */}
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                    <AvatarFallback>AT</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Alex Thompson" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.thompson@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input id="location" defaultValue="Seattle, WA" />
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Select defaultValue="weekends-evenings">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="evenings">Evenings</SelectItem>
                        <SelectItem value="weekends-evenings">Weekends & Evenings</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell others about yourself, your experience, and what you're passionate about..."
                    defaultValue="Full-stack developer with 5+ years of experience. Passionate about modern web technologies and always eager to learn new skills. I love teaching and sharing knowledge with others in the community."
                  />
                </div>

                {/* Privacy Setting */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Public Profile</h4>
                    <p className="text-sm text-gray-500">Make your profile visible to other users</p>
                  </div>
                  <Switch checked={isPublic} onCheckedChange={setIsPublic} />
                </div>
              </CardContent>
            </Card>

            {/* Skills Offered */}
            <Card>
              <CardHeader>
                <CardTitle>Skills I Offer</CardTitle>
                <CardDescription>List the skills you can teach or share with others</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {skillsOffered.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                      {skill}
                      <button onClick={() => removeSkillOffered(skill)} className="ml-2 hover:text-red-600">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a skill you can offer..."
                    value={newSkillOffered}
                    onChange={(e) => setNewSkillOffered(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkillOffered()}
                  />
                  <Button onClick={addSkillOffered}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skills Wanted */}
            <Card>
              <CardHeader>
                <CardTitle>Skills I Want to Learn</CardTitle>
                <CardDescription>List the skills you'd like to learn from others</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {skillsWanted.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                      {skill}
                      <button onClick={() => removeSkillWanted(skill)} className="ml-2 hover:text-red-600">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a skill you want to learn..."
                    value={newSkillWanted}
                    onChange={(e) => setNewSkillWanted(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkillWanted()}
                  />
                  <Button onClick={addSkillWanted}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            {/* Rating Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Rating Summary</CardTitle>
                <CardDescription>Your overall rating and feedback from the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-600">4.8</div>
                    <div className="flex items-center justify-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Overall Rating</div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <span className="text-sm w-8">{rating}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: rating === 5 ? "70%" : rating === 4 ? "25%" : "5%" }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 w-8">
                            {rating === 5 ? "14" : rating === 4 ? "5" : "1"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">20</div>
                    <div className="text-sm text-gray-500">Total Reviews</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>Feedback from your recent skill exchanges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.reviewerAvatar || "/placeholder.svg"} alt={review.reviewer} />
                          <AvatarFallback>
                            {review.reviewer
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium">{review.reviewer}</h4>
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`h-4 w-4 ${star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                    />
                                  ))}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {review.skill}
                                </Badge>
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
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
  )
}
