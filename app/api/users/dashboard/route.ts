import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Get user with their swaps
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        swapsAsUser1: {
          include: {
            user2: {
              select: {
                id: true,
                name: true,
                email: true
              }
            }
          }
        },
        swapsAsUser2: {
          include: {
            user1: {
              select: {
                id: true,
                name: true,
                email: true
              }
            }
          }
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const allSwaps = [...user.swapsAsUser1, ...user.swapsAsUser2]
    const completedSwaps = allSwaps.filter((swap: any) => swap.status === 'completed')
    const pendingSwaps = allSwaps.filter((swap: any) => swap.status === 'pending')
    const activeSwaps = allSwaps.filter((swap: any) => swap.status === 'accepted')

    // Extract skills from swaps
    const skillsOffered = [...new Set(allSwaps.map((swap: any) => swap.skill1))]
    const skillsWanted = [...new Set(allSwaps.map((swap: any) => swap.skill2))]

    // Transform swap requests for dashboard
    const swapRequests = allSwaps.map((swap: any) => ({
      id: swap.id,
      type: swap.user1Id === userId ? 'outgoing' : 'incoming',
      user: swap.user1Id === userId ? swap.user2?.name || 'Unknown' : swap.user1?.name || 'Unknown',
      userAvatar: '/placeholder.svg',
      skillOffered: swap.skill1,
      skillWanted: swap.skill2,
      status: swap.status,
      date: new Date(swap.createdAt).toLocaleDateString()
    }))

    // Create recent activity
    const recentActivity = allSwaps.slice(0, 5).map((swap: any) => ({
      id: swap.id,
      type: swap.status === 'completed' ? 'swap_completed' : 'new_request',
      message: `Swap ${swap.status}: ${swap.skill1} for ${swap.skill2}`,
      date: new Date(swap.createdAt).toLocaleDateString()
    }))

    const dashboardData = {
      userProfile: {
        name: user.name || 'Anonymous User',
        location: 'Unknown',
        avatar: '/placeholder.svg',
        skillsOffered: skillsOffered.slice(0, 4),
        skillsWanted: skillsWanted.slice(0, 4),
        rating: 4.5,
        completedSwaps: completedSwaps.length,
        availability: 'Flexible'
      },
      swapRequests,
      recentActivity,
      stats: {
        activeRequests: pendingSwaps.length,
        completedSwaps: completedSwaps.length,
        averageRating: 4.5
      }
    }

    return NextResponse.json(dashboardData)

  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
} 