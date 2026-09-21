/**
 * Structured Multi-Theme & Level Whack-a-Mole Arcade
 * Themes:
 * 1. Cyberpunk Arcade (Obsidian, Cyan/Magenta, Holographic Alien Portals)
 * 2. Classic Meadow (Grass Green, Earthy Dirt Mounds, Cute Moles)
 * 3. Haunted Graveyard (Dark Purple/Black, Mossy Crypts, Eerie Ghosts)
 *
 * Top 3 Implemented High-Impact Features:
 * 1. Dynamic Combo Multiplier System (x2, x3, x4, x5+) with streak tracker & pitch-escalating Web Audio feedback.
 * 2. Pre-spawn Portal Warning Glow / Charging Animation for superior peripheral cueing.
 * 3. Dual Simultaneous Target Spawning on Hard (Level 3) & Frenzy (Level 4) with Squash/Stretch Hit-Stop Impact.
 */

// ==========================================
// 1. PROCEDURAL WEB AUDIO SYNTHESIS SYSTEM
// ==========================================
class ArcadeAudio {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('arcade_whack_sound') !== 'false';
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    localStorage.setItem('arcade_whack_sound', this.enabled.toString());
    return this.enabled;
  }

  playStart() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [330, 440, 554.37, 659.25];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.2, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.16);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.16);
      });
    } catch (e) {}
  }

  playHit(combo = 1, isGolden = false) {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const pitchMultiplier = isGolden ? 2.4 : Math.min(2.0, 1 + (combo - 1) * 0.12);

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = isGolden ? 'triangle' : 'sawtooth';
      osc1.frequency.setValueAtTime((isGolden ? 1200 : 880) * pitchMultiplier, now);
      osc1.frequency.exponentialRampToValueAtTime((isGolden ? 300 : 110) * pitchMultiplier, now + (isGolden ? 0.22 : 0.14));

      osc2.type = isGolden ? 'sine' : 'square';
      osc2.frequency.setValueAtTime((isGolden ? 800 : 440) * pitchMultiplier, now);
      osc2.frequency.exponentialRampToValueAtTime((isGolden ? 200 : 80) * pitchMultiplier, now + (isGolden ? 0.22 : 0.14));

      gain.gain.setValueAtTime(isGolden ? 0.35 : 0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (isGolden ? 0.22 : 0.14));

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + (isGolden ? 0.22 : 0.14));
      osc2.stop(now + (isGolden ? 0.22 : 0.14));
    } catch (e) {}
  }

  playMiss() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  playLevelUp() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const chords = [440, 554.37, 659.25, 880];
      chords.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
        gain.gain.setValueAtTime(0.28, now + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.35);
      });
    } catch (e) {}
  }

  playNewHighScore() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const fanfare = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      fanfare.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.26, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.1 + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.28);
      });
    } catch (e) {}
  }

  playGameOver() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [392, 349.23, 311.13, 261.63];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0.25, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.12 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.25);
      });
    } catch (e) {}
  }
}

// ==========================================
// 2. CANVAS CONFETTI CELEBRATION ENGINE
// ==========================================
class ConfettiSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start(themeColors = ['#00f0ff', '#ff007f', '#ffaa00', '#ffffff']) {
    this.particles = [];
    for (let i = 0; i < 90; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height - this.canvas.height,
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 4 + 3,
        speedX: (Math.random() - 0.5) * 4,
        color: themeColors[Math.floor(Math.random() * themeColors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8
      });
    }

    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.render();
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.ctx.restore();
    });

    this.particles = this.particles.filter(p => p.y < this.canvas.height + 20);

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.render());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  stop() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles = [];
  }
}

// ==========================================
// 3. THEME CREATURE SVG GENERATORS
// ==========================================
function getCreatureSVG(theme = 'cyberpunk', variant = 0, isGolden = false) {
  if (isGolden) {
    return `
    <svg class="alien-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Golden Crown & Radiant Shimmer Aura -->
      <path d="M50 35 L65 48 L80 25 L95 48 L110 35 L105 55 L55 55 Z" fill="#ffd700" stroke="#ffffff" stroke-width="2"/>
      <circle cx="80" cy="22" r="5" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)"/>
      <circle cx="48" cy="32" r="4" fill="#ffd700"/>
      <circle cx="112" cy="32" r="4" fill="#ffd700"/>
      <!-- Body with Golden Gradient -->
      <path d="M42 75 C42 45, 60 30, 80 30 C100 30, 118 45, 118 75 C118 118, 105 135, 80 135 C55 135, 42 118, 42 75 Z" fill="url(#golden-creature-grad)" stroke="#ffffff" stroke-width="3.5" filter="drop-shadow(0 0 16px #ffd700)"/>
      <!-- Sparkling Eyes -->
      <ellipse cx="65" cy="68" rx="10" ry="12" fill="#2d1600" stroke="#ffd700" stroke-width="2.5"/>
      <circle cx="65" cy="68" r="6" fill="#ffd700"/>
      <circle cx="67" cy="65" r="3" fill="#ffffff"/>
      <ellipse cx="95" cy="68" rx="10" ry="12" fill="#2d1600" stroke="#ffd700" stroke-width="2.5"/>
      <circle cx="95" cy="68" r="6" fill="#ffd700"/>
      <circle cx="97" cy="65" r="3" fill="#ffffff"/>
      <!-- Happy Wide Smile with Gold Spark -->
      <path d="M64 96 Q80 114 96 96" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
      <circle cx="80" cy="116" r="6" fill="#ffffff" filter="drop-shadow(0 0 10px #ffffff)"/>
      <defs>
        <linearGradient id="golden-creature-grad" x1="40" y1="25" x2="120" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fff275"/>
          <stop offset="40%" stop-color="#ffd700"/>
          <stop offset="100%" stop-color="#d4af37"/>
        </linearGradient>
      </defs>
    </svg>`;
  }

  // THEME 1: Cyberpunk Holographic Alien Monsters
  if (theme === 'cyberpunk') {
    if (variant === 0) {
      return `
      <svg class="alien-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 85 C40 45, 60 25, 80 25 C100 25, 120 45, 120 85 C120 120, 105 135, 80 135 C55 135, 40 120, 40 85 Z" fill="url(#alien-grad-1)" stroke="var(--theme-primary)" stroke-width="3"/>
        <path d="M60 35 L45 15" stroke="var(--theme-secondary)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="43" cy="13" r="6" fill="var(--theme-primary)" filter="drop-shadow(0 0 6px var(--theme-primary))"/>
        <path d="M100 35 L115 15" stroke="var(--theme-secondary)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="117" cy="13" r="6" fill="var(--theme-primary)" filter="drop-shadow(0 0 6px var(--theme-primary))"/>
        <ellipse cx="80" cy="62" rx="16" ry="16" fill="#090d1a" stroke="var(--theme-secondary)" stroke-width="3"/>
        <circle cx="80" cy="62" r="8" fill="var(--theme-primary)"/>
        <circle cx="83" cy="59" r="3" fill="#ffffff"/>
        <ellipse cx="58" cy="74" rx="9" ry="9" fill="#090d1a" stroke="var(--theme-primary)" stroke-width="2.5"/>
        <circle cx="58" cy="74" r="4.5" fill="var(--theme-secondary)"/>
        <ellipse cx="102" cy="74" rx="9" ry="9" fill="#090d1a" stroke="var(--theme-primary)" stroke-width="2.5"/>
        <circle cx="102" cy="74" r="4.5" fill="var(--theme-secondary)"/>
        <path d="M66 100 Q80 114 94 100" stroke="var(--theme-primary)" stroke-width="4" stroke-linecap="round" fill="none"/>
        <line x1="73" y1="102" x2="73" y2="108" stroke="var(--theme-secondary)" stroke-width="2.5"/>
        <line x1="80" y1="103" x2="80" y2="111" stroke="var(--theme-secondary)" stroke-width="2.5"/>
        <line x1="87" y1="102" x2="87" y2="108" stroke="var(--theme-secondary)" stroke-width="2.5"/>
        <path d="M50 115 L60 125 L100 125 L110 115" stroke="var(--theme-primary)" stroke-width="2" fill="none" opacity="0.7"/>
        <defs>
          <linearGradient id="alien-grad-1" x1="40" y1="25" x2="120" y2="135" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="var(--theme-secondary)" stop-opacity="0.9"/>
            <stop offset="60%" stop-color="#230a38" stop-opacity="0.95"/>
            <stop offset="100%" stop-color="var(--theme-primary)" stop-opacity="0.9"/>
          </linearGradient>
        </defs>
      </svg>`;
    } else {
      return `
      <svg class="alien-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55 45 Q35 15 25 35 Q40 55 52 60" fill="var(--theme-primary)" stroke="#ffffff" stroke-width="2"/>
        <path d="M105 45 Q125 15 135 35 Q120 55 108 60" fill="var(--theme-primary)" stroke="#ffffff" stroke-width="2"/>
        <path d="M45 70 C45 35, 115 35, 115 70 C115 115, 100 135, 80 135 C60 135, 45 115, 45 70 Z" fill="url(#alien-grad-2)" stroke="var(--theme-secondary)" stroke-width="3.5"/>
        <polygon points="56,65 72,60 68,75 54,73" fill="var(--theme-primary)" stroke="#ffffff" stroke-width="1.5"/>
        <polygon points="104,65 88,60 92,75 106,73" fill="var(--theme-primary)" stroke="#ffffff" stroke-width="1.5"/>
        <path d="M62 98 L70 108 L78 98 L80 98 L88 108 L98 98" stroke="var(--theme-secondary)" stroke-width="3.5" fill="none" stroke-linejoin="round"/>
        <circle cx="80" cy="122" r="5" fill="var(--theme-primary)"/>
        <defs>
          <linearGradient id="alien-grad-2" x1="45" y1="35" x2="115" y2="135" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="var(--theme-primary)" stop-opacity="0.95"/>
            <stop offset="50%" stop-color="#120c3b" stop-opacity="0.95"/>
            <stop offset="100%" stop-color="var(--theme-secondary)" stop-opacity="0.95"/>
          </linearGradient>
        </defs>
      </svg>`;
    }
  }

  // THEME 2: Classic Meadow Cute Animal Creatures (Moles)
  if (theme === 'meadow') {
    return `
    <svg class="alien-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="48" cy="45" r="14" fill="#7a4b27" stroke="#482d18" stroke-width="3"/>
      <circle cx="48" cy="45" r="8" fill="#fca311"/>
      <circle cx="112" cy="45" r="14" fill="#7a4b27" stroke="#482d18" stroke-width="3"/>
      <circle cx="112" cy="45" r="8" fill="#fca311"/>
      <ellipse cx="80" cy="85" rx="46" ry="50" fill="#9c6644" stroke="#482d18" stroke-width="4"/>
      <ellipse cx="80" cy="88" rx="26" ry="18" fill="#ddb892"/>
      <ellipse cx="80" cy="80" rx="11" ry="8" fill="#e76f51"/>
      <ellipse cx="78" cy="78" rx="3" ry="2" fill="#ffffff"/>
      <circle cx="62" cy="62" r="7" fill="#1b120c"/>
      <circle cx="64" cy="60" r="2.5" fill="#ffffff"/>
      <circle cx="98" cy="62" r="7" fill="#1b120c"/>
      <circle cx="100" cy="60" r="2.5" fill="#ffffff"/>
      <line x1="45" y1="84" x2="25" y2="80" stroke="#482d18" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="45" y1="90" x2="24" y2="94" stroke="#482d18" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="115" y1="84" x2="135" y2="80" stroke="#482d18" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="115" y1="90" x2="136" y2="94" stroke="#482d18" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="50" cy="120" rx="14" ry="10" fill="#ddb892" stroke="#482d18" stroke-width="3"/>
      <ellipse cx="110" cy="120" rx="14" ry="10" fill="#ddb892" stroke="#482d18" stroke-width="3"/>
    </svg>`;
  }

  // THEME 3: Haunted Graveyard Spooky Creatures (Eerie Ghost / Phantom)
  if (theme === 'graveyard') {
    return `
    <svg class="alien-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 80 C42 40, 60 20, 80 20 C100 20, 118 40, 118 80 C118 120, 105 135, 95 125 C85 115, 75 125, 65 115 C55 125, 42 120, 42 80 Z" fill="url(#ghost-grad)" stroke="#00ff88" stroke-width="3.5" filter="drop-shadow(0 0 12px #00ff88)"/>
      <ellipse cx="66" cy="62" rx="9" ry="13" fill="#0c0414" stroke="#00ff88" stroke-width="2"/>
      <circle cx="66" cy="62" r="5" fill="#00ff88"/>
      <ellipse cx="94" cy="62" rx="9" ry="13" fill="#0c0414" stroke="#00ff88" stroke-width="2"/>
      <circle cx="94" cy="62" r="5" fill="#00ff88"/>
      <ellipse cx="80" cy="92" rx="10" ry="16" fill="#0c0414" stroke="#9d4edd" stroke-width="2.5"/>
      <path d="M38 75 Q20 85 30 100 Q40 95 44 86" fill="#00ff88" opacity="0.6"/>
      <path d="M122 75 Q140 85 130 100 Q120 95 116 86" fill="#00ff88" opacity="0.6"/>
      <defs>
        <linearGradient id="ghost-grad" x1="40" y1="20" x2="120" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#9d4edd" stop-opacity="0.9"/>
          <stop offset="60%" stop-color="#240046" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#00ff88" stop-opacity="0.85"/>
        </linearGradient>
      </defs>
    </svg>`;
  }
}

// ==========================================
// 4. MAIN WHACK-A-MOLE ARCADE GAME ENGINE
// ==========================================
class WhackAMoleGame {
  constructor() {
    this.totalTime = 30;
    this.timeLeft = this.totalTime;
    this.score = 0;
    this.totalHits = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.currentLevel = 1;
    this.startLevelChoice = parseInt(localStorage.getItem('arcade_whack_start_level') || '1', 10);
    this.gameInterval = null;
    this.spawnTimers = new Map();
    this.activeCellIndices = new Set();
    this.goldenCellIndices = new Set();
    this.warningCellIndices = new Set();
    this.isPlaying = false;
    this.audio = new ArcadeAudio();
    this.confetti = new ConfettiSystem(document.getElementById('confetti-canvas'));

    this.selectedTheme = localStorage.getItem('arcade_whack_theme') || 'cyberpunk';
    this.highScore = parseInt(localStorage.getItem('arcade_whack_high_score') || '0', 10);

    // DOM Elements
    this.gameContainer = document.getElementById('game-container');
    this.gridElement = document.getElementById('portal-grid');
    this.scoreDisplay = document.getElementById('score-display');
    this.timeDisplay = document.getElementById('time-display');
    this.bestScoreDisplay = document.getElementById('best-score-display');
    this.speedStateDisplay = document.getElementById('speed-state-display');
    this.levelDisplay = document.getElementById('level-display');
    this.comboDisplay = document.getElementById('combo-display');
    this.comboVal = document.getElementById('combo-val');
    this.timerBox = document.querySelector('.timer-box');
    this.timerBar = document.getElementById('timer-bar');
    this.levelUpBanner = document.getElementById('level-up-banner');
    this.levelUpSub = document.getElementById('level-up-sub');
    this.gameBrandTitle = document.getElementById('game-brand-title');

    // Controls
    this.soundToggleBtn = document.getElementById('sound-toggle-btn');
    this.soundIcon = document.getElementById('sound-icon');
    this.soundLabel = document.getElementById('sound-label');
    this.modalSoundBtn = document.getElementById('modal-sound-btn');
    this.modalSoundText = document.getElementById('modal-sound-text');

    // Modals
    this.startScreen = document.getElementById('start-screen');
    this.gameOverScreen = document.getElementById('game-over-screen');
    this.settingsScreen = document.getElementById('settings-screen');
    this.startBtn = document.getElementById('start-btn');
    this.restartBtn = document.getElementById('restart-btn');
    this.changeSettingsBtn = document.getElementById('change-settings-btn');
    this.hudSettingsBtn = document.getElementById('hud-settings-btn');
    this.closeSettingsBtn = document.getElementById('close-settings-btn');

    this.startBestScore = document.getElementById('start-best-score');
    this.finalScore = document.getElementById('final-score');
    this.finalHits = document.getElementById('final-hits');
    this.finalHpm = document.getElementById('final-hpm');
    this.finalCombo = document.getElementById('final-combo');
    this.finalLevel = document.getElementById('final-level');
    this.finalBestScore = document.getElementById('final-best-score');
    this.newHighScoreBadge = document.getElementById('new-high-score-badge');

    this.cells = [];

    this.applyTheme(this.selectedTheme);
    this.initGrid();
    this.initControlSelectors();
    this.updateSoundUI();
    this.attachEvents();
    this.updateHUD();
    this.updateHighScoreDisplay();
  }

  applyTheme(theme) {
    this.selectedTheme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('arcade_whack_theme', theme);

    if (this.gameBrandTitle) {
      if (theme === 'cyberpunk') {
        this.gameBrandTitle.innerHTML = 'CYBER<span>WHACK</span>';
      } else if (theme === 'meadow') {
        this.gameBrandTitle.innerHTML = 'MEADOW<span>MOLE</span>';
      } else if (theme === 'graveyard') {
        this.gameBrandTitle.innerHTML = 'SPOOKY<span>WHACK</span>';
      }
    }

    document.querySelectorAll('.theme-card-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });

    if (this.cells && this.cells.length === 9) {
      this.cells.forEach((c, idx) => {
        c.wrapper.innerHTML = getCreatureSVG(this.selectedTheme, idx % 2);
      });
    }
  }

  initControlSelectors() {
    document.querySelectorAll('.theme-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.applyTheme(btn.dataset.theme);
      });
    });

    const updateLevelButtons = () => {
      document.querySelectorAll('[data-level]').forEach(btn => {
        const lvl = parseInt(btn.dataset.level, 10);
        btn.classList.toggle('active', lvl === this.startLevelChoice);
      });
      localStorage.setItem('arcade_whack_start_level', this.startLevelChoice.toString());
    };

    document.querySelectorAll('[data-level]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.startLevelChoice = parseInt(btn.dataset.level, 10);
        updateLevelButtons();
      });
    });
    updateLevelButtons();
  }

  updateSoundUI() {
    const isMuted = !this.audio.enabled;
    if (this.soundIcon) this.soundIcon.textContent = isMuted ? '🔇' : '🔊';
    if (this.soundLabel) this.soundLabel.textContent = isMuted ? 'SFX: OFF' : 'SFX: ON';
    if (this.soundToggleBtn) this.soundToggleBtn.classList.toggle('muted', isMuted);
    if (this.modalSoundText) this.modalSoundText.textContent = isMuted ? '🔇 Sound Effects: MUTED' : '🔊 Sound Effects: ENABLED';
  }

  updateHighScoreDisplay() {
    if (this.bestScoreDisplay) this.bestScoreDisplay.textContent = this.highScore;
    if (this.startBestScore) this.startBestScore.textContent = this.highScore;
  }

  initGrid() {
    this.gridElement.innerHTML = '';
    this.cells = [];

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('portal-cell');
      cell.dataset.index = i;

      const creatureWrapper = document.createElement('div');
      creatureWrapper.classList.add('alien-wrapper');
      creatureWrapper.innerHTML = getCreatureSVG(this.selectedTheme, i % 2);

      const baseRing = document.createElement('div');
      baseRing.classList.add('portal-emitter-base');

      cell.appendChild(creatureWrapper);
      cell.appendChild(baseRing);

      cell.addEventListener('pointerdown', (e) => this.handleCellClick(i, cell, e));

      this.gridElement.appendChild(cell);
      this.cells.push({
        element: cell,
        wrapper: creatureWrapper
      });
    }
  }

  attachEvents() {
    this.startBtn.addEventListener('click', () => {
      this.audio.init();
      this.startGame();
    });

    this.restartBtn.addEventListener('click', () => {
      this.audio.init();
      this.startGame();
    });

    this.changeSettingsBtn.addEventListener('click', () => {
      this.gameOverScreen.classList.remove('active');
      this.startScreen.classList.add('active');
    });

    this.hudSettingsBtn.addEventListener('click', () => {
      this.settingsScreen.classList.add('active');
    });

    this.closeSettingsBtn.addEventListener('click', () => {
      this.settingsScreen.classList.remove('active');
    });

    const handleSoundToggle = () => {
      this.audio.init();
      this.audio.toggleSound();
      this.updateSoundUI();
    };

    if (this.soundToggleBtn) this.soundToggleBtn.addEventListener('click', handleSoundToggle);
    if (this.modalSoundBtn) this.modalSoundBtn.addEventListener('click', handleSoundToggle);
  }

  getSpeedConfig() {
    let stayDuration = 2500;
    let spawnWaitMin = 350;
    let spawnWaitMax = 650;
    let speedLabel = 'EASY';
    let isFrenzy = false;

    if (this.currentLevel === 1) {
      stayDuration = 2500;
      spawnWaitMin = 350;
      spawnWaitMax = 650;
      speedLabel = 'SLOW';
    } else if (this.currentLevel === 2) {
      stayDuration = 1800;
      spawnWaitMin = 240;
      spawnWaitMax = 480;
      speedLabel = 'MEDIUM';
    } else if (this.currentLevel === 3) {
      stayDuration = 1200;
      spawnWaitMin = 160;
      spawnWaitMax = 360;
      speedLabel = 'FAST';
    } else if (this.currentLevel >= 4) {
      stayDuration = 720;
      spawnWaitMin = 100;
      spawnWaitMax = 250;
      speedLabel = 'FRENZY';
      isFrenzy = true;
    }

    return { stayDuration, spawnWaitMin, spawnWaitMax, speedLabel, isFrenzy };
  }

  checkLevelProgression() {
    let targetLevel = this.startLevelChoice;

    if (this.totalHits >= 21) {
      targetLevel = Math.max(targetLevel, 4);
    } else if (this.totalHits >= 13) {
      targetLevel = Math.max(targetLevel, 3);
    } else if (this.totalHits >= 6) {
      targetLevel = Math.max(targetLevel, 2);
    }

    if (targetLevel !== this.currentLevel) {
      const isLevelUp = targetLevel > this.currentLevel;
      this.currentLevel = targetLevel;
      if (isLevelUp) {
        this.triggerLevelUpEffect(this.currentLevel);
      }
      this.updateLevelAndSpeedDisplay();
    }
  }

  triggerLevelUpEffect(newLevel) {
    this.audio.playLevelUp();
    const levelNames = { 1: 'EASY', 2: 'MEDIUM', 3: 'HARD - DUAL SPAWN', 4: 'FRENZY INVASION' };
    if (this.levelUpSub) {
      this.levelUpSub.textContent = `ENTERING LEVEL ${newLevel} (${levelNames[newLevel]})`;
    }
    if (this.levelUpBanner) {
      this.levelUpBanner.classList.remove('hidden');
      this.levelUpBanner.style.animation = 'none';
      void this.levelUpBanner.offsetWidth;
      this.levelUpBanner.style.animation = 'level-up-pop 1.2s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards';
      setTimeout(() => {
        if (this.levelUpBanner) this.levelUpBanner.classList.add('hidden');
      }, 1250);
    }
  }

  updateLevelAndSpeedDisplay() {
    const config = this.getSpeedConfig();
    const levelNames = { 1: 'EASY', 2: 'MEDIUM', 3: 'HARD', 4: 'FRENZY' };

    if (this.levelDisplay) {
      this.levelDisplay.innerHTML = `LVL: <span class="pill-val">${this.currentLevel} - ${levelNames[this.currentLevel] || 'EASY'}</span>`;
    }

    if (this.speedStateDisplay) {
      this.speedStateDisplay.className = `badge-pill speed-pill ${config.isFrenzy ? 'state-frenzy' : ''}`;
      this.speedStateDisplay.innerHTML = `SPEED: <span class="pill-val">${config.speedLabel}</span>`;
    }
  }

  startGame() {
    this.score = 0;
    this.totalHits = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.timeLeft = this.totalTime;
    this.currentLevel = this.startLevelChoice;
    this.isPlaying = true;
    this.activeCellIndices.clear();
    this.goldenCellIndices.clear();
    this.warningCellIndices.clear();
    this.clearAllTimers();
    this.confetti.stop();

    this.audio.playStart();

    this.updateHUD();
    this.updateTimerBar();
    this.updateLevelAndSpeedDisplay();
    this.updateHighScoreDisplay();

    this.startScreen.classList.remove('active');
    this.gameOverScreen.classList.remove('active');
    this.settingsScreen.classList.remove('active');

    this.cells.forEach(c => {
      c.element.classList.remove('active', 'whacked', 'warning-charge', 'is-golden');
    });

    this.gameInterval = setInterval(() => {
      this.timeLeft--;
      this.updateHUD();
      this.updateTimerBar();

      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);

    // Instant initial creature spawn
    this.scheduleNextSpawn(0);
  }

  scheduleNextSpawn(delay = null) {
    if (!this.isPlaying) return;
    const config = this.getSpeedConfig();
    const wait = delay !== null ? delay : Math.floor(Math.random() * (config.spawnWaitMax - config.spawnWaitMin + 1)) + config.spawnWaitMin;

    const timer = setTimeout(() => {
      if (!this.isPlaying) return;
      this.spawnCreature();

      // Feature 3: Multi-spawning logic for Level 3 & 4 (Dual simultaneous targets)
      if (this.currentLevel >= 3 && this.activeCellIndices.size < 2 && Math.random() < 0.65) {
        setTimeout(() => {
          if (this.isPlaying) this.spawnCreature();
        }, 120);
      }
    }, wait);

    this.spawnTimers.set(`sched_${Date.now()}_${Math.random()}`, timer);
  }

  spawnCreature() {
    if (!this.isPlaying) return;

    const availableIndices = [];
    for (let i = 0; i < 9; i++) {
      if (!this.activeCellIndices.has(i) && !this.warningCellIndices.has(i)) {
        availableIndices.push(i);
      }
    }

    if (availableIndices.length === 0) {
      this.scheduleNextSpawn(180);
      return;
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const targetCell = this.cells[randomIndex];
    const config = this.getSpeedConfig();
    const isGolden = Math.random() < 0.14; // ~14% spawn chance for high-priority golden target

    // Feature 2: Pre-spawn Portal Warning Glow (180ms charging animation)
    this.warningCellIndices.add(randomIndex);
    targetCell.element.classList.add('warning-charge');

    const warningTimer = setTimeout(() => {
      this.warningCellIndices.delete(randomIndex);
      targetCell.element.classList.remove('warning-charge');

      if (!this.isPlaying) return;

      // Creature emergence
      this.activeCellIndices.add(randomIndex);
      if (isGolden) {
        this.goldenCellIndices.add(randomIndex);
        targetCell.element.classList.add('is-golden');
      }

      targetCell.wrapper.innerHTML = getCreatureSVG(this.selectedTheme, Math.floor(Math.random() * 2), isGolden);
      targetCell.element.classList.remove('whacked');
      targetCell.element.classList.add('active');

      const stayTimer = setTimeout(() => {
        if (this.activeCellIndices.has(randomIndex)) {
          this.activeCellIndices.delete(randomIndex);
          this.goldenCellIndices.delete(randomIndex);
          targetCell.element.classList.remove('active', 'is-golden');

          // Reset combo streak on creature escape
          if (this.combo > 0) {
            this.combo = 0;
            this.updateComboHUD();
          }

          this.scheduleNextSpawn();
        }
      }, config.stayDuration);

      this.spawnTimers.set(randomIndex, stayTimer);
    }, 180);

    this.spawnTimers.set(`warn_${randomIndex}`, warningTimer);
  }

  handleCellClick(index, cellElement, event) {
    if (!this.isPlaying) return;

    if (this.activeCellIndices.has(index) && !cellElement.classList.contains('whacked')) {
      const isGolden = this.goldenCellIndices.has(index);
      this.activeCellIndices.delete(index);
      this.goldenCellIndices.delete(index);

      if (this.spawnTimers.has(index)) {
        clearTimeout(this.spawnTimers.get(index));
        this.spawnTimers.delete(index);
      }

      this.totalHits += 1;
      this.combo += 1;
      if (this.combo > this.maxCombo) {
        this.maxCombo = this.combo;
      }

      // Feature 1: Dynamic Combo Multiplier (1x, 2x, 3x, 4x, 5x max) + Golden Bonus (3 base points)
      const basePoints = isGolden ? 3 : 1;
      const multiplier = Math.min(5, Math.floor((this.combo - 1) / 2) + 1);
      const pointsEarned = basePoints * multiplier;
      this.score += pointsEarned;

      this.checkLevelProgression();
      this.updateHUD();
      this.updateComboHUD();

      // Audio with pitch escalation & Squash Impact
      this.audio.playHit(this.combo, isGolden);
      this.triggerScreenShake();

      const clientX = event.clientX || (event.touches && event.touches[0]?.clientX) || (cellElement.getBoundingClientRect().left + cellElement.offsetWidth / 2);
      const clientY = event.clientY || (event.touches && event.touches[0]?.clientY) || (cellElement.getBoundingClientRect().top + cellElement.offsetHeight / 2);

      this.createParticleBurst(clientX, clientY, isGolden);
      this.showPopScore(clientX, clientY, `+${pointsEarned}`, multiplier > 1 || isGolden);

      cellElement.classList.remove('active', 'is-golden');
      cellElement.classList.add('whacked');

      setTimeout(() => {
        cellElement.classList.remove('whacked');
        this.scheduleNextSpawn(60);
      }, 260);
    } else if (!this.activeCellIndices.has(index)) {
      // Miss click resets combo
      if (this.combo > 0) {
        this.combo = 0;
        this.updateComboHUD();
      }
      this.audio.playMiss();
    }
  }

  updateComboHUD() {
    if (this.combo >= 2 && this.comboDisplay && this.comboVal) {
      const multiplier = Math.min(5, Math.floor((this.combo - 1) / 2) + 1);
      this.comboDisplay.classList.remove('hidden');
      this.comboVal.textContent = `x${multiplier} (${this.combo} STREAK)`;
    } else if (this.comboDisplay) {
      this.comboDisplay.classList.add('hidden');
    }
  }

  triggerScreenShake() {
    this.gameContainer.classList.remove('screen-shake');
    void this.gameContainer.offsetWidth;
    this.gameContainer.classList.add('screen-shake');
    setTimeout(() => {
      this.gameContainer.classList.remove('screen-shake');
    }, 240);
  }

  createParticleBurst(x, y, isGolden = false) {
    const particleCount = isGolden ? 20 : 14;
    const computedStyle = getComputedStyle(document.body);
    const p1 = computedStyle.getPropertyValue('--theme-primary').trim() || '#00f0ff';
    const p2 = computedStyle.getPropertyValue('--theme-secondary').trim() || '#ff007f';
    const p3 = computedStyle.getPropertyValue('--theme-accent').trim() || '#ffaa00';
    const colors = isGolden ? ['#ffd700', '#fff275', '#ffffff', '#ffaa00'] : [p1, p2, p3, '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle-burst-point');

      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
      const distance = Math.random() * 55 + 30;
      const tx = `${Math.cos(angle) * distance}px`;
      const ty = `${Math.sin(angle) * distance}px`;

      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.background = color;
      particle.style.boxShadow = `0 0 10px ${color}`;
      particle.style.setProperty('--tx', tx);
      particle.style.setProperty('--ty', ty);

      document.body.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 620);
    }
  }

  showPopScore(x, y, text, isCombo = false) {
    const pop = document.createElement('span');
    pop.className = `score-pop ${isCombo ? 'combo-bonus' : ''}`;
    pop.textContent = text + (isCombo ? '!' : '');
    pop.style.left = `${x}px`;
    pop.style.top = `${y}px`;
    document.body.appendChild(pop);

    setTimeout(() => {
      if (pop.parentNode) {
        pop.parentNode.removeChild(pop);
      }
    }, 800);
  }

  updateHUD() {
    this.scoreDisplay.textContent = this.score;
    this.timeDisplay.textContent = `${this.timeLeft}s`;
  }

  updateTimerBar() {
    const percentage = Math.max(0, (this.timeLeft / this.totalTime) * 100);
    this.timerBar.style.width = `${percentage}%`;

    this.timerBar.classList.remove('state-normal', 'state-warning', 'state-critical');
    if (this.timerBox) this.timerBox.classList.toggle('time-critical', this.timeLeft <= 5);

    if (this.timeLeft > 15) {
      this.timerBar.classList.add('state-normal');
    } else if (this.timeLeft > 7) {
      this.timerBar.classList.add('state-warning');
    } else {
      this.timerBar.classList.add('state-critical');
    }
  }

  clearAllTimers() {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
      this.gameInterval = null;
    }
    this.spawnTimers.forEach(timer => clearTimeout(timer));
    this.spawnTimers.clear();
  }

  endGame() {
    this.isPlaying = false;
    this.clearAllTimers();

    this.cells.forEach(c => {
      c.element.classList.remove('active', 'whacked', 'warning-charge', 'is-golden');
    });

    if (this.comboDisplay) this.comboDisplay.classList.add('hidden');

    const isNewHigh = this.score > this.highScore;
    if (isNewHigh) {
      this.highScore = this.score;
      localStorage.setItem('arcade_whack_high_score', this.highScore.toString());
      this.audio.playNewHighScore();
      this.newHighScoreBadge.classList.remove('hidden');
    } else {
      this.audio.playGameOver();
      this.newHighScoreBadge.classList.add('hidden');
    }

    this.updateHighScoreDisplay();

    const computedStyle = getComputedStyle(document.body);
    const p1 = computedStyle.getPropertyValue('--theme-primary').trim() || '#00f0ff';
    const p2 = computedStyle.getPropertyValue('--theme-secondary').trim() || '#ff007f';
    const p3 = computedStyle.getPropertyValue('--theme-accent').trim() || '#ffaa00';
    this.confetti.start([p1, p2, p3, '#ffffff']);

    this.animateScoreCount(this.score);
    this.finalHits.textContent = this.totalHits;
    if (this.finalHpm) {
      const hitsPerMin = Math.round((this.totalHits / (this.totalTime / 60)));
      this.finalHpm.textContent = hitsPerMin;
    }
    if (this.finalCombo) {
      const bestMult = Math.min(5, Math.floor((this.maxCombo - 1) / 2) + 1);
      this.finalCombo.textContent = `x${bestMult} (${this.maxCombo} max)`;
    }
    this.finalLevel.textContent = `LVL ${this.currentLevel}`;
    this.finalBestScore.textContent = this.highScore;

    this.gameOverScreen.classList.add('active');
  }

  animateScoreCount(target) {
    this.finalScore.textContent = '0';
    if (target === 0) return;

    let current = 0;
    const duration = 650;
    const increment = Math.max(1, Math.ceil(target / (duration / 25)));
    const stepTime = Math.floor(duration / (target / increment));

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(counter);
      }
      this.finalScore.textContent = current;
    }, stepTime);
  }
}

// Start Game on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  window.game = new WhackAMoleGame();
});
