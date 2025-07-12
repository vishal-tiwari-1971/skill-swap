import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Testing MongoDB connection...')
    
    // Test 1: Check if environment variable exists
    const mongoUri = process.env.MONGODB_URI
    console.log('📋 MONGODB_URI exists:', !!mongoUri)
    console.log('📋 MONGODB_URI starts with:', mongoUri?.substring(0, 20))
    
    if (!mongoUri) {
      return NextResponse.json({
        error: 'MONGODB_URI environment variable not found',
        status: 'error'
      }, { status: 500 })
    }

    // Test 2: Try to import mongoose
    let mongoose
    try {
      mongoose = require('mongoose')
      console.log('✅ Mongoose imported successfully')
    } catch (error) {
      console.log('❌ Mongoose import failed:', error)
      return NextResponse.json({
        error: 'Mongoose not installed',
        status: 'error'
      }, { status: 500 })
    }

    // Test 3: Try to connect with timeout
    console.log('🔌 Attempting connection...')
    const connection = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000, // 5 seconds
      socketTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    })
    
    console.log('✅ Connection successful!')
    return NextResponse.json({
      status: 'success',
      message: 'MongoDB connection test passed',
      connection: {
        readyState: connection.connection.readyState,
        host: connection.connection.host,
        port: connection.connection.port,
        name: connection.connection.name,
      }
    })

  } catch (error) {
    console.error('❌ Connection test failed:', error)
    return NextResponse.json({
      status: 'error',
      message: 'MongoDB connection test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      details: {
        name: error instanceof Error ? error.name : 'Unknown',
        stack: error instanceof Error ? error.stack : 'No stack trace'
      }
    }, { status: 500 })
  }
} 