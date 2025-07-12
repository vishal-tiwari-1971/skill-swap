"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Plus, Save } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  avatar: string
}

export default function CreateSwapPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skill1: "",
    skill2: ""
  })

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      setLoading(true)
      
      const userData = localStorage.getItem('skillswap-user')
      if (!userData) {
        setError('Please login to create a swap')
        return
      }

      const user = JSON.parse(userData)
      setUser(user)
    } catch (error) {
      console.error('Error fetching user:', error)
      setError('Failed to fetch user data')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.skill1 || !formData.skill2) {
      setError('Please fill in all required fields')
      return
    }

    try {
      setSaving(true)
      setError("")
      setSuccess("")
      
      const userData = localStorage.getItem('skillswap-user')
      if (!userData) {
        setError('Please login to create a swap')
        return
      }

      const user = JSON.parse(userData)
      
      const response = await fetch('/api/swaps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          user1Id: user.id
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess('Swap request created successfully!')
        setFormData({
          title: "",
          description: "",
          skill1: "",
          skill2: ""
        })
      } else {
        setError(data.error || 'Failed to create swap request')
      }
    } catch (error) {
      console.error('Error creating swap:', error)
      setError('Failed to create swap request')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (error && !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="inline-flex items-center text-gray-600 hover:text-indigo-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-indigo-600">SkillSwap</h1>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/browse">
                <Button variant="ghost">Browse</Button>
              </Link>
              <Link href="/profile">
                <Button variant="ghost">Profile</Button>
              </Link>
              {user && (
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
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Create New Swap Request
            </CardTitle>
            <CardDescription>
              Create a new skill exchange request. List what you can offer and what you want to learn.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            
            {success && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Swap Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., React for Python, Guitar for Spanish"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe what you're looking for and any specific requirements..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="skill1">Skill I Can Offer *</Label>
                  <Input
                    id="skill1"
                    value={formData.skill1}
                    onChange={(e) => setFormData({ ...formData, skill1: e.target.value })}
                    placeholder="e.g., React, Guitar, Cooking"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skill2">Skill I Want to Learn *</Label>
                  <Input
                    id="skill2"
                    value={formData.skill2}
                    onChange={(e) => setFormData({ ...formData, skill2: e.target.value })}
                    placeholder="e.g., Python, Spanish, Photography"
                    required
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button type="submit" disabled={saving} className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  {saving ? "Creating..." : "Create Swap Request"}
                </Button>
                <Link href="/dashboard">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Tips for a Great Swap Request</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600">
                <strong>Be specific:</strong> Instead of "Programming", try "React.js" or "Python for Data Science"
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600">
                <strong>Add details:</strong> Mention your experience level and what you hope to achieve
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600">
                <strong>Be realistic:</strong> Make sure both skills are of similar complexity and time commitment
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 