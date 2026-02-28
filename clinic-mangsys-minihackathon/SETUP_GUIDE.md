# Clinic Management System - Supabase Setup Guide

Follow these steps to set up Supabase for your clinic management system.

## Step 1: Create a Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Enter project details:
   - **Name:** clinic-mangsys
   - **Database Password:** Create a strong password
   - **Region:** Choose closest to you
4. Click "Create new project"
5. Wait for the project to be ready (2-3 minutes)

## Step 2: Get Your Credentials

1. In your Supabase dashboard, go to **Settings** (⚙️ icon)
2. Click **API** in the left sidebar
3. Copy the following:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys")

## Step 3: Configure Environment Variables

1. Open the project in your code editor
2. Edit the `.env` file in the project root:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
Replace the values with your actual Supabase credentials.

## Step 4: Set Up Database Schema

1. In Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New query**
3. Open the file `SUPABASE_SCHEMA.sql` in your project
4. Copy all the SQL code
5. Paste it into the SQL Editor
6. Click **Run** to execute the SQL

This will create:
- Tables: profiles, doctors, appointments, medical_records
- Row Level Security (RLS) policies
- Automatic profile creation on signup

## Step 5: Verify Setup

1. Start your development server:
```
bash
npm run dev
```

2. Open http://localhost:5173 in your browser

## Step 6: Test Authentication

The Login/Signup page should now work with Supabase authentication. Try:
- Signing up a new user
- Logging in with existing credentials

## Database Tables Overview

| Table | Description |
|-------|-------------|
| profiles | User information (patients, doctors, admins) |
| doctors | Doctor details, specialties, availability |
| appointments | Appointment scheduling |
| medical_records | Patient medical history |

## Next Steps

- Implement the login/signup functionality using Supabase auth
- Create the dashboard pages for patients and doctors
- Add appointment booking features
- Implement doctor profiles and availability

## Troubleshooting

**Issue:** "Failed to fetch" errors
- Check that your `.env` file has correct credentials
- Make sure your Supabase project is not paused

**Issue:** "Row Level Security" errors
- Check that RLS policies are correctly set up
- Verify you're logged in as a user

**Issue:** Table doesn't exist
- Run the SQL schema again in Supabase SQL Editor
- Make sure all statements executed successfully
