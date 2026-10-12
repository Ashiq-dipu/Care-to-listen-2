import gsap from "gsap";
import { episodes } from "../data/episodes.js";
import { audioPlayer } from "./audioPlayer.js";

export function setupEpisodeModal() {
  const modal = document.getElementById("episode-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");
  const modalContent = document.getElementById("modal-body-container");

  if (!modal || !modalBackdrop || !modalClose || !modalContent) return;

  function closeModal() {
    gsap.to(modal, {
      opacity: 0,
      scale: 0.96,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        modal.classList.add("hidden");
        document.body.classList.remove("modal-open");
      }
    });
    gsap.to(modalBackdrop, { opacity: 0, duration: 0.25, onComplete: () => modalBackdrop.classList.add("hidden") });
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  window.openEpisodeDetail = function(episodeId) {
    const ep = episodes.find(e => e.id === episodeId) || episodes[0];
    if (!ep) return;

    modalContent.innerHTML = `
      <div class="ep-detail-header">
        <div class="ep-detail-badge-row">
          <span class="badge badge-accent">EPISODE #${ep.number}</span>
          <span class="badge badge-category">${ep.category}</span>
          <span class="ep-detail-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${ep.duration}
          </span>
          <span class="ep-detail-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${ep.date}
          </span>
        </div>

        <h2 class="ep-detail-title">${ep.title}</h2>

        <div class="ep-guest-profile-card">
          <img src="${ep.guest.avatar}" alt="${ep.guest.name}" class="ep-guest-avatar" />
          <div class="ep-guest-info">
            <h4 class="ep-guest-name">${ep.guest.name}</h4>
            <p class="ep-guest-role">${ep.guest.role}</p>
            <p class="ep-guest-bio">${ep.guest.bio}</p>
          </div>
        </div>

        <div class="ep-action-bar">
          <button id="modal-play-trigger" class="btn btn-primary btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>Listen to Episode (${ep.duration})</span>
          </button>
          
          <button id="modal-copy-link" class="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            <span>Share</span>
          </button>

          <a href="${ep.spotifyUrl}" target="_blank" rel="noopener" class="btn btn-ghost" title="Open in Spotify">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.625.625 0 0 1-.28-1.218c3.81-.872 7.076-.503 9.715 1.118a.623.623 0 0 1 .207.857zm1.224-2.721a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 1 1-.453-1.493c3.632-1.102 8.147-.568 11.233 1.33a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.89 9.38 8.71 6.302 9.645a.936.936 0 1 1-.543-1.791c3.528-1.071 9.409-.861 13.193 1.386a.936.936 0 0 1-1.037 1.628z"/></svg>
            <span>Spotify</span>
          </a>
        </div>
      </div>

      <div class="ep-detail-tabs">
        <button class="modal-tab-btn active" data-tab="overview">Show Notes & Takeaways</button>
        <button class="modal-tab-btn" data-tab="transcript">Interactive Transcript</button>
      </div>

      <div id="tab-overview" class="modal-tab-pane active">
        <div class="ep-section-block">
          <h3 class="ep-section-heading">Episode Summary</h3>
          <p class="ep-summary-text">${ep.summary}</p>
        </div>

        <div class="ep-section-block">
          <h3 class="ep-section-heading">Key Topics Covered</h3>
          <ul class="ep-takeaways-list">
            ${ep.takeaways.map(item => `
              <li class="ep-takeaway-item">
                <span class="takeaway-bullet">✦</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="ep-section-block">
          <h3 class="ep-section-heading">Tags & Themes</h3>
          <div class="ep-tags-cloud">
            ${ep.tags.map(tag => `<span class="tag-pill">#${tag}</span>`).join('')}
          </div>
        </div>
      </div>

      <div id="tab-transcript" class="modal-tab-pane">
        <div class="transcript-intro">
          <p class="transcript-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            Click any timestamp to jump directly to that point in the podcast audio.
          </p>
        </div>
        <div class="transcript-list">
          ${ep.transcript.map(line => {
            const [min, sec] = line.time.split(':').map(Number);
            const totalSec = (min * 60) + (sec || 0);
            return `
              <div class="transcript-item" data-time="${totalSec}">
                <button class="transcript-time-btn" data-seek="${totalSec}">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  ${line.time}
                </button>
                <div class="transcript-dialogue">
                  <span class="transcript-speaker">${line.speaker}</span>
                  <p class="transcript-text">${line.text}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Hook tab switches
    const tabBtns = modalContent.querySelectorAll(".modal-tab-btn");
    const tabPanes = modalContent.querySelectorAll(".modal-tab-pane");

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        tabPanes.forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const target = modalContent.querySelector(`#tab-${btn.dataset.tab}`);
        if (target) target.classList.add("active");
      });
    });

    // Hook listen button
    const listenBtn = modalContent.querySelector("#modal-play-trigger");
    listenBtn?.addEventListener("click", () => {
      audioPlayer.playEpisode(ep);
    });

    // Hook share link button
    const copyBtn = modalContent.querySelector("#modal-copy-link");
    copyBtn?.addEventListener("click", () => {
      navigator.clipboard?.writeText(window.location.origin + "#episodes?id=" + ep.id);
      const span = copyBtn.querySelector("span");
      if (span) {
        const orig = span.textContent;
        span.textContent = "Copied to Clipboard!";
        setTimeout(() => span.textContent = orig, 2500);
      }
    });

    // Hook timestamp clicks
    const timeBtns = modalContent.querySelectorAll("[data-seek]");
    timeBtns.forEach(tBtn => {
      tBtn.addEventListener("click", () => {
        const sec = parseFloat(tBtn.dataset.seek);
        if (audioPlayer.currentEpisode?.id !== ep.id) {
          audioPlayer.playEpisode(ep);
        }
        audioPlayer.seek(sec);
        if (!audioPlayer.isPlaying) {
          audioPlayer.togglePlay();
        }
      });
    });

    // Show modal with GSAP
    modalBackdrop.classList.remove("hidden");
    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");

    gsap.set(modalBackdrop, { opacity: 0 });
    gsap.to(modalBackdrop, { opacity: 1, duration: 0.3 });

    gsap.set(modal, { opacity: 0, scale: 0.95, y: 20 });
    gsap.to(modal, { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power3.out" });
  };
}
