import { videoData } from "../data/videos.js";

export function renderVideosView(container) {
  let activeTab = "All";

  function renderGrid() {
    const list = videoData.filter(v => activeTab === "All" || v.category === activeTab);
    const gridEl = container.querySelector("#videos-grid-target");
    if (!gridEl) return;

    gridEl.innerHTML = list.map(v => `
      <div class="video-swiss-card">
        <div class="video-thumb-container">
          <img src="${v.thumbnail}" alt="${v.title}" class="v-thumb" />
          <span class="v-duration">${v.duration}</span>
          <span class="v-cat-badge">${v.category.toUpperCase()}</span>
          <button class="v-play-center" data-embed="${v.youtubeId}">▶</button>
        </div>
        <div class="video-info-box">
          <span class="v-views">${v.views} • ${v.date.toUpperCase()}</span>
          <h3 class="v-title">${v.title}</h3>
          <p class="v-description">${v.description}</p>
        </div>
      </div>
    `).join('');

    gridEl.querySelectorAll("[data-embed]").forEach(btn => {
      btn.addEventListener("click", () => {
        openVideoModal(btn.dataset.embed);
      });
    });
  }

  function openVideoModal(ytId) {
    let videoModal = document.getElementById("video-embed-modal");
    if (!videoModal) {
      videoModal = document.createElement("div");
      videoModal.id = "video-embed-modal";
      videoModal.className = "modal-wrapper";
      document.body.appendChild(videoModal);
    }

    videoModal.innerHTML = `
      <div class="modal-backdrop" id="video-backdrop"></div>
      <div class="modal-card video-modal-card">
        <button class="modal-close-btn" id="close-video-modal">&times;</button>
        <div class="video-frame-wrap">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0" 
            title="Care 2 Listen Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    `;

    videoModal.classList.remove("hidden");
    const closeBtn = videoModal.querySelector("#close-video-modal");
    const backdrop = videoModal.querySelector("#video-backdrop");

    const closeHandler = () => {
      videoModal.innerHTML = "";
      videoModal.classList.add("hidden");
    };

    closeBtn?.addEventListener("click", closeHandler);
    backdrop?.addEventListener("click", closeHandler);
  }

  container.innerHTML = `
    <section class="swiss-section" data-section="VIDEOS">
      <div class="swiss-gutter">
        <span class="gutter-num">006</span>
        <span class="gutter-label">STUDIO FEED</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">006 // 4K VIDEO CHANNEL</span>
        <h1 class="view-giant-headline">WATCH CARE 2 LISTEN.</h1>
        <p class="view-lead-copy">Broadcast-grade 4K multicam video feeds, intimate soundstage interviews, and behind-the-scenes diaries.</p>

        <!-- Studio Statistics Ribbon -->
        <div class="video-stats-ribbon">
          <div class="v-stat-cell">
            <span class="v-stat-val">52.4K</span>
            <span class="v-stat-lbl">SUBSCRIBERS</span>
          </div>
          <div class="v-stat-cell">
            <span class="v-stat-val">1.4M+</span>
            <span class="v-stat-lbl">LIFETIME VIEWS</span>
          </div>
          <div class="v-stat-cell">
            <span class="v-stat-val">4K UHD</span>
            <span class="v-stat-lbl">PRODUCTION</span>
          </div>
          <div class="v-stat-action-cell">
            <a href="https://youtube.com" target="_blank" rel="noopener" class="btn-subscribe-yt">
              SUBSCRIBE ON YOUTUBE ↗
            </a>
          </div>
        </div>

        <!-- Video Category Pills -->
        <div class="filter-pills-row" style="margin: 24px 0;">
          ${["All", "Full Episodes", "Clips & Highlights", "Behind The Scenes"].map(t => `
            <button class="filter-pill-btn ${t === 'All' ? 'active' : ''}" data-vtab="${t}">${t.toUpperCase()}</button>
          `).join('')}
        </div>

        <div id="videos-grid-target" class="videos-swiss-grid"></div>
      </div>
    </section>
  `;

  container.querySelectorAll("[data-vtab]").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll("[data-vtab]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTab = btn.dataset.vtab;
      renderGrid();
    });
  });

  renderGrid();
}
