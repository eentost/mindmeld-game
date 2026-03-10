# MindMeld Game 🧠

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker Compose](https://img.shields.io/badge/Docker--Compose-blue.svg)](https://docs.docker.com/compose/)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0-lightgrey.svg)](https://flask.palletsprojects.com/)

An innovative multiplayer neural pattern matching game with Docker Compose based full-stack architecture. Features real-time WebSocket connections, AI pattern generation, and interactive brain network visualization.

---

## 🎮 Visual Gameplay Preview

### 🧠 Real-time Neural Synchronization
> "Connect the collective consciousness."

<p align="center">
  <img src="https://raw.githubusercontent.com/logancyang/loss-landscape-anim/main/examples/landscape_anim.gif" width="600" alt="Neural Network Animation">
</p>

### 🕹️ Interactive Neural Dashboard
<p align="center">
  <img src="https://raw.githubusercontent.com/markhliu/ml_animated/main/gif/gradient_descent_lr.gif" width="600" alt="Data Flow Animation">
</p>

---

## ✨ Features

- 🌐 **Real-time Multiplayer**: Powered by Socket.IO for seamless neural synchronization.
- 🤖 **AI Pattern Engine**: Adaptive difficulty scaling using pattern recognition algorithms.
- 🧠 **Neural Visualization**: Interactive D3.js brain maps for real-time progress tracking.
- 🐳 **Dockerized Stack**: One-command deployment for both local and production environments.
- ⚡ **High Performance**: Optimized Flask-SocketIO backend with React frontend.

---

## 🛠️ Tech Stack

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,flask,docker,postgres,js,py,html,css" />
  </a>
</p>

- **Frontend**: React 18, Tailwind CSS, Framer Motion, Socket.io-client.
- **Backend**: Flask 3.0, Flask-SocketIO, Python 3.11.
- **Database**: PostgreSQL (for persistent session and leaderboard data).
- **DevOps**: Docker, Docker Compose, GitHub Actions.

---

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/eentost/mindmeld-game.git
   cd mindmeld-game
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your specific configurations
   ```

3. **Launch with Docker Compose**
   ```bash
   docker-compose up --build
   ```

4. **Play the Game**
   Access the app at `http://localhost:3000`.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



---

## 🎮 Live Neural Pattern Matching Demo

실시간 신경 패턴 매칭 게임플레이를 시뮬레이션한 데모입니다. **WebSocket 기반의 멀티플레이어** 환경에서 두 플레이어가 동시에 나타나는 뇌 패턴을 매칭하는 모습을 보여줍니다.

### 게임 인터페이스 개요

```
╔════════════════════════════════════════════════════════════════╗
║                    🧠 MINDMELD NEURAL SYNC                     ║
╚════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│ PLAYER 1: Alice                          PLAYER 2: Bob          │
│ Status: 🟢 CONNECTED (Ping: 12ms)        Status: 🟢 CONNECTED   │
│ Score: 2,480 pts                         Score: 2,305 pts       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    CURRENT NEURAL PATTERN                        │
│                                                                  │
│  Pattern: [🔴 🟡 🟡 🔵 🟡 🟢]  "Sequence: 5-2-3-1-2-4"        │
│  Difficulty: HARD                                               │
│  Time Remaining: 8.2s  ████████░░░░░░░░                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────────┐  ┌──────────────────────────┐
│  Alice's Pattern Input   │  │  Bob's Pattern Input     │
│  ════════════════════    │  │  ═══════════════════     │
│                          │  │                          │
│  [🔴 🟡 🟡 🔵 ▪ ▪]     │  │  [🔴 🟡 🟡 🔵 🟡 ▪]    │
│  [  ✓  ✓  ✓  ✓  ✗ ▪]   │  │  [  ✓  ✓  ✓  ✓  ✓  ▪]   │
│                          │  │                          │
│  Accuracy: 66.7%         │  │  Accuracy: 83.3%        │
│                          │  │                          │
└──────────────────────────┘  └──────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                     AI PATTERN ENGINE                           │
│  ═══════════════════════════════════════════════════════════   │
│  • Next pattern generating...                                   │
│  • Complexity level: 7/10 (Adaptive to player performance)     │
│  • Neural network synchronization: 94% ████████████████░      │
│  • WebSocket connection: STABLE ▓▓▓▓▓▓▓▓▓▓                     │
└─────────────────────────────────────────────────────────────────┘

📊 SESSION STATISTICS
  ├─ Total Rounds: 24
  ├─ Current Win Streak (Alice): 3
  ├─ Average Reaction Time: 245ms
  ├─ Collective Brain Sync Score: 87.4%
  └─ Network Latency: 12ms (Optimal)
```

### 실시간 데이터 흐름

1. **AI 패턴 생성** → Flask 백엔드에서 신경망 모델이 새로운 패턴 생성
2. **WebSocket 브로드캐스트** → 모든 연결된 플레이어에게 동시에 전송 (지연: <50ms)
3. **플레이어 입력 수집** → 양쪽 플레이어의 패턴 매칭 응답 수집
4. **실시간 점수 계산** → 정확도 및 반응 속도 기반 점수 산출
5. **뇌 네트워크 시각화** → D3.js로 신경 연결 상태 렌더링

### 주요 게임 메커니즘

#### 1️⃣ 신경 패턴 매칭
- **AI가 생성한 6-8개의 컬러 패턴**이 0.5초마다 업데이트
- 플레이어는 보이는 패턴을 **5초 이내에 정확하게 재현**해야 함
- 정확도 = (올바른 입력 개수 / 전체 패턴 길이) × 100%

#### 2️⃣ 실시간 멀티플레이어 동기화
```typescript
// 모든 플레이어가 동시에 같은 패턴을 보고 경쟁
WebSocket Message (broadcast):
{
  "event": "pattern_generated",
  "pattern": [1, 2, 3, 4, 2, 1],  // 숫자 = 뇌 영역 ID
  "difficulty": 7,
  "timestamp": 1710081200000,
  "expiry_ms": 5000
}
```

#### 3️⃣ 적응형 난이도 (AI Pattern Engine)
- 플레이어 정확도 > 90% → 난이도 +1
- 플레이어 정확도 < 60% → 난이도 -1
- **패턴 길이 범위**: 4개 (EASY) ~ 10개 (EXTREME)

#### 4️⃣ 뇌 네트워크 시각화 (D3.js)
- 각 플레이어의 신경 연결을 **실시간 그래프**로 표시
- 연결 강도 = 패턴 매칭 정확도
- 동기화된 플레이어는 **신경망이 겹쳐서 표시**됨

### 기술 스택 (데모 구현)

**Frontend (React + Tailwind)**
```tsx
<div className="grid grid-cols-2 gap-4">
  {/* 플레이어 1 정보 */}
  <PlayerCard player={players[0]} pattern={currentPattern} />
  
  {/* 플레이어 2 정보 */}
  <PlayerCard player={players[1]} pattern={currentPattern} />
  
  {/* 뇌 네트워크 시각화 */}
  <NeuralNetworkViz connections={patternData} />
  
  {/* 게임 통계 */}
  <SessionStats stats={gameStats} />
</div>
```

**Backend (Flask + WebSocket)**
```python
# AI 패턴 생성
pattern = np.random.choice(range(1, 7), size=difficulty, replace=True)

# WebSocket으로 브로드캐스트
socketio.emit('pattern_generated', {
    'pattern': pattern.tolist(),
    'timestamp': time.time()
}, broadcast=True)

# 플레이어 응답 검증
accuracy = calculate_accuracy(user_input, pattern)
score = calculate_score(accuracy, reaction_time)
```

### 사용 사례

1. **GitHub README 데모** - 프로젝트 소개에 게임플레이 시뮬레이션
2. **마케팅 랜딩 페이지** - 신경망 싱크 경험 소개
3. **웹 애니메이션** - 실시간 멀티플레이어 게임의 긴장감 표현
4. **개발 문서** - WebSocket 및 AI 패턴 생성 아키텍처 설명
