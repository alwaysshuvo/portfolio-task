# Daryl Smith - Portfolio Website

A modern, responsive portfolio website built with **Next.js 16** and **Tailwind CSS**, showcasing frontend development and UI/UX design expertise. This project demonstrates professional web design practices including performance optimization, accessibility compliance, and mobile responsiveness.

##  Project Overview

This is a personal portfolio website for **Daryl Smith**, a Creative Developer and UI/UX Design Expert. The website showcases:

- **Hero Section**: Eye-catching introduction with social media links
- **Resume Section**: Education and work history timeline
- **Skills Section**: Professional skills with progress bars
- **Portfolio Section**: Masonry grid layout of featured projects
- **Blog Section**: Latest articles and insights
- **Pricing Section**: Service packages and pricing tiers
- **Contact Section**: Contact form for inquiries
- **Responsive Navigation**: Sidebar and navbar for easy navigation

##  Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework | 16.1.5 |
| **React** | UI library | 19.2.3 |
| **Tailwind CSS** | Utility-first CSS framework | 4.x |
| **JavaScript** | Programming language | ES6+ |

### Development Tools
- **Node.js** - Runtime environment
- **npm** - Package manager
- **ESLint** - Code quality & linting
- **PostCSS** - CSS processing

##  Features

### Core Features
 **Fully Responsive Design**
- Optimized for mobile (640px)
- Tablet layouts (641px - 1024px)
- Desktop layouts (1025px)
- No horizontal scrolling or overflow issues

 **Performance Optimized**
- Next.js Image optimization
- Optimized font loading (DM Sans from Google Fonts)
- Minimal CSS with Tailwind
- Lazy loading for images below the fold
- Static generation where possible

 **SEO & Meta Tags**
- Comprehensive metadata setup
- Open Graph tags for social sharing
- Semantic HTML5 structure
- Proper heading hierarchy
- Descriptive alt text for all images

 **Accessibility (WCAG 2.1)**
- All images have descriptive alt text
- Form labels properly associated with inputs
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA labels for icon buttons and navigation
- Color contrast meets WCAG AA standards
- Semantic HTML elements (<section>, <main>, <nav>, etc.)

 **Modern UI/UX**
- Dark theme with accent colors
- Smooth transitions and hover effects
- Professional typography
- Consistent spacing and layout
- Glassmorphism effects where appropriate

 **Component-Based Architecture**
- Modular React components
- Reusable UI elements
- Easy to maintain and update
- Clear separation of concerns

##  Responsive Behavior

### Mobile (640px)
- Sidebar: Hidden, content accessible via menu
- Navigation: Compact navbar with adjusted spacing
- Hero Section: Stacked layout, responsive image sizing
- Grid Layouts: Single column layouts that stack properly
- Typography: Reduced font sizes for better readability on small screens
- Spacing: Adjusted padding and margins for mobile

### Tablet (641px - 1024px)
- Sidebar: Visible with optimized width
- Navigation: Standard navbar layout
- Hero Section: Partial layout optimization
- Grid Layouts: 2-column grids where appropriate
- Typography: Medium font sizes
- Spacing: Balanced padding and margins

### Desktop (1025px)
- Full Layout: All features visible and optimized
- Sidebar: Full-width navigation
- Hero Section: Side-by-side layout with full imagery
- Grid Layouts: 3-4 column layouts
- Typography: Full-size fonts
- Spacing: Optimal padding and margins
- Advanced Effects: Vertical lines, language switchers, full-width sections

##  Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git (for version control)

### Step 1: Clone the Repository
\\\ash
git clone https://github.com/yourusername/portfolio-task.git
cd portfolio-task
\\\

### Step 2: Install Dependencies
\\\ash
npm install
\\\

### Step 3: Set Up Environment Variables
Create a \.env.local\ file in the root directory:
\\\env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\\\

### Step 4: Run Development Server
\\\ash
npm run dev
\\\

The website will be available at http://localhost:3000

##  Build & Production

### Build for Production
\\\ash
npm run build
\\\

### Start Production Server
\\\ash
npm start
\\\

### Run Linting
\\\ash
npm run lint
\\\

##  Project Structure

`
portfolio-task/
 src/
    app/
       layout.jsx          # Root layout with metadata
       page.jsx            # Home page
       globals.css         # Global styles
    components/
        Navbar.jsx          # Navigation bar
        Sidebar.jsx         # Side navigation
        Hero.jsx            # Hero section
        Resume.jsx          # Resume/Timeline section
        Skills.jsx          # Skills section
        Portfolio.jsx       # Portfolio projects
        Blog.jsx            # Blog posts
        Pricing.jsx         # Pricing plans
        Contact.jsx         # Contact form
        Footer.jsx          # Footer
 public/
    icons/                  # Icon assets
    images/                 # Image assets
 package.json                # Dependencies
 tailwind.config.js          # Tailwind CSS config
 postcss.config.js           # PostCSS config
`

##  Design System

### Color Palette
- **Primary**: #f59e0b (Amber)
- **Secondary**: #F5BD4D (Light Amber)
- **Background**: #171B1A (Dark)
- **Card Background**: #1a1e1d (Slightly lighter dark)
- **Border**: #2a2f2e (Dark gray)
- **Text**: #ffffff (White)

### Typography
- Font Family: DM Sans (Google Fonts)
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)

##  Performance Optimization
- Next.js Image component for auto-optimization
- Google Fonts with font-display: swap
- Code splitting and lazy loading
- Automatic WebP format conversion

##  SEO Optimization
- Comprehensive metadata in layout.jsx
- Semantic HTML5 structure
- Descriptive image alt text
- Open Graph tags for social sharing
- Mobile-responsive design

##  Accessibility (WCAG 2.1 Level AA)
- All images with descriptive alt text
- Proper form labels and ARIA attributes
- Keyboard navigation support
- Focus indicators on interactive elements
- Semantic HTML elements
- Color contrast compliance

##  Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

##  Getting Help

### Common Issues

**Port 3000 already in use:**
\\\ash
npm run dev -- -p 3001
\\\

**Dependencies not installing:**
\\\ash
rm -rf node_modules package-lock.json
npm install
\\\

##  License

MIT License - see LICENSE file for details

##  Author

**Daryl Smith** - Creative Developer & UI/UX Design Expert

---

**Version**: 1.0.0  
**Status**: Production Ready 
