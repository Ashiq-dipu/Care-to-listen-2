import gsap from "gsap";

class AudioPlayerEngine {
  constructor() {
    this.currentEpisode = null;
    this.isPlaying = false;
    this.currentTime = 0;
    this.totalDuration = 3240; // ~54 minutes in seconds
    this.volume = 0.85;
    this.playbackRate = 1.0;
    this.playbackRates = [1.0, 1.25, 1.5, 2.0];
    this.currentRateIndex = 0;
    this.listeners = new Set();
    this.timerId = null;

    // Web Audio Synthesizer for rich, soothing ambient sound when playing
    this.audioCtx = null;
    this.ambientNodes = [];
    this.gainNode = null;
    this.initAudioContext();
  }

  initAudioContext() {
    // Lazy initialized on user click
  }

  startWebAudio() {
    try {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }

      this.stopWebAudio();

      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.04 * this.volume, this.audioCtx.currentTime + 1.2);
      this.gainNode.connect(this.audioCtx.destination);

      // Create warm, grounding dual-frequency ambient hum (432Hz harmonic tone & soft vocal chord)
      const freqs = [108, 216, 324, 432];
      this.ambientNodes = freqs.map((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const panner = this.audioCtx.createStereoPanner ? this.audioCtx.createStereoPanner() : null;
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        if (panner) {
          panner.pan.setValueAtTime((idx - 1.5) * 0.4, this.audioCtx.currentTime);
          osc.connect(panner);
          panner.connect(this.gainNode);
        } else {
          osc.connect(this.gainNode);
        }
        osc.start();
        return osc;
      });
    } catch (e) {
      console.warn("AudioContext init handled:", e);
    }
  }

  stopWebAudio() {
    if (this.gainNode && this.audioCtx) {
      try {
        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioCtx.currentTime);
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.3);
      } catch (err) {}
    }
    setTimeout(() => {
      this.ambientNodes.forEach(node => {
        try { node.stop(); node.disconnect(); } catch (e) {}
      });
      this.ambientNodes = [];
    }, 350);
  }

  playEpisode(episode) {
    if (!episode) return;
    const isNew = !this.currentEpisode || this.currentEpisode.id !== episode.id;
    this.currentEpisode = episode;
    if (isNew) {
      this.currentTime = 0;
      // Parse duration if available
      const minMatch = episode.duration ? episode.duration.match(/\d+/) : null;
      this.totalDuration = minMatch ? parseInt(minMatch[0], 10) * 60 : 3240;
    }
    this.isPlaying = true;
    this.startWebAudio();
    this.startTimer();
    this.notify();
  }

  togglePlay() {
    if (!this.currentEpisode) return;
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.startWebAudio();
      this.startTimer();
    } else {
      this.stopWebAudio();
      this.stopTimer();
    }
    this.notify();
  }

  seek(seconds) {
    this.currentTime = Math.max(0, Math.min(seconds, this.totalDuration));
    this.notify();
  }

  skip(delta) {
    this.seek(this.currentTime + delta);
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && this.audioCtx && this.isPlaying) {
      this.gainNode.gain.setValueAtTime(0.04 * this.volume, this.audioCtx.currentTime);
    }
    this.notify();
  }

  cycleRate() {
    this.currentRateIndex = (this.currentRateIndex + 1) % this.playbackRates.length;
    this.playbackRate = this.playbackRates[this.currentRateIndex];
    this.notify();
  }

  startTimer() {
    this.stopTimer();
    this.timerId = setInterval(() => {
      if (this.isPlaying) {
        this.currentTime += 1 * this.playbackRate;
        if (this.currentTime >= this.totalDuration) {
          this.currentTime = this.totalDuration;
          this.isPlaying = false;
          this.stopWebAudio();
          this.stopTimer();
        }
        this.notify();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    callback(this.getState());
    return () => this.listeners.delete(callback);
  }

  notify() {
    const state = this.getState();
    this.listeners.forEach(fn => fn(state));
  }

  getState() {
    return {
      episode: this.currentEpisode,
      isPlaying: this.isPlaying,
      currentTime: this.currentTime,
      totalDuration: this.totalDuration,
      progress: this.totalDuration > 0 ? (this.currentTime / this.totalDuration) * 100 : 0,
      formattedCurrentTime: this.formatTime(this.currentTime),
      formattedTotalDuration: this.formatTime(this.totalDuration),
      volume: this.volume,
      playbackRate: this.playbackRate
    };
  }

  formatTime(totalSec) {
    const minutes = Math.floor(totalSec / 60);
    const seconds = Math.floor(totalSec % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

export const audioPlayer = new AudioPlayerEngine();

export function setupAudioPlayerUI() {
  const container = document.getElementById("global-player");
  if (!container) return;

  const playBtn = container.querySelector("#player-toggle");
  const playIcon = container.querySelector("#player-play-icon");
  const pauseIcon = container.querySelector("#player-pause-icon");
  const progressBar = container.querySelector("#player-progress");
  const progressFill = container.querySelector("#player-progress-fill");
  const timeCurrentEl = container.querySelector("#player-current-time");
  const timeTotalEl = container.querySelector("#player-total-time");
  const titleEl = container.querySelector("#player-title");
  const guestEl = container.querySelector("#player-guest");
  const coverEl = container.querySelector("#player-cover");
  const skipBackBtn = container.querySelector("#player-skip-back");
  const skipFwdBtn = container.querySelector("#player-skip-fwd");
  const speedBtn = container.querySelector("#player-speed-btn");
  const volumeSlider = container.querySelector("#player-volume");
  const viewNotesBtn = container.querySelector("#player-view-notes");
  const visualizerBars = container.querySelectorAll(".player-vis-bar");

  // Animate Equalizer Bars using GSAP
  let visTimeline = null;
  function updateVisualizer(isPlaying) {
    if (isPlaying) {
      if (!visTimeline) {
        visTimeline = gsap.timeline({ repeat: -1, yoyo: true });
        visualizerBars.forEach((bar, i) => {
          gsap.to(bar, {
            scaleY: () => 0.2 + Math.random() * 0.8,
            duration: 0.2 + (i % 3) * 0.1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            transformOrigin: "bottom center"
          });
        });
      }
    } else {
      visualizerBars.forEach(bar => {
        gsap.killTweensOf(bar);
        gsap.to(bar, { scaleY: 0.15, duration: 0.3, ease: "power2.out", transformOrigin: "bottom center" });
      });
      visTimeline = null;
    }
  }

  // Subscribe to audio state changes
  audioPlayer.subscribe(state => {
    if (!state.episode) {
      container.classList.add("hidden");
      return;
    }
    container.classList.remove("hidden");

    if (titleEl) titleEl.textContent = state.episode.title || "Episode";
    const guestObj = state.episode.guest && typeof state.episode.guest === "object" ? state.episode.guest : null;
    const gName = (guestObj && guestObj.name) || state.episode.guestName || "Guest Contributor";
    const epNum = state.episode.number ? `Ep #${state.episode.number}` : "";
    if (guestEl) guestEl.textContent = epNum ? `${gName} • ${epNum}` : gName;
    const avatarUrl = (guestObj && guestObj.avatar) || state.episode.avatar || "/assets/hero_meaningful_listening.jpg";
    if (coverEl) {
      coverEl.src = avatarUrl;
      coverEl.onerror = () => { coverEl.src = "/assets/hero_meaningful_listening.jpg"; };
    }

    if (progressFill) progressFill.style.width = `${state.progress}%`;
    if (timeCurrentEl) timeCurrentEl.textContent = state.formattedCurrentTime;
    if (timeTotalEl) timeTotalEl.textContent = state.formattedTotalDuration;

    if (speedBtn) speedBtn.textContent = `${state.playbackRate}x`;

    if (state.isPlaying) {
      playIcon?.classList.add("hidden");
      pauseIcon?.classList.remove("hidden");
      container.classList.add("is-playing");
      updateVisualizer(true);
    } else {
      playIcon?.classList.remove("hidden");
      pauseIcon?.classList.add("hidden");
      container.classList.remove("is-playing");
      updateVisualizer(false);
    }
  });

  // UI Event Handlers
  playBtn?.addEventListener("click", () => {
    audioPlayer.togglePlay();
  });

  skipBackBtn?.addEventListener("click", () => {
    audioPlayer.skip(-15);
  });

  skipFwdBtn?.addEventListener("click", () => {
    audioPlayer.skip(30);
  });

  speedBtn?.addEventListener("click", () => {
    audioPlayer.cycleRate();
  });

  if (progressBar) {
    const handleSeek = (e) => {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      const targetSec = ratio * audioPlayer.totalDuration;
      audioPlayer.seek(targetSec);
    };

    progressBar.addEventListener("click", handleSeek);
  }

  volumeSlider?.addEventListener("input", (e) => {
    audioPlayer.setVolume(parseFloat(e.target.value));
  });

  viewNotesBtn?.addEventListener("click", () => {
    if (audioPlayer.currentEpisode && window.openEpisodeDetail) {
      window.openEpisodeDetail(audioPlayer.currentEpisode.id);
    }
  });
}
