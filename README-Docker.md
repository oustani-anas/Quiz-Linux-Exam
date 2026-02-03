# Docker Setup for Linux Quiz App

This guide explains how to run the Linux Quiz application using Docker Compose.

## Prerequisites

- Docker installed on your system
- Docker Compose installed (usually comes with Docker Desktop)

## Quick Start

1. **Build and start the container:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Docker Commands

### Start the service
```bash
docker-compose up
```

### Start in detached mode (background)
```bash
docker-compose up -d
```

### Stop the service
```bash
docker-compose down
```

### Rebuild the container
```bash
docker-compose up --build
```

### View logs
```bash
docker-compose logs -f frontend
```

### Restart the service
```bash
docker-compose restart frontend
```

## Service Details

- **Service Name:** `frontend`
- **Container Name:** `linux-quiz-frontend`
- **Port:** `3000` (mapped to host port 3000)
- **Health Check:** Enabled (checks every 30 seconds)

## File Structure

The Docker setup includes:
- `Dockerfile` - Multi-stage build for optimized production image
- `docker-compose.yml` - Service configuration
- `.dockerignore` - Files to exclude from Docker build context

## Notes

- The JSON files (`questions.json` and `answers.json`) are mounted as read-only volumes
- The container runs in production mode
- The application uses Next.js standalone output for optimal Docker deployment
