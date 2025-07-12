import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || 'all'
    const limit = parseInt(searchParams.get('limit') || '50')
    const page = parseInt(searchParams.get('page') || '1')

    const skip = (page - 1) * limit

    // Build where clause for search
    let where: any = {}
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Get users with their swaps
    const users = await prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        swapsAsUser1: {
          select: {
            id: true,
            title: true,
            skill1: true,
            skill2: true,
            status: true,
            createdAt: true
          }
        },
        swapsAsUser2: {
          select: {
            id: true,
            title: true,
            skill1: true,
            skill2: true,
            status: true,
            createdAt: true
          }
        }
      },
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform data to match frontend expectations
    const transformedUsers = users.map((user: any) => {
      const allSwaps = [...user.swapsAsUser1, ...user.swapsAsUser2]
      const completedSwaps = allSwaps.filter((swap: any) => swap.status === 'completed').length
      
      // Extract skills from swaps
      const skillsOffered = [...new Set(allSwaps.map((swap: any) => swap.skill1))]
      const skillsWanted = [...new Set(allSwaps.map((swap: any) => swap.skill2))]

      return {
        id: user.id,
        name: user.name || 'Anonymous User',
        email: user.email,
        avatar: '/placeholder.svg',
        skillsOffered: skillsOffered.slice(0, 4), // Limit to 4 skills
        skillsWanted: skillsWanted.slice(0, 4),
        rating: 4.5, // Default rating
        completedSwaps,
        availability: 'Flexible', // Default availability
        isOnline: true, // Default online status
        location: 'Unknown', // Default location
        createdAt: user.createdAt
      }
    })

    const total = await prisma.user.count({ where })

    return NextResponse.json({
      users: transformedUsers,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
} 