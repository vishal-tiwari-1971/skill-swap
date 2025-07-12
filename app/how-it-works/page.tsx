"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  Search, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  MessageSquare, 
  Calendar,
  MapPin,
  Clock,
  Shield,
  Heart,
  Zap,
  BookOpen,
  Globe,
  Award
} from "lucide-react"

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Create Your Profile",
      description: "Set up your account and showcase your skills",
      icon: Users,
      details: [
        "Sign up with your email or social media account",
        "Add your profile picture and personal information",
        "List the skills you can teach or share with others",
        "Specify the skills you want to learn",
        "Set your availability and location preferences",
        "Write a compelling bio to attract potential partners"
      ],
      tips: [
        "Be specific about your skill levels (beginner, intermediate, advanced)",
        "Include relevant certifications or experience",
        "Add your preferred communication methods",
        "Set realistic availability expectations"
      ],
      estimatedTime: "5-10 minutes"
    },
    {
      id: 2,
      title: "Find Your Perfect Match",
      description: "Discover people with complementary skills",
      icon: Search,
      details: [
        "Browse through our extensive user database",
        "Use advanced filters to find specific skills",
        "Read user profiles and reviews",
        "Check compatibility based on availability and location",
        "View skill ratings and completed exchanges",
        "Send connection requests to potential partners"
      ],
      tips: [
        "Use specific keywords when searching for skills",
        "Read reviews to understand teaching styles",
        "Consider timezone compatibility for virtual exchanges",
        "Look for users with good ratings and completed swaps"
      ],
      estimatedTime: "10-15 minutes"
    },
    {
      id: 3,
      title: "Start Your Skill Exchange",
      description: "Begin your learning journey together",
      icon: ArrowRight,
      details: [
        "Send a personalized swap request",
        "Propose a structured learning plan",
        "Agree on meeting schedule and format",
        "Set clear goals and expectations",
        "Choose your preferred communication platform",
        "Begin your first skill exchange session"
      ],
      tips: [
        "Be clear about what you want to learn and teach",
        "Propose a realistic timeline for your exchange",
        "Use video calls for better interaction",
        "Keep track of your progress and milestones"
      ],
      estimatedTime: "15-20 minutes"
    },
    {
      id: 4,
      title: "Track Progress & Get Feedback",
      description: "Monitor your learning journey and improve",
      icon: CheckCircle,
      details: [
        "Log your learning sessions and progress",
        "Share resources and materials with your partner",
        "Provide and receive constructive feedback",
        "Rate your exchange experience",
        "Update your skill levels as you improve",
        "Celebrate milestones and achievements"
      ],
      tips: [
        "Keep a learning journal to track your progress",
        "Share helpful resources and learning materials",
        "Be honest in your feedback to help others improve",
        "Celebrate small wins to stay motivated"
      ],
      estimatedTime: "Ongoing"
    }
  ]

  const features = [
    {
      title: "Smart Matching",
      description: "Our AI-powered algorithm finds the perfect skill exchange partners based on your preferences, availability, and skill compatibility.",
      icon: Zap,
      color: "text-blue-600"
    },
    {
      title: "Secure Communication",
      description: "Built-in messaging system with video call integration, file sharing, and progress tracking to keep your exchanges organized.",
      icon: Shield,
      color: "text-green-600"
    },
    {
      title: "Verified Profiles",
      description: "All users are verified through multiple methods to ensure a safe and trustworthy learning environment.",
      icon: CheckCircle,
      color: "text-purple-600"
    },
    {
      title: "Progress Tracking",
      description: "Track your learning journey with detailed progress reports, skill assessments, and achievement badges.",
      icon: Award,
      color: "text-orange-600"
    },
    {
      title: "Global Community",
      description: "Connect with learners from around the world, expanding your cultural knowledge while learning new skills.",
      icon: Globe,
      color: "text-indigo-600"
    },
    {
      title: "Flexible Learning",
      description: "Choose from various learning formats - one-on-one sessions, group workshops, or self-paced courses.",
      icon: BookOpen,
      color: "text-red-600"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "UI/UX Designer → Full-Stack Developer",
      avatar: "/placeholder.svg?height=60&width=60",
      quote: "SkillSwap helped me transition from design to development. I found an amazing mentor who taught me React while I helped them with design principles.",
      rating: 5
    },
    {
      name: "Mike Johnson",
      role: "Data Scientist → Frontend Developer",
      avatar: "/placeholder.svg?height=60&width=60",
      quote: "The platform made it so easy to find someone who could teach me frontend development. The structured approach really helped me stay focused.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Graphic Designer → Web Developer",
      avatar: "/placeholder.svg?height=60&width=60",
      quote: "I learned web development through SkillSwap and now I can offer both design and development services. It's been life-changing!",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "How much does SkillSwap cost?",
      answer: "SkillSwap is completely free to use! We believe in making skill exchange accessible to everyone. Premium features are available for advanced users."
    },
    {
      question: "How do I know if someone is trustworthy?",
      answer: "All users are verified through multiple methods. You can check their ratings, reviews, and completed exchanges before starting a skill swap."
    },
    {
      question: "What if my skill exchange partner doesn't show up?",
      answer: "We have a robust rating and review system. If someone doesn't follow through, you can report them and find a new partner. We also offer mediation services."
    },
    {
      question: "Can I exchange multiple skills at once?",
      answer: "Absolutely! You can have multiple skill exchanges running simultaneously. Many users exchange 2-3 different skills with different partners."
    },
    {
      question: "What if I'm not satisfied with my learning experience?",
      answer: "We encourage open communication between partners. If issues arise, our support team is here to help mediate and find solutions."
    },
    {
      question: "How long does a typical skill exchange last?",
      answer: "Skill exchanges typically last 1-3 months, depending on the complexity of the skills and your learning goals. Some partnerships continue for years!"
    }
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
              <Link href="/how-it-works" className="text-indigo-600 font-medium">
                How it Works
              </Link>
              <Link href="/success-stories" className="text-gray-700 hover:text-indigo-600">
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
            How SkillSwap Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your skills and knowledge through meaningful exchanges. 
            Our simple 4-step process makes learning and teaching effortless.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Simple Steps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">5-10</div>
              <div className="text-sm text-gray-600">Minutes Setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Free to Use</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey to Skill Mastery</h2>
            <p className="text-gray-600">Follow these simple steps to start your skill exchange adventure</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {steps.map((step) => (
                <Card 
                  key={step.id} 
                  className={`cursor-pointer transition-all duration-200 ${
                    activeStep === step.id 
                      ? 'ring-2 ring-indigo-500 shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${
                        activeStep === step.id ? 'bg-indigo-100' : 'bg-gray-100'
                      }`}>
                        <step.icon className={`h-6 w-6 ${
                          activeStep === step.id ? 'text-indigo-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`text-lg ${
                          activeStep === step.id ? 'text-indigo-600' : 'text-gray-900'
                        }`}>
                          Step {step.id}: {step.title}
                        </CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {step.estimatedTime}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Step Details */}
            <div className="lg:col-span-1">
              {steps.map((step) => (
                <div key={step.id} className={activeStep === step.id ? 'block' : 'hidden'}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-4 bg-indigo-100 rounded-full">
                          <step.icon className="h-8 w-8 text-indigo-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Step {step.id}: {step.title}</CardTitle>
                          <CardDescription className="text-lg">{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* What you'll do */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          What you'll do:
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pro Tips */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Star className="h-5 w-5 text-yellow-600 mr-2" />
                          Pro Tips:
                        </h4>
                        <ul className="space-y-2">
                          {step.tips.map((tip, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Estimated Time */}
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Estimated time: {step.estimatedTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SkillSwap?</h2>
            <p className="text-gray-600">Discover the features that make us the leading skill exchange platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <feature.icon className={`h-12 w-12 mx-auto ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-gray-600">Real stories from people who transformed their skills through SkillSwap</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-indigo-600">
                    {testimonial.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about SkillSwap</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Skill Journey?</h3>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of learners who have transformed their lives through skill exchange.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Create Your Profile
              </Button>
            </Link>
            <Link href="/browse">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">
                Browse Skills
              </Button>
            </Link>
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
                  <Link href="/how-it-works" className="hover:text-white">
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