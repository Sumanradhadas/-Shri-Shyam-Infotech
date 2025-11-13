# Shri Shyam Infotech - Replit Agent Guide

## Overview

Shri Shyam Infotech is a premier computer training institute website in Patna City, Bihar, India. With 17+ years of excellence and 5,000+ students' lives transformed, we maintain a remarkable 98% placement record. The platform showcases our professional certification programs (ADCA, DCA, Tally Prime with GST, Kushal Yuva Program) with state-of-the-art facilities and an AI-powered course recommendation system using Google's Gemini API.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (not React Router)
- TanStack Query (React Query) for server state management
- Framer Motion for sophisticated animations and transitions

**UI Component System:**
- Shadcn/ui component library (New York style variant) for consistent, accessible UI primitives
- Radix UI primitives as the foundation for all interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom color palette system featuring multi-color gradients (red → orange → yellow → green → teal → blue → indigo → purple → magenta)

**Design Philosophy:**
- "Colorful Light Flow" - light backgrounds with animated gradient overlays
- AI-first experience with Gemini-powered course selector as centerpiece
- Vibrant, professional design with purposeful animations
- Mobile-responsive grid layouts (4 columns desktop → 2 tablet → 1 mobile)

**Page Structure:**
1. Home - Hero slider, program overview cards, "Why Choose Us" section
2. Courses - Program catalog with ADCA, DCA, Tally Prime, KYP details
3. About - Institution story, mission/vision, milestone timeline (2007-2024)
4. Contact - Contact form, location details (Patna City), campus visit info
5. Global AI Assistant - Floating popup accessible from all pages

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- TypeScript for type-safe server code
- Session-based architecture with in-memory storage

**API Design:**
- RESTful endpoint pattern
- Single AI chat endpoint: `POST /api/ai/chat`
- Request/response logging middleware for debugging
- Error handling with structured JSON responses

**AI Integration:**
- Google Gemini API (@google/genai package) for course recommendations
- Conversational AI with maintained conversation history
- System prompt engineered for career advisor persona with knowledge of all 4 programs
- Context-aware responses based on student background (education level, interests)

### Data Storage Solutions

**Database Schema:**
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- Schema location: `shared/schema.ts` for type sharing between client/server
- Current schema: Basic user table with username/password (authentication foundation)
- Connection pooling via @neondatabase/serverless

**Data Models:**
- User model: id (UUID), username (unique), password
- Program data in `shared/courses.ts` (4 program objects with detailed modules)
- Program structure: id, name, shortName, duration, moduleCount, description, modules[], icon, color, popular flag, benefits[]

### Authentication and Authorization

**Current Implementation:**
- Basic user schema defined but authentication not fully implemented
- Session framework in place (express-session compatible)
- User creation and lookup methods available
- Password stored as plaintext (needs hashing implementation before production)

### External Dependencies

**AI/ML Services:**
- **Google Gemini API** - Primary AI service for course recommendations
  - API key required via GEMINI_API_KEY environment variable
  - Model: Gemini 2.0 Flash Exp (text generation)
  - Use case: Conversational career advisor, personalized program matching
  - System prompt includes full program catalog and institute details

**Database & Infrastructure:**
- **Neon PostgreSQL** - Serverless PostgreSQL hosting
  - Connection via DATABASE_URL environment variable
  - Serverless driver: @neondatabase/serverless (supports connection pooling)
  - Used with Drizzle ORM for type-safe queries

**Environment Variables Required:**
```
DATABASE_URL=<neon-postgres-connection-string>
GEMINI_API_KEY=<google-ai-api-key>
NODE_ENV=development|production
```

## Institute Information

**Name:** Shri Shyam Infotech
**Established:** 2007 (17+ years of experience)
**Location:** Kachauri Gali, Near Narayani Kanya School, Patna City - 8, Bihar, India
**Contact:**
- Phone: 6287875040 / 0612-2642244
- WhatsApp: 6287875040
- Email: shrishyaminfotech@gmail.com
**Hours:** Monday-Saturday, 7AM-7PM
**Services:** Free demo class and guided campus tour available

## Programs Offered

### 1. ADCA (Advanced Diploma in Computer Applications)
- **Duration:** 8 months
- **Modules:** 8
1. Computer Fundamentals & Windows
2. MS Office Suite (Word, Excel, PowerPoint)
3. Internet & Email Applications
4. Database Management with MS Access
5. C Programming Language
6. Operating Systems (Windows & Linux)
7. Computer Networks & Web Technologies
8. Digital Graphics & Multimedia

### 2. DCA (Diploma in Computer Applications)
- **Duration:** 5 months
- **Modules:** 5
1. Computer Basics & Windows Operating System
2. MS Word - Document Processing
3. MS Excel - Spreadsheet & Data Management
4. MS PowerPoint - Professional Presentations
5. Internet, Email & Digital Literacy

### 3. Tally Prime with GST
- **Duration:** 5 months
- **Modules:** 6
1. Accounting Fundamentals & Bookkeeping
2. Tally Prime Complete Interface
3. Inventory Management in Tally
4. GST Implementation & Filing
5. TDS, Payroll & Statutory Compliance
6. Financial Reports & Business Analysis

### 4. Kushal Yuva Program (KYP)
- **Duration:** 6 months
- **Modules:** 8
- Government-recognized youth skill development
1. Basic Computer Skills & Typing
2. Digital Literacy Foundations
3. MS Office for Beginners
4. Internet & Email Basics
5. Communication & Soft Skills
6. Job Readiness & Interview Preparation
7. Financial Awareness & Digital Payments
8. Government Schemes & Digital Services

## Key Features & Benefits

**Training Excellence:**
- 17+ years of training experience
- 5,000+ students' lives transformed
- 98% placement record
- State-of-the-art facilities

**Teaching Approach:**
- Expert faculty with 5+ years industry experience
- Personalized attention: 30 students per batch
- 70% practical, 30% theory approach for real skills
- Flexible morning & evening batches
- Microsoft Office included in all courses

**Support:**
- Industry-relevant skills: Accounting, GST, Excel
- Placement assistance & interview training
- Curriculum regularly updated as per industry needs
- Both one-time and monthly installment payment options

## Career Opportunities

- **IT Support:** Technical assistance roles
- **Data Entry & Management:** Starting from ₹8,000/month
- **Accounting Assistant:** Tally & GST roles
- **Freelance:** Work from home using your skills

## Recent Changes

**November 13, 2025 - Replit Environment Setup:**
- Successfully imported GitHub repository to Replit
- Installed all npm dependencies (502 packages)
- Configured workflow for development server on port 5000
- Added GEMINI_API_KEY secret for AI assistant functionality
- Created .gitignore file for Node.js project
- Configured deployment settings (autoscale deployment target)
- Fixed header layout to prevent hero section cropping on all pages:
  - Made WebGlow credit more compact (10px text, py-1 padding, subtle border)
  - Reduced header padding (py-3 default, py-2 when scrolled)
  - Adjusted all pages to use pt-[88px] md:pt-[92px] for proper spacing
  - Applied fix consistently across Home, About, Courses, and Contact pages
- Verified website is running correctly with all features functional
- Server properly configured to bind to 0.0.0.0:5000 for Replit proxy compatibility
- Vite configured with allowedHosts: true for iframe preview

**November 13, 2024:**
- Transformed website from Digital Tech Drive to Shri Shyam Infotech
- Updated all branding, contact information, and location details
- Restructured programs from 90+ DEEP courses to 4 focused professional programs
- Updated AI assistant system prompt with new institution details
- Updated all frontend pages (Home, About, Contact, Courses) with new content
- Modified WhyChooseUs component to reflect new key features

## Development Information

**Running the Application:**
- Development: `npm run dev` (starts Express server with Vite middleware on port 5000)
- Production Build: `npm run build` (builds frontend and backend)
- Production Start: `npm start` (runs production server from dist folder)
- Type Check: `npm run check`
- Database Push: `npm run db:push`

**Environment Setup:**
- All dependencies installed via npm
- Required secrets: GEMINI_API_KEY (configured), DATABASE_URL (configured)
- Development server runs on port 5000 with 0.0.0.0 binding
- Vite configured for Replit proxy environment (allowedHosts: true)
