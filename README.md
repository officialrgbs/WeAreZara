# WeAreZara

An unofficial web application for 10-G. Zara students to track school days and access class resources.

## Features

- **Authentication**: Secure login with Firebase Authentication and whitelisted email access
- **School Day Tracking**: View last and next school days
- **School Day History**: Browse through all school days with details
- **User Profiles**: Personal profile page for each authorized user
- **Resources**: Access to class resources and materials

## Tech Stack

- **Frontend**: React with React Router for navigation
- **Styling**: Tailwind CSS for modern, responsive design
- **Backend**: Firebase (Authentication, Firestore Database)
- **Build Tool**: Vite for fast development and optimized production builds
- **Deployment**: Vercel for hosting and continuous deployment

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/WeAreZara.git
   cd WeAreZara
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your Firebase configuration
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server
   ```
   npm run dev
   ```

## Deployment

The application is configured for easy deployment on Vercel. The `vercel.json` file handles client-side routing to prevent 404 errors.

## License

This project is for educational purposes only.
