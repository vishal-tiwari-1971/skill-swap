# Neon PostgreSQL Setup Guide

## Step 1: Create Neon Account
1. Go to [neon.tech](https://neon.tech)
2. Sign up for a free account
3. Create a new project

## Step 2: Get Database URL
1. In your Neon dashboard, go to your project
2. Click on "Connection Details"
3. Copy the connection string that looks like:
   ```
   postgresql://username:password@ep-something.region.aws.neon.tech/database?sslmode=require
   ```

## Step 3: Update Environment Variables
1. Open `.env` file in your project
2. Replace the DATABASE_URL with your Neon connection string:
   ```
   DATABASE_URL="postgresql://username:password@ep-something.region.aws.neon.tech/database?sslmode=require"
   ```

## Step 4: Run Database Migration
```bash
npx prisma db push
```

## Step 5: Verify Connection
1. Start your development server: `npm run dev`
2. Test the signup/login functionality
3. Check the terminal logs for successful database connections

## Database Schema
- **Users**: id, email, password, name, role, createdAt, updatedAt
- **Swaps**: id, title, description, skill1, skill2, status, user1Id, user2Id, createdAt, updatedAt

## API Endpoints
- `POST /api/users` - Create new user
- `GET /api/users` - Get all users
- `POST /api/auth/login` - User login
- `POST /api/swaps` - Create new swap
- `GET /api/swaps` - Get all swaps

## Benefits of Neon PostgreSQL
- ✅ Serverless PostgreSQL
- ✅ Automatic scaling
- ✅ Built-in connection pooling
- ✅ Branching for development
- ✅ Free tier with generous limits
- ✅ Better performance than MongoDB for relational data 