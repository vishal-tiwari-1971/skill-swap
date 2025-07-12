import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { title, description, skill1, skill2, user1Id } = await request.json()

    console.log('Creating swap:', { title, user1Id })

    const swap = await prisma.swap.create({
      data: {
        title,
        description,
        skill1,
        skill2,
        user1Id
      },
      include: {
        user1: {
          select: {
            id: true,
            email: true,
            name: true
          }
        }
      }
    })

    console.log('Swap created successfully:', swap.id)
    return NextResponse.json(swap, { status: 201 })

  } catch (error) {
    console.error('Swap creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create swap' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const userId = searchParams.get('userId')

    let where: any = {}

    if (status && status !== 'all') {
      where.status = status
    }

    if (userId) {
      where.OR = [
        { user1Id: userId },
        { user2Id: userId }
      ]
    }

    const swaps = await prisma.swap.findMany({
      where,
      include: {
        user1: {
          select: {
            id: true,
            email: true,
            name: true
          }
        },
        user2: {
          select: {
            id: true,
            email: true,
            name: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(swaps)
  } catch (error) {
    console.error('Error fetching swaps:', error)
    return NextResponse.json(
      { error: 'Failed to fetch swaps' },
      { status: 500 }
    )
  }
} 