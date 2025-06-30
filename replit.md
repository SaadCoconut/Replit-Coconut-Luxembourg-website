# Hope Foundation Website

## Overview

This is a full-stack web application for Hope Foundation, a nonprofit organization focused on community development, education, healthcare, and economic empowerment. The application showcases the foundation's work and provides mechanisms for partnership inquiries and visitor engagement through a contact form and interactive chatbot.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact forms and chat functionality
- **Development**: Hot reload with Vite middleware integration
- **Error Handling**: Centralized error middleware with structured responses

### Data Storage Solutions
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL via Neon serverless
- **Connection**: @neondatabase/serverless for optimized serverless connections
- **Development Storage**: In-memory storage implementation for rapid development
- **Migration**: Drizzle Kit for schema management and migrations

## Key Components

### Database Schema
- **Users**: Basic user management structure (id, username, password)
- **Contact Messages**: Partnership inquiry storage (organization details, contact info, interests)
- **Chat Messages**: Conversational data with session tracking and user/bot differentiation

### Frontend Components
- **Landing Page**: Hero section, about, programs, impact metrics, success stories, team profiles
- **Contact Form**: Multi-field form with validation for partnership inquiries
- **Interactive Chatbot**: Session-based chat interface with quick response options
- **UI Components**: Comprehensive shadcn/ui component library (buttons, forms, dialogs, etc.)

### API Endpoints
- `POST /api/contact`: Contact form submission with validation
- `GET /api/chat/:sessionId`: Retrieve chat history for a session
- `POST /api/chat`: Send chat messages and receive bot responses

### Storage Layer
- **Interface**: IStorage for consistent data access patterns
- **Implementation**: MemStorage for development with user, contact, and chat management
- **Future**: Easy transition to database storage via same interface

## Data Flow

1. **Contact Form**: User submits partnership inquiry → Validation → Storage → Confirmation
2. **Chat System**: User sends message → Storage → Bot response generation → Storage → UI update
3. **Content Display**: Static content rendered with dynamic data fetching for interactive elements

## External Dependencies

### Core Framework Dependencies
- React ecosystem: React, React DOM, React Router (wouter)
- TypeScript and build tools: Vite, esbuild, PostCSS
- Styling: Tailwind CSS, class-variance-authority, clsx

### UI and Interaction
- Radix UI primitives for accessible components
- Lucide React for consistent iconography
- React Hook Form with Zod for form validation
- TanStack Query for server state management

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM with PostgreSQL support
- Neon Database for serverless PostgreSQL
- Development utilities: tsx for TypeScript execution

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static assets and client code served from build directory

### Environment Configuration
- **Development**: Hot reload with Vite middleware, in-memory storage
- **Production**: Optimized builds, database connections via environment variables
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Replit Integration
- Custom Vite plugins for Replit development environment
- Runtime error overlay for development debugging
- Cartographer plugin for enhanced development experience

## Changelog
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.