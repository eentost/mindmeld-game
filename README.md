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

## 🎨 Shannon-style Demo UI

Next.js + Tailwind 기반의 **Shannon-style AI 공격 흐름 데모 UI**입니다.
하나의 컴포넌트를 가지고 세 가지 용도로 사용할 수 있습니다.

- 웹 페이지용 애니메이션 섹션
- 제품 랜딩 페이지의 히어로 섹션
- 실제 기능 없이 동작하는 더미 데모 UI

### 1. 웹 페이지용 애니메이션 섹션

일반 페이지 안에서 독립적인 애니메이션 블록으로 사용합니다.

```tsx
// app/page.tsx 또는 pages/index.tsx
import ShannonStyleDemo from "@/components/ShannonStyleDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <ShannonStyleDemo />
    </main>
  );
}
```

이 방식은 문서/블로그/제품 설명 페이지 중간에 "라이브 데모"처럼 삽입할 때 적합합니다.

### 2. 랜딩 페이지 히어로 섹션

히어로 섹션에서 왼쪽은 카피/CTA, 오른쪽은 데모 UI로 구성합니다.

```tsx
// app/page.tsx
import ShannonStyleDemo from "@/components/ShannonStyleDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-[1.1fr,1.1fr] gap-10 items-center">
        {/* Left: Copy */}
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-emerald-500/40 px-3 py-1 text-xs font-mono text-emerald-300">
            100% autonomous AI pentest
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Ship faster with an
            <span className="text-emerald-400"> autonomous hacker</span>
            watching your back.
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl">
            Point Shannon at any staging or production URL and let it discover,
            exploit, and summarize real vulnerabilities – no manual commands,
            no custom scripts.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400">
              Start a free run
            </button>
            <button className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:border-slate-400">
              View report example
            </button>
          </div>
        </div>

        {/* Right: Demo UI */}
        <ShannonStyleDemo />
      </section>
    </main>
  );
}
```

이 패턴은 Tailwind Hero 섹션 예제들과 동일한 2컬럼 구조를 따릅니다.

### 3. 기능 없는 더미 데모 UI

실제 백엔드/스캐너 없이, 프론트 단에서만 동작하는 "시각적 데모" 용도로 사용합니다.

```tsx
// components/ShannonStyleDemo.tsx
// (이 컴포넌트 하나만으로도 완전한 더미 데모 UI)

// steps 배열 내용만 원하는 도메인에 맞게 수정해서,
// 악성코드 분석, 네트워크 공격 시뮬, 코드 리뷰 등으로 손쉽게 재브랜딩할 수 있습니다.
```

이 형태는:

- 마케팅/소개 페이지에 "실제처럼 보이는 애니메이션"을 넣고 싶을 때
- GitHub README, 제품 소개용 GIF 녹화에 쓰기 좋습니다.

### 설치 및 실행

```bash
# Next.js 프로젝트 생성
npx create-next-app shannon-demo

cd shannon-demo

# Tailwind CSS 설치
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Tailwind 설정 후, 위 컴포넌트/페이지 코드 추가
npm run dev
```
