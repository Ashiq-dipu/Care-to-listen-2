import gsap from "gsap";
import { episodes, categories } from "../data/episodes.js";
import { audioPlayer } from "../components/audioPlayer.js";

export function renderEpisodesView(container) {
  let activeCategory = "All";
  let searchQuery = "";
  let sortBy = "newest";
  let isTableView = true;
  let hoverPreviewCtx = null;

  function initEpisodeHoverPreview(containerEl) {
    if (hoverPreviewCtx) {
      hoverPreviewCtx.revert();
      hoverPreviewCtx = null;
    }

    const previewWrap = containerEl.querySelector("#ep-hover-preview");
    const tableBody = containerEl.querySelector(".ep-table-body");
    const rows = containerEl.querySelectorAll(".ep-table-row");

    if (!previewWrap || !tableBody || rows.length === 0) return;

    hoverPreviewCtx = gsap.context(() => {
      const previewImg = previewWrap.querySelector("#ep-preview-img");
      const previewBadge = previewWrap.querySelector("#ep-preview-badge");
      const previewGuest = previewWrap.querySelector("#ep-preview-guest");
      const previewRole = previewWrap.querySelector("#ep-preview-role");
      const previewCard = previewWrap.querySelector(".ep-hover-preview-card");

      const mm = gsap.matchMedia();

      mm.add("(hover: hover) and (pointer: fine)", () => {
        // Hardware-accelerated quickTo setters for 60fps cursor following
        const xTo = gsap.quickTo(previewWrap, "x", { duration: 0.38, ease: "power3.out" });
        const yTo = gsap.quickTo(previewWrap, "y", { duration: 0.38, ease: "power3.out" });
        const rotTo = gsap.quickTo(previewWrap, "rotation", { duration: 0.5, ease: "power3.out" });

        let isVisible = false;
        let lastX = 0;
        let rotDecayTimer = null;
        const cardWidth = 260;
        const cardHeight = 235;
        const bottomSafeMargin = 88; // Safe clearance above persistent audio player bar

        gsap.set(previewWrap, {
          scale: 0.85,
          opacity: 0,
          rotation: 0,
          transformOrigin: "center center",
          visibility: "hidden"
        });

        const computeTargetCoords = (clientX, clientY) => {
          let targetX = clientX + 26;
          if (targetX + cardWidth > window.innerWidth - 20) {
            targetX = clientX - cardWidth - 26;
          }

          let targetY = clientY - Math.round(cardHeight / 2);
          const maxY = window.innerHeight - cardHeight - bottomSafeMargin;
          if (targetY > maxY) targetY = maxY;
          if (targetY < 60) targetY = 60;

          return { targetX, targetY };
        };

        const updatePosition = (e) => {
          // Dynamic tilt based on horizontal mouse velocity
          const deltaX = e.clientX - lastX;
          lastX = e.clientX;
          const targetRot = Math.max(-10, Math.min(10, deltaX * 0.45));
          rotTo(targetRot);

          clearTimeout(rotDecayTimer);
          rotDecayTimer = setTimeout(() => {
            rotTo(0);
          }, 110);

          const { targetX, targetY } = computeTargetCoords(e.clientX, e.clientY);
          xTo(targetX);
          yTo(targetY);
        };

        rows.forEach(row => {
          row.addEventListener("mouseenter", (e) => {
            const imgSrc = row.dataset.previewImg;
            const num = row.dataset.previewNum;
            const topic = row.dataset.previewTopic;
            const guest = row.dataset.previewGuest;
            const role = row.dataset.previewRole;

            if (previewImg && imgSrc) {
              if (previewImg.getAttribute("src") !== imgSrc) {
                previewImg.src = imgSrc;
              }
            }
            if (previewBadge) previewBadge.textContent = `EP // ${num} • ${topic}`;
            if (previewGuest) previewGuest.textContent = guest;
            if (previewRole) previewRole.textContent = role;

            if (!isVisible) {
              lastX = e.clientX;
              const { targetX, targetY } = computeTargetCoords(e.clientX, e.clientY);

              gsap.set(previewWrap, { x: targetX, y: targetY, rotation: 0, visibility: "visible" });

              gsap.to(previewWrap, {
                scale: 1,
                opacity: 1,
                duration: 0.32,
                ease: "power2.out",
                overwrite: "auto"
              });

              if (previewImg) {
                gsap.fromTo(
                  previewImg,
                  { scale: 1.15, filter: "grayscale(25%)" },
                  { scale: 1, filter: "grayscale(0%)", duration: 0.42, ease: "power2.out", overwrite: "auto" }
                );
              }
              isVisible = true;
            } else {
              // Smooth transition between rows while preview is active
              if (previewImg) {
                gsap.fromTo(
                  previewImg,
                  { scale: 1.08, opacity: 0.65 },
                  { scale: 1, opacity: 1, duration: 0.26, ease: "power2.out", overwrite: "auto" }
                );
              }
              if (previewCard) {
                gsap.fromTo(
                  previewCard,
                  { y: -3 },
                  { y: 0, duration: 0.22, ease: "power2.out", overwrite: "auto" }
                );
              }
            }

            updatePosition(e);
          });

          row.addEventListener("mousemove", (e) => {
            updatePosition(e);
          });
        });

        const hidePreview = () => {
          if (!isVisible) return;
          isVisible = false;
          clearTimeout(rotDecayTimer);
          gsap.to(previewWrap, {
            scale: 0.85,
            opacity: 0,
            rotation: 0,
            duration: 0.22,
            ease: "power2.in",
            overwrite: "auto",
            onComplete: () => {
              gsap.set(previewWrap, { visibility: "hidden" });
            }
          });
        };

        tableBody.addEventListener("mouseleave", hidePreview);
        window.addEventListener("scroll", hidePreview, { passive: true });
      });
    }, containerEl);
  }

  function renderList() {
    let filtered = episodes.filter(ep => {
      const matchCat = activeCategory === "All" || ep.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q ||
        ep.title.toLowerCase().includes(q) ||
        ep.guest.name.toLowerCase().includes(q) ||
        ep.summary.toLowerCase().includes(q) ||
        ep.tags.some(t => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    if (sortBy === "newest") {
      filtered.sort((a, b) => parseInt(b.number, 10) - parseInt(a.number, 10));
    } else if (sortBy === "guest") {
      filtered.sort((a, b) => a.guest.name.localeCompare(b.guest.name));
    }

    const containerEl = container.querySelector("#episodes-output-container");
    if (!containerEl) return;

    if (filtered.length === 0) {
      if (hoverPreviewCtx) {
        hoverPreviewCtx.revert();
        hoverPreviewCtx = null;
      }
      containerEl.innerHTML = `
        <div class="empty-state-swiss">
          <div class="empty-tag">00 // NO RESULTS</div>
          <h3>NO EPISODES FOUND MATCHING "${searchQuery.toUpperCase()}"</h3>
          <p>Try searching another keyword or reset the category filter.</p>
        </div>
      `;
      return;
    }

    if (isTableView) {
      containerEl.innerHTML = `
        <div class="episodes-swiss-table">
          <div class="ep-table-header">
            <div class="ep-cell ep-cell-num">INDEX</div>
            <div class="ep-cell ep-cell-title">EPISODE / GUEST</div>
            <div class="ep-cell ep-cell-category">TOPIC</div>
            <div class="ep-cell ep-cell-duration">LENGTH</div>
            <div class="ep-cell ep-cell-date">RELEASED</div>
            <div class="ep-cell ep-cell-actions">ACTION</div>
          </div>
          <div class="ep-table-body">
            ${filtered.map(ep => `
              <div class="ep-table-row"
                   data-epid="${ep.id}"
                   data-preview-img="${ep.guest?.avatar || '/assets/hero_meaningful_listening.jpg'}"
                   data-preview-num="${ep.number}"
                   data-preview-topic="${ep.category.toUpperCase()}"
                   data-preview-guest="${ep.guest?.name || ''}"
                   data-preview-role="${ep.guest?.role || ''}"
              >
                <div class="ep-cell ep-cell-num">EP // ${ep.number}</div>
                <div class="ep-cell ep-cell-title">
                  <strong>${ep.title}</strong>
                  <span class="ep-guest-sub">${ep.guest.name} — ${ep.guest.role}</span>
                </div>
                <div class="ep-cell ep-cell-category"><span class="swiss-pill">${ep.category.toUpperCase()}</span></div>
                <div class="ep-cell ep-cell-duration">${ep.duration}</div>
                <div class="ep-cell ep-cell-date">${ep.date}</div>
                <div class="ep-cell ep-cell-actions">
                  <button class="btn-swiss-play" data-play-ep="${ep.id}">▶ PLAY</button>
                  <button class="btn-swiss-notes" data-notes-ep="${ep.id}">NOTES ↗</button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- GSAP FLOATING HOVER PREVIEW CARD -->
          <div class="ep-hover-preview-wrap" id="ep-hover-preview" aria-hidden="true">
            <div class="ep-hover-preview-card">
              <div class="ep-hover-preview-top">
                <span class="ep-hover-badge" id="ep-preview-badge">EP // 108 • MENTAL HEALTH</span>
                <span class="ep-hover-live"><span class="rec-blink-dot"></span> LIVE ARCHIVE</span>
              </div>
              <div class="ep-hover-media">
                <img id="ep-preview-img" src="" alt="Episode feature" class="ep-hover-img" />
                <div class="ep-hover-overlay-tag">ARCHIVE 2026</div>
              </div>
              <div class="ep-hover-preview-info">
                <div class="ep-hover-guest-name" id="ep-preview-guest">Dr. Elena Rostova</div>
                <div class="ep-hover-guest-role" id="ep-preview-role">Somatic Psychologist & Author</div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Initialize the GSAP cursor-tracking preview effect
      initEpisodeHoverPreview(containerEl);
    } else {
      if (hoverPreviewCtx) {
        hoverPreviewCtx.revert();
        hoverPreviewCtx = null;
      }
      containerEl.innerHTML = `
        <div class="episodes-cards-grid-swiss">
          ${filtered.map(ep => `
            <div class="episode-card-swiss" data-epid="${ep.id}">
              <div class="ep-card-top-bar">
                <span class="ep-num-pill">EP // ${ep.number}</span>
                <span class="ep-cat-pill">${ep.category.toUpperCase()}</span>
              </div>
              <div class="ep-card-media-box">
                <img src="${ep.guest.avatar}" alt="${ep.guest.name}" class="ep-card-photo" />
              </div>
              <div class="ep-card-content-box">
                <span class="ep-dur-date">${ep.duration} • ${ep.date.toUpperCase()}</span>
                <h3 class="ep-card-headline">${ep.title}</h3>
                <p class="ep-card-guest-name">FEAT. <strong>${ep.guest.name.toUpperCase()}</strong></p>
                <p class="ep-card-excerpt">${ep.summary}</p>
                <div class="ep-card-btns">
                  <button class="btn-swiss-play" data-play-ep="${ep.id}">▶ PLAY</button>
                  <button class="btn-swiss-notes" data-notes-ep="${ep.id}">NOTES & TRANSCRIPT ↗</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    containerEl.querySelectorAll("[data-play-ep]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const ep = episodes.find(e => e.id === btn.dataset.playEp);
        if (ep) audioPlayer.playEpisode(ep);
      });
    });

    containerEl.querySelectorAll("[data-notes-ep]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (window.openEpisodeDetail) window.openEpisodeDetail(btn.dataset.notesEp);
      });
    });
  }

  container.innerHTML = `
    <section class="swiss-section" data-section="EPISODES">
      <div class="swiss-gutter">
        <span class="gutter-num">005</span>
        <span class="gutter-label">ARCHIVE</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">005 // FULL EPISODES ARCHIVE</span>
        <h1 class="view-giant-headline">ALL EPISODES.</h1>
        <p class="view-lead-copy">Unfiltered audio dialogues exploring trauma, somatic healing, career transitions, and the human condition.</p>

        <!-- Swiss Filter & Search Toolbar -->
        <div class="episodes-swiss-toolbar">
          <div class="search-cell">
            <span class="search-icon">🔍</span>
            <input type="text" id="ep-search" placeholder="FILTER BY GUEST, KEYWORD OR THEME..." class="swiss-search-input" />
          </div>

          <div class="toolbar-controls-row">
            <div class="sort-select-box">
              <label for="ep-sort" class="sort-lbl">SORT:</label>
              <select id="ep-sort" class="swiss-select">
                <option value="newest">NEWEST FIRST</option>
                <option value="guest">GUEST (A-Z)</option>
              </select>
            </div>

            <div class="view-toggle-btns">
              <button id="toggle-table-btn" class="toggle-mode-btn active" title="Table View">LIST</button>
              <button id="toggle-grid-btn" class="toggle-mode-btn" title="Grid View">CARDS</button>
            </div>
          </div>

          <div class="filter-pills-row">
            ${categories.map(c => `
              <button class="filter-pill-btn ${c === 'All' ? 'active' : ''}" data-cat="${c}">${c.toUpperCase()}</button>
            `).join('')}
          </div>
        </div>

        <div id="episodes-output-container"></div>
      </div>
    </section>
  `;

  const searchInput = container.querySelector("#ep-search");
  searchInput?.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderList();
  });

  const sortSelect = container.querySelector("#ep-sort");
  sortSelect?.addEventListener("change", (e) => {
    sortBy = e.target.value;
    renderList();
  });

  function attachFilterPills() {
    container.querySelectorAll(".filter-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".filter-pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.cat;
        renderList();
      });
    });
  }
  attachFilterPills();

  const tableBtn = container.querySelector("#toggle-table-btn");
  const gridBtn = container.querySelector("#toggle-grid-btn");

  tableBtn?.addEventListener("click", () => {
    isTableView = true;
    tableBtn.classList.add("active");
    gridBtn.classList.remove("active");
    renderList();
  });

  gridBtn?.addEventListener("click", () => {
    isTableView = false;
    gridBtn.classList.add("active");
    tableBtn.classList.remove("active");
    renderList();
  });

  // Re-render when dashboard adds or modifies episodes
  const onEpisodesUpdated = () => {
    const pillsRow = container.querySelector(".filter-pills-row");
    if (pillsRow) {
      pillsRow.innerHTML = categories.map(c => `
        <button class="filter-pill-btn ${activeCategory === c ? 'active' : ''}" data-cat="${c}">${c.toUpperCase()}</button>
      `).join('');
      attachFilterPills();
    }
    renderList();
  };
  window.addEventListener("care2listen:episodes-updated", onEpisodesUpdated);

  renderList();
}
