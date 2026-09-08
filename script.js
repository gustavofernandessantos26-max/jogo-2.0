:root {
  --bg-dark: #0a0118;
  --neon-cyan: #00f5d4;
  --neon-pink: #ff2e88;
  --gold: #ffd60a;
  --white: #eef1ff;
  --sand: #e2c36a;
}
* { box-sizing: border-box; margin:0; padding:0; font-family: 'Segoe UI', Roboto, sans-serif; user-select:none; -webkit-tap-highlight-color:transparent; }
body, html { width:100%; height:100%; background:#07243a; overflow:hidden; display:flex; justify-content:center; align-items:center; }
body::before {
  content:""; position:fixed; inset:0; pointer-events:none; z-index:0;
  background:
    radial-gradient(ellipse at 20% 10%, rgba(0,245,212,0.18), transparent 42%),
    radial-gradient(ellipse at 80% 90%, rgba(255,46,136,0.16), transparent 46%),
    linear-gradient(180deg, #041525 0%, #0a3a58 55%, #12324a 100%);
}
#game-container {
  position:relative; width:100%; height:100%; max-width:1120px; max-height:630px;
  border:3px solid var(--neon-cyan); box-shadow:0 0 40px rgba(0,245,212,0.5), 0 0 80px rgba(255,46,136,0.18);
  background:#1fa3c9; border-radius:12px; overflow:hidden; z-index:1;
}
#bikini-wallpaper {
  position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; display:block;
}
#game-container::after {
  content:""; position:absolute; inset:0; pointer-events:none; z-index:8;
  background:
    radial-gradient(ellipse at 50% 42%, transparent 46%, rgba(4,28,48,0.38) 100%),
    linear-gradient(180deg, rgba(0,245,212,0.07), transparent 20%, transparent 70%, rgba(255,46,136,0.08)),
    repeating-linear-gradient(120deg, transparent 0 18px, rgba(255,255,255,0.015) 18px 19px);
  mix-blend-mode:soft-light;
}
#caustic-overlay {
  position:absolute; inset:0; pointer-events:none; z-index:7; opacity:0.28;
  background:
    radial-gradient(ellipse at 20% 30%, rgba(0,255,220,0.25), transparent 36%),
    radial-gradient(ellipse at 80% 20%, rgba(80,200,255,0.18), transparent 32%),
    radial-gradient(ellipse at 50% 80%, rgba(255,220,80,0.10), transparent 40%);
  animation: causticShift 7s ease-in-out infinite alternate;
}
@keyframes causticShift {
  0% { transform:translate3d(-2%,-1%,0) scale(1.04); filter:hue-rotate(0deg); }
  100% { transform:translate3d(3%,2%,0) scale(1.08); filter:hue-rotate(18deg); }
}
.screen { position:absolute; top:0; left:0; width:100%; height:100%; display:none; flex-direction:column; justify-content:center; align-items:center; z-index:10; color:#eef1ff; text-align:center; padding:20px; background:rgba(6,40,70,0.28); }
.screen.active { display:flex; }
#screen-game { background:transparent; padding:0; }
#screen-gameover { background:rgba(6,30,55,0.82); backdrop-filter:blur(12px); }
canvas { width:100%; height:100%; display:block; }
h1 { font-size:3.9rem; text-transform:uppercase; color:#fff; text-shadow:0 0 20px var(--neon-cyan), 0 0 40px var(--neon-pink); letter-spacing:8px; margin-bottom:5px; }
h2 { font-size:2.5rem; color:#ff2e88; text-shadow:0 0 20px #ff2e88; margin-bottom:18px; text-transform:uppercase; }
button {
  background:transparent; color:#fff; border:3px solid var(--neon-cyan); padding:16px 48px;
  font-size:1.4rem; font-weight:bold; text-transform:uppercase; cursor:pointer; border-radius:8px;
  transition:all 0.25s ease; box-shadow:0 0 20px rgba(0,245,212,0.4);
}
button:hover { background:var(--neon-cyan); color:#0a0118; box-shadow:0 0 40px var(--neon-cyan); transform:translateY(-3px) scale(1.04); }
button.secondary { border-color:#ff2e88; }
button.secondary:hover { background:#ff2e88; box-shadow:0 0 40px #ff2e88; color:white; }
.button-row { display:flex; gap:18px; margin-top:18px; flex-wrap:wrap; justify-content:center; }
.hud {
  position:absolute; top:18px; left:18px; right:18px; display:flex; justify-content:space-between; align-items:center;
  pointer-events:none; z-index:30;
}
.hud-left { display:flex; gap:14px; }
.hud-item {
  background:rgba(10,1,24,0.92); padding:11px 24px; border-radius:8px; border-left:5px solid var(--neon-cyan);
  font-weight:bold; font-size:1.35rem; box-shadow:0 4px 18px rgba(0,0,0,0.6);
}
#multiplier-display { color:#ff2e88; border-left-color:#ff2e88; }
#coins-display-wrapper { color:#ffd60a; border-left-color:#ffd60a; }
#pause-btn { pointer-events:auto; padding:10px; font-size:1.25rem; border-radius:50%; width:54px; height:54px; }
.powerup-hud { position:absolute; bottom:22px; left:50%; transform:translateX(-50%); display:flex; gap:10px; z-index:30; pointer-events:none; }
.powerup-icon {
  background:rgba(10,1,24,0.92); border:2px solid var(--neon-cyan); padding:9px 18px; border-radius:10px;
  font-size:1.2rem; color:#00f5d4; display:none; box-shadow:0 0 15px rgba(0,245,212,0.5);
}
.powerup-icon.active { display:block; animation: pop 0.3s ease; }
@keyframes pop { 0%{transform:scale(0.5);} 100%{transform:scale(1);} }
.combo-text {
  position:absolute; top:45%; left:50%; transform:translate(-50%, -50%);
  font-size:2.8rem; font-weight:bold; color:#ffd60a;
  text-shadow:0 0 20px #ffd60a, 0 0 40px #ffaa00;
  pointer-events:none; z-index:40; opacity:0; transition:opacity 0.2s ease;
}
.stats-box { background:rgba(20,5,45,0.8); border:2px solid rgba(255,255,255,0.2); padding:28px 42px; border-radius:14px; margin-bottom:28px; min-width:320px; }
.stat-line { display:flex; justify-content:space-between; margin:14px 0; font-size:1.4rem; }
.stat-line span:last-child { font-weight:bold; color:#00f5d4; }
.leaderboard-box { width:100%; max-width:560px; background:rgba(20,5,45,0.8); border:2px solid var(--neon-cyan); border-radius:14px; padding:22px; margin-bottom:28px; }
.leaderboard-table { width:100%; border-collapse:collapse; font-size:1.3rem; }
.leaderboard-table th { color:#ff2e88; border-bottom:3px solid #ff2e88; padding:14px 12px; text-transform:uppercase; font-size:1.1rem; letter-spacing:1.5px; }
.leaderboard-table td { padding:16px 12px; border-bottom:1px solid rgba(255,255,255,0.08); }
.leaderboard-table tr.player-row { background:rgba(0,245,212,0.22); color:#00f5d4; font-weight:bold; }
.pos-1 { color:#ffd700; font-weight:bold; } .pos-2 { color:#ddd; } .pos-3 { color:#cd7f32; }
.leaderboard-loading { color:#00f5d4; font-style:italic; padding:20px; }
.player-rank-card {
  width:100%; max-width:560px; margin-bottom:14px; padding:14px 18px;
  border:2px solid rgba(0,245,212,0.45); border-radius:12px;
  background:rgba(0,245,212,0.10); display:flex; justify-content:space-between; gap:12px;
  font-size:1.05rem;
}
.player-rank-card strong { color:#ffd60a; }
.mobile-controls { position:absolute; bottom:18px; left:18px; right:18px; display:none; justify-content:space-between; align-items:flex-end; z-index:35; pointer-events:none; gap:12px; }
.mobile-controls.show { display:flex; }
.ctrl-cluster { display:flex; gap:10px; pointer-events:auto; }
.ctrl-btn { width:62px; height:62px; border-radius:16px; border:2px solid var(--neon-cyan); background:rgba(10,1,24,0.82); color:#eef1ff; font-size:1.35rem; font-weight:bold; display:flex; align-items:center; justify-content:center; box-shadow:0 0 14px rgba(0,245,212,0.35); }
.ctrl-btn:active { background:var(--neon-cyan); color:#0a0118; }
.ctrl-btn.pink { border-color:var(--neon-pink); }
#pu-skate.cooling { opacity:0.45; }
