# ureminders Website

A modern, black and white React website for ureminders - an AI-powered location-aware task reminder app on Snapchat.

## Features

- **Location-Aware Reminders**: Get relevant tasks based on your current location
- **AI-Powered Suggestions**: Smart task recommendations from conversation analysis
- **Snapchat Integration**: Seamlessly integrated into your Snapchat experience
- **Real-Time Updates**: Dynamic task prioritization based on location and context

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section with app preview
│   ├── Features.js        # Features showcase
│   ├── HowItWorks.js      # Step-by-step guide
│   └── Footer.js          # Footer with links and download CTA
├── App.js                 # Main app component
├── App.css               # Global app styles
├── index.js              # React entry point
└── index.css             # Global styles and utilities
```

## Design Features

- **Black and White Theme**: Clean, minimalist design
- **Responsive Layout**: Works on all device sizes
- **Modern Typography**: Inter font family for readability
- **Smooth Animations**: Hover effects and transitions
- **Mobile-First**: Optimized for mobile devices

## Technologies Used

- React 18
- CSS3 with modern features
- Responsive design principles
- Semantic HTML5

## Customization

The website is built with modular components that can be easily customized:

- Update colors in CSS files
- Modify content in component files
- Add new sections by creating new components
- Update styling in individual component CSS files

## Deployment

The website can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Simply run `npm run build` and upload the contents of the `build` folder.


