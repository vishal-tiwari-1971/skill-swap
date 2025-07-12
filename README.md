# Skill Swap Platform

A peer-to-peer skill exchange platform where users can list their skills, request skills from others, and exchange skills through a credit system.

## 🏆 Odoo Hackathon 2025 – Round 1 (Virtual)

### 🎯 Problem Statement
**Skill Swap Platform:**
A peer-to-peer application where users can:
- List their skills
- Request skills from others
- Exchange skills through a credit system

### 👥 Team
**Team Ktiwari7665**

### 🚀 Event Details
- **Date:** 12th July 2025
- **Organizer:** Odoo
- **Format:** Virtual Hackathon

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, TypeScript
- **UI Components:** Radix UI, Tailwind CSS, Shadcn/ui
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Authentication:** bcryptjs for password hashing
- **Form Handling:** React Hook Form, Zod validation
- **State Management:** React useState/useEffect

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm
- PostgreSQL database (Neon recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishal-tiwari-1971/skill-swap.git
   cd skill-swap
   ```

2. **Install dependencies**
   ```bash
   npm install
  
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@ep-something.region.aws.neon.tech/database?sslmode=require"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push schema to database
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
  
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
skill-swap/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── swaps/        # Skill swap endpoints
│   │   └── users/        # User management endpoints
│   ├── auth/             # Authentication pages
│   ├── dashboard/        # User dashboard
│   ├── browse/           # Browse skills page
│   ├── create-swap/      # Create swap page
│   ├── profile/          # User profile page
│   └── globals.css       # Global styles
├── components/            # Reusable UI components
│   └── ui/               # Shadcn/ui components
├── lib/                   # Utility functions
├── prisma/               # Database schema and migrations
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🗄️ Database Schema

### Users
- `id`: Unique identifier
- `email`: User email (unique)
- `password`: Hashed password
- `name`: User's full name
- `location`: User's location
- `availability`: User's availability
- `bio`: User's bio
- `avatar`: Profile picture URL
- `role`: User role (user/admin)
- `createdAt`: Account creation date
- `updatedAt`: Last update date

### Swaps
- `id`: Unique identifier
- `title`: Swap title
- `description`: Swap description
- `skill1`: First skill being offered
- `skill2`: Second skill being requested
- `status`: Swap status (pending/accepted/completed/cancelled)
- `user1Id`: User offering the swap
- `user2Id`: User accepting the swap
- `createdAt`: Swap creation date
- `updatedAt`: Last update date

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma db push` - Push schema changes to database
- `npx prisma studio` - Open Prisma Studio (database GUI)

## 🌟 Features

### Core Features
- **User Authentication:** Secure login/signup with bcrypt
- **User Profiles:** Complete user profiles with personal information
- **Dashboard:** User dashboard with activity overview
- **Browse Users:** Search and filter users by skills
- **Profile Management:** Edit and update user profiles
- **Admin Panel:** Admin dashboard for user management
- **Responsive Design:** Mobile-first approach with Tailwind CSS

### Authentication System
- **Secure Login:** Email/password authentication
- **User Registration:** Sign up with personal details
- **Role-based Access:** User and admin roles
- **Session Management:** Local storage-based sessions
- **Password Security:** bcrypt hashing

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify:** Compatible with Next.js
- **Railway:** Easy PostgreSQL integration
- **Render:** Free tier available

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Odoo** for organizing the hackathon
- **Next.js** team for the amazing framework
- **Prisma** team for the excellent ORM
- **Shadcn/ui** for the beautiful components
- **Tailwind CSS** for the utility-first CSS framework

---

**Built with ❤️ by Team Ktiwari7665 for Odoo Hackathon 2025** 
