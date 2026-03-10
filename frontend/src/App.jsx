import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';

const socket = io(import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000');

const App = () => {
  const [username, setUsername] = useState('');
  const [session, setSession] = useState(null);
  const [myPattern, setMyPattern] = useState([]);
  const [joined, setJoined] = useState(false);
  const [message, setMessage] = useState('');

  const nodes = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'theta'];

  useEffect(() => {
    socket.on('session_update', (data) => setSession(data));
    socket.on('pattern_matched', (data) => {
      setSession(prev => ({ ...prev, current_pattern: data.new_pattern }));
      setMessage(`Neural synchronization by ${data.winner}! New pattern generated.`);
      setMyPattern([]);
      setTimeout(() => setMessage(''), 3000);
    });
    socket.on('match_failed', (data) => setMessage(data.message));
    return () => socket.off();
  }, []);

  const joinGame = () => {
    if (username) {
      socket.emit('join_session', { username, session_id: 'neural-network-1' });
      setJoined(true);
    }
  };

  const handleNodeClick = (node) => {
    const newPattern = [...myPattern, node];
    setMyPattern(newPattern);
    if (newPattern.length === session?.current_pattern.length) {
      socket.emit('submit_match', { session_id: 'neural-network-1', pattern: newPattern });
    }
  };

  if (!joined) {
    return (
      <div className=\"min-h-screen bg-slate-900 flex items-center justify-center text-white p-4\">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className=\"bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md\">
          <h1 className=\"text-3xl font-bold mb-6 text-center text-cyan-400\">MindMeld 🧠</h1>
          <p className=\"text-slate-400 mb-6 text-center\">Connect to the neural collective.</p>
          <input type=\"text\" placeholder=\"Neural Identifier\" className=\"w-full bg-slate-700 border-none rounded-lg p-3 mb-4 focus:ring-2 focus:ring-cyan-500 transition\" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={joinGame} className=\"w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg shadow-lg transition transform hover:scale-105\">Synchronize</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className=\"min-h-screen bg-slate-900 text-white p-6 font-sans\">
      <header className=\"flex justify-between items-center mb-8 max-w-4xl mx-auto\">
        <h1 className=\"text-2xl font-bold text-cyan-400\">MindMeld Dashboard</h1>
        <div className=\"bg-slate-800 px-4 py-2 rounded-full border border-cyan-900/50\"><span className=\"text-cyan-400 mr-2\">●</span> {username}</div>
      </header>
      <main className=\"max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8\">
        <div className=\"md:col-span-2 space-y-8\">
          <div className=\"bg-slate-800 p-6 rounded-2xl border border-slate-700\">
            <h2 className=\"text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4\">Target Neural Pattern</h2>
            <div className=\"flex gap-4 justify-center\">{session?.current_pattern.map((node, i) => (<div key={i} className=\"w-12 h-12 rounded-full bg-slate-700 border-2 border-dashed border-slate-600 flex items-center justify-center text-xs opacity-50\">?</div>))}</div>
          </div>
          <div className=\"bg-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden\">
             <div className=\"grid grid-cols-3 gap-6 relative z-10\">
                {nodes.map(node => (<button key={node} onClick={() => handleNodeClick(node)} className=\"h-24 rounded-xl bg-slate-700 hover:bg-cyan-900/30 border border-slate-600 hover:border-cyan-500 transition-all flex flex-col items-center justify-center gap-2 group\"><div className=\"w-8 h-8 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/40 transition shadow-inner\"></div><span className=\"text-xs uppercase tracking-tighter text-slate-400 group-hover:text-cyan-400\">{node}</span></button>))}
             </div>
          </div>
          <div className=\"flex gap-2 justify-center h-12\">{myPattern.map((node, i) => (<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} key={i} className=\"px-4 py-2 bg-cyan-900/50 border border-cyan-500/50 rounded-lg text-xs font-mono text-cyan-300\">{node}</motion.div>))}</div>
        </div>
        <div className=\"bg-slate-800 p-6 rounded-2xl border border-slate-700 h-fit\">
          <h2 className=\"text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6\">Neural Sync Rankings</h2>
          <div className=\"space-y-4\">{session && Object.entries(session.players).map(([sid, player]) => (<div key={sid} className=\"flex justify-between items-center p-3 bg-slate-700/50 rounded-lg\"><span className=\"text-sm\">{player.username}</span><span className=\"text-cyan-400 font-mono\">{player.score}</span></div>))}</div>
        </div>
      </main>
      <AnimatePresence>{message && (<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className=\"fixed bottom-8 left-1/2 -translate-x-1/2 bg-cyan-600 text-white px-8 py-4 rounded-2xl shadow-2xl font-bold\">{message}</motion.div>)}</AnimatePresence>
    </div>
  );
};

export default App;
