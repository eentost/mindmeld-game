# MindMeld Game 🧠

An innovative multiplayer neural pattern matching game with Docker Compose based full-stack architecture. This project demonstrates real-time WebSocket connections, AI pattern generation, and interactive brain network visualization.

## Features

- **Real-time Multiplayer**: WebSocket-based multiplayer game engine
- **AI Pattern Generation**: Machine learning powered pattern difficulty scaling
- **Interactive Visualization**: 3D neural network visualization with D3.js
- **Docker Compose Architecture**: Fully containerized full-stack application
- **RESTful API**: Python Flask backend with comprehensive API endpoints
- **Responsive Frontend**: Modern React-based UI with Tailwind CSS
- **Session Management**: Redis-based session and state management
- **Database Integration**: PostgreSQL for persistent data storage

## Project Structure

```
mindmeld-game/
├── backend/                 # Python Flask API Server
│   ├── app.py               # Main Flask application
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile         # Backend container
│   ├── wsgi.py            # WSGI configuration
│   ├── config.py          # Environment configuration
│   ├── models.py          # Database models
│   ├── routes/            # API endpoints
│   └── utils/             # Helper functions
├── frontend/               # React Application
│   ├── src/
│   │   ├── App.jsx           # Main React component
│   │   ├── components/       # React components
│   │   ├── pages/           # Page components
│   │   ├── styles/          # CSS styles
│   │   ├── utils/           # Utility functions
│   │   ├── hooks/           # React hooks
│   │   ├── services/        # API services
│   │   ├── App.css          # App styles
│   │   └── index.html       # HTML template
│   ├── package.json       # Node dependencies
│   ├── vite.config.js    # Vite configuration
│   ├── Dockerfile        # Frontend container
│   └── nginx.conf         # Nginx configuration
├── docker-compose.yml       # Docker Compose configuration
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variables template
└── README.md               # This file
```

## Technology Stack

### Backend
- **Framework**: Flask & Flask-SocketIO
- **Database**: PostgreSQL
- **Caching**: Redis
- **ORM**: SQLAlchemy
- **API**: RESTful API with Flask-RESTX

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Visualization**: D3.js & Three.js
- **Real-time**: Socket.IO Client

### DevOps
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **Reverse Proxy**: Nginx
- **CI/CD Ready**: GitHub Actions compatible

## Quick Start

### Prerequisites
- Docker & Docker Compose (latest version)
- Git

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/eentost/mindmeld-game.git
   cd mindmeld-game
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

3. **Start the application**
   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Docs: http://localhost:5000/api/docs

### Development Mode

```bash
# Start with hot-reload
docker-compose -f docker-compose.dev.yml up

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Stop services
docker-compose down
```

## Game Rules

### Gameplay
1. **Pattern Matching**: Players must match a neural network pattern within the time limit
2. **Pattern Complexity**: AI adjusts difficulty based on player performance
3. **Multiplayer Modes**:
   - **Solo**: Single player puzzle solving
   - **Competitive**: Real-time pattern race with others
   - **Cooperative**: Team-based pattern solving
4. **Scoring System**:
   - Speed bonus: Faster completion = higher score
   - Accuracy bonus: Perfect patterns = bonus multiplier
   - Combo bonus: Consecutive correct patterns

### Neural Network Visualization
- **Nodes**: Represent pattern elements
- **Connections**: Show relationships between patterns
- **Animation**: Real-time brain activity simulation
- **Colors**: Pattern difficulty indicators

## API Endpoints

### Authentication
```
POST   /api/auth/register    - Register new user
POST   /api/auth/login       - User login
POST   /api/auth/logout      - User logout
GET    /api/auth/me          - Get current user
```

### Game
```
GET    /api/game/patterns    - Get available patterns
POST   /api/game/start       - Start new game session
GET    /api/game/session/{id} - Get session details
POST   /api/game/submit      - Submit pattern solution
```

### Leaderboard
```
GET    /api/leaderboard      - Get global leaderboard
GET    /api/leaderboard/friends - Get friends leaderboard
GET    /api/stats/{user_id}  - Get user statistics
```

### WebSocket Events
```
emit('game:start')           - Start game session
emit('pattern:match')        - Submit pattern match
on('pattern:new')            - Receive new pattern
on('player:joined')          - Player joined game
on('game:end')               - Game ended
```

## Configuration

### Environment Variables

Create `.env` file with the following variables:

```bash
# Backend Configuration
FLASK_ENV=production
FLASK_SECRET_KEY=your_secret_key_here
DATABASE_URL=postgresql://user:password@postgres:5432/mindmeld
REDIS_URL=redis://redis:6379/0
JWT_SECRET=your_jwt_secret

# Frontend Configuration
REACT_APP_API_URL=http://localhost:5000
REACT_APP_WS_URL=ws://localhost:5000

# Database
POSTGRES_USER=mindmeld_user
POSTGRES_PASSWORD=secure_password
POSTGRES_DB=mindmeld_db

# Redis
REDIS_PASSWORD=redis_password
```

## Docker Compose Services

### Services
1. **postgres**: PostgreSQL database (port 5432)
2. **redis**: Redis cache (port 6379)
3. **backend**: Flask API server (port 5000)
4. **frontend**: React application with Nginx (port 3000)

### Networking
All services are connected via Docker bridge network `mindmeld-network`

## Development Guide

### Backend Development

```bash
# Enter backend container
docker-compose exec backend bash

# Install new dependency
pip install package_name
pip freeze > requirements.txt

# Run tests
python -m pytest

# Run migrations
flask db upgrade
```

### Frontend Development

```bash
# Enter frontend container
docker-compose exec frontend bash

# Install new dependency
npm install package_name

# Run tests
npm test

# Build for production
npm run build
```

## Performance Optimization

- **Caching**: Redis caching for frequently accessed data
- **Database Indexing**: Optimized database queries
- **Code Splitting**: Frontend component lazy loading
- **CDN Integration**: Static assets served from CDN
- **WebSocket Optimization**: Efficient message bundling

## Security Features

- **JWT Authentication**: Secure token-based auth
- **CORS Protection**: Configured cross-origin policies
- **SQL Injection Prevention**: SQLAlchemy ORM usage
- **Rate Limiting**: API endpoint rate limiting
- **HTTPS/TLS**: SSL certificate support
- **Input Validation**: Comprehensive input sanitization

## Testing

```bash
# Backend tests
docker-compose exec backend python -m pytest --cov=.

# Frontend tests
docker-compose exec frontend npm test -- --coverage

# Integration tests
docker-compose exec backend python -m pytest tests/integration/
```

## Deployment

### Production Deployment

```bash
# Build images
docker-compose -f docker-compose.prod.yml build

# Push to registry
docker-compose -f docker-compose.prod.yml push

# Deploy to server
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes Deployment

Kubernetes manifests available in `k8s/` directory for cloud deployment.

## Monitoring & Logging

- **Application Logs**: Accessible via `docker-compose logs`
- **Performance Monitoring**: Prometheus metrics available
- **Error Tracking**: Sentry integration for error reporting
- **Database Monitoring**: PostgreSQL monitoring tools

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@mindmeld-game.com or open an issue on GitHub.

## Roadmap

- [ ] Mobile app support (React Native)
- [ ] Advanced AI pattern generation with neural networks
- [ ] Social features (friends, chat, clans)
- [ ] Seasonal leaderboards and tournaments
- [ ] VR/AR game mode support
- [ ] Blockchain integration for achievements
- [ ] Advanced analytics dashboard
- [ ] Internationalization (i18n) support

## Acknowledgments

- Built with passion for gaming and neural networks
- Special thanks to the open-source community
- Inspired by cognitive science and neuroscience research

---

**Made with ♥ by eentost**

Star us on GitHub if you find this project interesting! ⭐
