# JKKN Dental College & Hospital Website

A modern, responsive website for JKKN Dental College & Hospital built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional design with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal speed and SEO
- **Type-Safe**: Written in TypeScript for better code quality
- **Easy to Customize**: All content is centralized in data files

## Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Dental_College
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
Dental_College/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   └── ...
├── data/               # Content data
│   └── content.ts      # All website content
├── public/             # Static assets
│   └── images/         # Images
└── ...
```

## Customization

### Updating Content

All website content is stored in `data/content.ts`. You can easily update:
- Navigation menu items
- Hero section content
- About section text
- News items
- Footer information
- And more...

### Adding Images

1. Place your images in the `public/images/` directory
2. Reference them in your components using `/images/your-image.jpg`

### Changing Colors

Color scheme is defined in `tailwind.config.ts`:
- Primary (Dark Green): `#1B5E20`
- Secondary (Yellow/Gold): `#FFC107`
- Cream Background: `#FBF8F3`
- Accent (Light Green): `#8BC34A`

## Deployment

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Visit [vercel.com](https://vercel.com) and sign up/login

3. Click "New Project" and import your repository

4. Vercel will automatically detect Next.js and configure the build settings

5. Click "Deploy" and your site will be live in minutes!

### Manual Deployment

You can also deploy using Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Build for Production

To create a production build:

```bash
npm run build
npm start
```

## License

All rights reserved © 2026 JKKN Dental College & Hospital

## Support

For any issues or questions, please contact: dental@jkkn.ac.in
