# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture Overview

This is a modern React application built with TypeScript and Vite, featuring:

**Core Stack:**
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons

**Project Structure:**
- `/src/App.tsx` - Main app component with routing configuration
- `/src/contexts/LanguageContext.tsx` - Internationalization context supporting English and French
- `/src/layouts/Layout.tsx` - Main layout wrapper with header/footer
- `/src/pages/` - All page components including services pages
- `/src/components/` - Reusable UI components

**Key Features:**
- Bilingual support (English/French) with comprehensive translations
- Service-focused architecture with dedicated pages for AI Advisory, ERP Implementation, and Business Intelligence
- Custom Tailwind theme with navy blue color scheme and neon accents
- Responsive design with custom animations

**Routing:**
The app uses React Router with these main routes:
- `/` - Home page
- `/services/ai-advisory` - AI Advisory service page
- `/services/erp-implementation` - ERP Implementation service page  
- `/services/business-intelligence` - Business Intelligence service page
- `/about` - About page
- `/contact` - Contact page

**Styling:**
- Tailwind CSS with custom theme extensions
- Custom color palette: navy blues, neon blue, and gradient lime
- Custom fonts: Space Grotesk and Inter
- Custom animations for slide-in and fade effects

**Internationalization:**
All user-facing text is managed through the LanguageContext with extensive translation keys. The translation system supports switching between English (`en`) and French (`fr`) with full page content coverage.