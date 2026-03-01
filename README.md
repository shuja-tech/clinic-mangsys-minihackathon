# Clinic Management System - SMIT Mini Hackathon

A modern, cloud-first clinic management system built with React, Vite, and Supabase. This project was developed as part of a mini hackathon to demonstrate a full-stack healthcare application.

![Clinic Management System]![Vite-7.3.1-purple) ![Supabase-2.98-green) ![License-MIT-yellow)

## 🚀 Live Demo

**Production URL:** https://clinic-mangsys-minihackathon.vercel.app

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Supabase Setup](#supabase-setup)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Features
- **User Authentication** - Secure login/signup with Supabase Auth
- **Responsive Design** - Mobile-first design that works on all devices
- **Modern UI/UX** - Clean, professional healthcare interface
- **Cloud-First** - Built for the modern healthcare landscape

### UI Components
- **Navigation** - Responsive header with dropdown menus
- **Hero Section** - Eye-catching landing page with call-to-action
- **Feature Sections** - Notes & EMR, CMS/EMR selector
- **Contact Information** - Multi-region contact details
- **Mobile Menu** - Hamburger menu for mobile devices

### Technical Features
- **SPA Routing** - Single Page Application with hash-based routing
- **Environment Variables** - Secure configuration management
- **Vercel Ready** - Optimized for Vercel deployment with SPA routing

## 🛠 Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| React | 19.2.0 | UI Framework |
| Vite | 7.3.1 | Build Tool |
| Supabase | 2.98.0 | Backend & Auth |
| CSS3 | - | Styling |

### Dependencies

```
json
{
  "@supabase/supabase-js": "^2.98.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

### Dev Dependencies

```
json
{
  "@vitejs/plugin-react": "^5.1.1",
  "vite": "^7.3.1",
  "eslint": "^9.39.1"
}
```

## 📁 Project Structure

```
clinic-mangsys-minihackathon/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── lib/
│   │   └── supabase.js        # Supabase client configuration
│   ├── Home.jsx               # Home/Landing page component
│   ├── Home.css               # Home page styles
│   ├── LoginSignup.jsx        # Authentication component
│   ├── LoginSignup.css        # Auth styles
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── SUPABASE_SCHEMA.sql        # Database schema
├── SETUP_GUIDE.md             # Supabase setup guide
├── vercel.json                # Vercel configuration
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
├── eslint.config.js           # ESLint configuration
└── .gitignore                 # Git ignore rules
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+
- Supabase Account

### Installation

1. **Clone the repository**

```
bash
git clone <repository-url>
cd clinic-mangsys-minihackathon
```

2. **Install dependencies**

```
bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the project root:

```
env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

4. **Start development server**

```
bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```
bash
npm run build
```

Preview the production build:

```
bash
npm run preview
```

## 🗄️ Supabase Setup

### Step 1: Create Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Enter project details:
   - **Name:** clinic-mangsys
   - **Database Password:** Create a strong password
   - **Region:** Choose closest to you
4. Click "Create new project"
5. Wait for the project to be ready (2-3 minutes)

### Step 2: Get Your Credentials

1. In your Supabase dashboard, go to **Settings** (⚙️ icon)
2. Click **API** in the left sidebar
3. Copy the following:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys")

### Step 3: Configure Environment Variables

1. Open the project in your code editor
2. Edit the `.env` file in the project root:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 4: Set Up Database Schema

1. In Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New query**
3. Open the file `SUPABASE_SCHEMA.sql` in your project
4. Copy all the SQL code
5. Paste it into the SQL Editor
6. Click **Run** to execute the SQL

## 📊 Database Schema

The database includes the following tables:

| Table | Description |
|-------|-------------|
| `profiles` | User information (patients, doctors, admins) |
| `doctors` | Doctor details, specialties, availability |
| `appointments` | Appointment scheduling |
| `medical_records` | Patient medical history |

All tables include Row Level Security (RLS) policies for data protection.

## 🚢 Deployment

### Vercel Deployment

This project is pre-configured for Vercel deployment:

1. **Push to GitHub**

```
bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**

- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Click "Add New Project"
- Import your GitHub repository
- Configure settings:
  - Framework Preset: Vite
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Click "Deploy"

3. **Set Environment Variables**

In Vercel project settings, add:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

4. **SPA Routing**

The `vercel.json` file is configured to handle SPA routing:
```
json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Deployment Commands

```
bash
# Deploy to production
npx vercel --prod

# Deploy to preview
npx vercel
```

## 📸 Screenshots

### Home Page
- Professional header with navigation
- Hero section with call-to-action
- Feature highlights (Notes & EMR)
- CMS/EMR selector cards
- Contact information footer

### Login/Signup Page
- Clean authentication form
- Supabase integration
- Error handling

## 🤝 Contributing

This is a mini hackathon project. Feel free to fork and enhance!

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing-feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Supabase](https://supabase.com)

Vercel deployed (live): (https://clinic-mangsys-minihackathon.vercel.app/)

---

**Built with ❤️ for the SMIT Mini Hackathon**
