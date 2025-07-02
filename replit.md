# Coconut Luxembourg Website

## Overview

This is a full-stack web application for Coconut Luxembourg, part of the Coconutwork network - a European youth work organization focused on empowering Euro-Mediterranean youth through innovative non-formal education programs. The application showcases the organization's work in entrepreneurship, intercultural learning, digital participation, and environmental sustainability, and provides mechanisms for partnership inquiries and visitor engagement through a contact form and interactive chatbot.

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
- **Contact Messages**: Partnership inquiry storage (organization details, contact info, program interests)
- **Chat Messages**: Conversational data with session tracking and user/bot differentiation

### Frontend Components
- **Landing Page**: Hero section showcasing youth empowerment, programs (entrepreneurship, intercultural learning, digital participation, environmental sustainability), impact metrics, success stories, team profiles
- **Contact Form**: Multi-field form with validation for partnership inquiries focused on youth development programs
- **Interactive Chatbot**: Session-based chat interface with responses tailored to Coconut Luxembourg's youth work and Erasmus+ programs
- **UI Components**: Comprehensive shadcn/ui component library (buttons, forms, dialogs, etc.)

### API Endpoints
- `POST /api/contact`: Contact form submission with validation for youth program partnerships
- `GET /api/chat/:sessionId`: Retrieve chat history for a session
- `POST /api/chat`: Send chat messages and receive bot responses about youth programs and opportunities

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
- June 30, 2025: Initial setup with Hope Foundation template
- June 30, 2025: Transformed to Coconut Luxembourg - updated all content to reflect youth empowerment organization, Coconutwork network membership, European focus, and authentic programs (entrepreneurship, intercultural learning, digital participation, environmental sustainability)
- June 30, 2025: Added comprehensive project portfolio with 16 authentic Coconut Luxembourg projects from Coconutwork database, categorized by priority areas with detailed project pages and navigation
- June 30, 2025: Enhanced project layout with square image frames, complete objectives display, and PDF infopack download buttons
- June 30, 2025: Added Local Initiatives section - dedicated page showcasing local community activities and articles with sample content covering youth leadership, digital skills training, environmental action, and intercultural dialogue events in Luxembourg cities
- June 30, 2025: Added Resources section - comprehensive document library organized by categories (Annual Reports, Guidelines & Procedures, Policies & Standards, Media Kit) with download functionality for organizational transparency and partner collaboration
- June 30, 2025: Added Partnerships section - professional partner showcase organized by categories (Funding Partners, Institutional Partners, Network Partners, Local Partners) with interactive logo grid, external links, and partnership opportunities call-to-action
- June 30, 2025: Redesigned website color scheme based on Coconut Luxembourg logo - updated primary colors to warm brown (HSL 28, 45%, 35%) from coconut shell as main theme, secondary green (HSL 127, 50%, 40%) for accents, plus grey elements for balance; increased header height to h-20 and logo size to 12x12 for better visibility
- July 1, 2025: Moved Header and Footer components to main App component for consistent display across all pages - ensures uniform navigation and branding; removed "Back to Home" buttons from all pages for cleaner navigation; added "ASBL - Association Sans But Lucratif" under organization name in header; increased logo size to h-16 w-16 for better visibility; created dedicated Contact page (/contact) and updated navigation to link to it instead of scrolling to contact section
- July 1, 2025: Added comprehensive social media walls for each project with authentic hashtags - created SocialMediaWall component that displays mock social media posts filtered by platform (Instagram, Twitter, Facebook, LinkedIn) using project-specific hashtags; each of the 16 projects now has custom hashtags reflecting their focus areas (e.g., #DesignYouthFuture, #ErasmusPlus, #DigitalParticipation); users can filter posts by platform and see engagement metrics; integrated automatic scroll restoration for smooth page navigation between all routes
- July 2, 2025: Updated team section with authentic team members - replaced placeholder team with real Coconut Luxembourg staff: Gilles Evrard Essuman (President), Fahd Mohammadi (Coordinator and Project Manager), Derrick S. Vormawor (Project Manager), and Rasa Liepina (Social Media Coordinator); updated layout to 4-column grid with smaller profile images and adjusted text sizes; set Luxembourgish as default language and replaced American flag with UK flag in language selector; removed 'Impact' from navigation menu; fixed header layout issues with proper responsive design
- July 2, 2025: Enhanced Dr. Gilles Evrard Essuman's biography with comprehensive professional details - added full academic credentials (PhD in economic geography), extensive EU project experience (Erasmus+, Horizon Europe), leadership across 20+ countries, and methodology expertise in design thinking and participatory approaches; updated title to include "Dr." prefix and refined leadership description

## User Preferences

Preferred communication style: Simple, everyday language.
Organization: Coconut Luxembourg (part of Coconutwork network)
Focus: Youth empowerment through non-formal education across Europe and Mediterranean region