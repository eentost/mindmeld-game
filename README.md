# MindMeld Game 🧠

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker Compose](https://img.shields.io/badge/Docker-Compose-blue.svg)](https://docs.docker.com/compose/)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0-lightgrey.svg)](https://flask.palletsprojects.com/)

An innovative multiplayer neural pattern matching game with Docker Compose based full-stack architecture. Features real-time WebSocket connections, AI pattern generation, and interactive brain network visualization.

---

## 🎮 Visual Gameplay Preview

### 🧠 Real-time Neural Pattern Matching
> "Sync your mind with the network."

```text
       NODE [A] <---- (SYNCING) ----> NODE [B]
          |                            |
          |       [MATCH FOUND!]       |
          +---------- ⚡️⚡️⚡️ ----------+
```

### 🕹️ Interactive Dashboard (Preview)
| Phase | Visualization | Status |
| :--- | :--- | :--- |
| **Neural Link** | `●---●---●` | [ACTIVE] |
| **Data Flow** | `>>> >>> >>>` | [STABLE] |
| **Pattern Match** | `[████████]` | [SUCCESS] |

---

## ✨ Features

- **🌐 Real-time Multiplayer**: Powered by Socket.IO for seamless neural synchronization.
- **🤖 AI Pattern Engine**: Adaptive difficulty scaling using pattern recognition algorithms.
- **🎨 3D Visualization**: Interactive D3.js and Three.js brain network rendering.
- **🐳 Containerized Stack**: Zero-config deployment with Docker Compose.
- **⚡️ High Performance**: Redis-backed session management for ultra-low latency.

---

## 🛠️ Technology Stack

### Backend
- **Framework**: Flask & Flask-SocketIO
- **Database**: PostgreSQL (Persistent storage)
- **Cache**: Redis (State management)
- **ORM**: SQLAlchemy

### Frontend
- **Framework**: React 18+ (Vite)
- **Styling**: Tailwind CSS
- **Visuals**: D3.js / Three.js (Neural visualization)

---

## 🚀 Quick Start

### 1. Prerequisites
- [Docker & Docker Compose](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)

### 2. Run with One Command
```bash
git clone https://github.com/eentost/mindmeld-game.git
cd mindmeld-game
cp .env.example .env
docker-compose up -d
```

### 3. Access
- **Game UI**: `http://localhost:3000`
- **API Server**: `http://localhost:5000`

---

## 📜 Game Mechanics

### 🧬 The Neural Pattern
Players are presented with a complex neural graph. Your goal is to identify the "Meld Point"—the node that connects all active signals.

1. **Observe**: Watch the neural pulses (D3.js visualization).
2. **Analyze**: Identify the central connection pattern.
3. **Meld**: Click the node to sync your mind.
4. **Win**: The fastest melder takes the score!

---

## 📂 Project Structure

```text
mindmeld-game/
├── backend/            # Flask API & WebSocket Engine
│   ├── app.py          # Real-time game logic
│   └── Dockerfile      # Optimized Python 3.11 image
├── frontend/           # React + Vite Application
│   ├── src/visuals/    # D3 & Three.js components
│   └── Dockerfile      # Multi-stage Nginx build
└── docker-compose.yml  # Full-stack orchestration
```

---

## 📈 Performance Monitoring

The application includes built-in telemetry:
- **Signal Latency**: Tracked via WebSockets.
- **Node Health**: Monitored through Redis.
- **Database Sync**: Managed by PostgreSQL health checks.

---

**Made with ♥ by [eentost](https://github.com/eentost)**

*“Unlock the potential of the collective mind.”*
