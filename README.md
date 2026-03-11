# Modern Admin Dashboard

A professional React admin dashboard application with authentication and modern UI.

## Features

- Modern, responsive UI built with React and Tailwind CSS
- Login authentication with hardcoded credentials
- Professional admin dashboard with statistics and charts
- Navigation with React Router
- Protected routes
- Mobile-responsive sidebar

## Demo Credentials

- Username: `admin`
- Password: `admin`

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Docker Deployment

### Build Docker Image

Build the Docker image with the following command:

```bash
docker build -t admin-dashboard .
```

### Run Docker Container

Run the container locally:

```bash
docker run -p 8080:80 admin-dashboard
```

The application will be available at `http://localhost:8080`

### Docker Details

The Dockerfile uses a multi-stage build:
- **Build Stage**: Uses Node.js 18 to build the React application
- **Production Stage**: Uses Nginx Alpine to serve the static files
- Exposes port 80
- Includes optimized caching headers for static assets

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Login.tsx          # Login page component
│   │   └── Dashboard.tsx      # Dashboard page component
│   ├── App.tsx                # Main app with routing
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles
├── Dockerfile                  # Multi-stage Docker build
├── nginx.conf                  # Nginx configuration
└── package.json               # Dependencies and scripts
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (icons)
- Vite (build tool)
- Nginx (production server)
