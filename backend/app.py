import os
import random
import time
from flask import Flask, jsonify, request
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'neural-secret-key')
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# In-memory storage for game sessions
sessions = {}

def generate_pattern(difficulty=1):
    nodes = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'theta']
    length = 3 + difficulty
    return [random.choice(nodes) for _ in range(length)]

@app.route('/health')
def health():
    return jsonify({"status": "healthy", "version": "1.0.0"})

@socketio.on('connect')
def handle_connect():
    print(f"Client connected: {request.sid}")

@socketio.on('join_session')
def on_join(data):
    username = data.get('username', 'Anonymous')
    session_id = data.get('session_id', 'default')
    join_room(session_id)
    if session_id not in sessions:
        sessions[session_id] = {
            'players': {},
            'current_pattern': generate_pattern(),
            'start_time': time.time()
        }
    sessions[session_id]['players'][request.sid] = {
        'username': username,
        'score': 0,
        'progress': 0
    }
    emit('session_update', sessions[session_id], room=session_id)

@socketio.on('submit_match')
def handle_match(data):
    session_id = data.get('session_id', 'default')
    player_pattern = data.get('pattern', [])
    if session_id in sessions:
        target_pattern = sessions[session_id]['current_pattern']
        if player_pattern == target_pattern:
            sessions[session_id]['players'][request.sid]['score'] += 10
            sessions[session_id]['current_pattern'] = generate_pattern()
            emit('pattern_matched', {
                'winner': sessions[session_id]['players'][request.sid]['username'],
                'new_pattern': sessions[session_id]['current_pattern'],
                'scores': {sid: p['score'] for sid, p in sessions[session_id]['players'].items()}
            }, room=session_id)
        else:
            emit('match_failed', {'message': 'Neural pattern mismatch'}, room=request.sid)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
