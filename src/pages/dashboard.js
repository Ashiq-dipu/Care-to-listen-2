import {
  episodes,
  categories,
  saveEpisode,
  deleteEpisode,
  resetToDefaultEpisodes,
  importEpisodesJSON,
  exportEpisodesJSON
} from "../data/episodes.js";
import {
  submissions,
  fetchSubmissions,
  setSubmissionStatus,
  deleteSubmission
} from "../data/submissions.js";
import { audioPlayer } from "../components/audioPlayer.js";
import { getFooterHTML, initFooterEvents } from "../components/footer.js";

// Curated avatar presets for quick 1-click guest image assignment
const AVATAR_PRESETS = [
  {
    name: "Elena (Somatic / Clinical)",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Julian (Founder / Tech)",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Amara (Advocate / Poet)",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Kiran & David (Family / Mediation)",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Hannah (Filmmaker / Caregiver)",
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Tariq (Counselor / Recovery)",
    url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Marcus (Investigative Host)",
    url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Maya (Somatic Co-Host)",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  }
];

export function renderDashboardView(container) {
  let searchQuery = "";
  let selectedCategory = "All";
  let editingEpisodeId = null;
  let activeTab = "episodes"; // "episodes" | "submissions"
  let subFilter = "all"; // "all" | "pending" | "approved" | "declined"
  let currentOriginSubmissionId = null;

  function calculateStats() {
    const totalCount = episodes.length;
    let totalMinutes = 0;
    episodes.forEach(ep => {
      const match = ep.duration?.match(/(\d+)/);
      if (match) totalMinutes += parseInt(match[1], 10);
    });
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const durationLabel = `${hours}h ${mins}m`;
    const uniqueTopics = new Set(episodes.map(e => e.category)).size;
    const featuredCount = episodes.filter(e => e.featured).length;

    return { totalCount, durationLabel, uniqueTopics, featuredCount };
  }

  function showToast(message, isError = false) {
    let toast = document.getElementById("cms-toast-notification");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "cms-toast-notification";
      toast.className = "cms-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = `cms-toast show ${isError ? "error" : "success"}`;
    setTimeout(() => {
      toast.className = "cms-toast";
    }, 3500);
  }

  const AUTH_KEY = "care2listen_admin_auth";

  function isAuthorized() {
    return sessionStorage.getItem(AUTH_KEY) === "true";
  }

  function renderGate() {
    container.innerHTML = `
      <section class="swiss-section admin-gate-section" data-section="AUTH">
        <div class="swiss-gutter">
          <span class="gutter-num">000</span>
          <span class="gutter-label">SECURITY</span>
        </div>

        <div class="admin-gate-wrapper">
          <div class="admin-gate-grid">
            <!-- CARD 1: ADMINISTRATOR LOGIN CARD -->
            <div class="admin-gate-card">
              <div class="admin-gate-top">
                <span class="admin-security-tag"><span class="rec-blink-dot" style="background: var(--color-vermilion);"></span> RESTRICTED CONSOLE // ADMIN ONLY</span>
                <span class="admin-sys-time">SYS/AUTH 2026</span>
              </div>

              <div class="admin-gate-headline-area">
                <h1 class="admin-gate-title">STUDIO ARCHIVE GATE.</h1>
                <p class="admin-gate-desc">
                  Administrative authorization is required to access the broadcast studio, publish new episodes, and approve guest submissions.
                </p>
              </div>

              <form id="admin-login-form" class="admin-gate-form">
                <div class="form-group" style="margin-bottom: 14px;">
                  <label for="admin-passcode" class="form-label" style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; margin-bottom: 6px; display: block;">ADMINISTRATOR PASSCODE *</label>
                  <div class="passcode-input-wrap">
                    <input
                      type="password"
                      id="admin-passcode"
                      class="form-input form-input-mono"
                      placeholder="ENTER PASSCODE..."
                      required
                      autocomplete="current-password"
                      autofocus
                      style="border: 1px solid var(--border-black); padding: 12px 14px; font-family: var(--font-mono); font-size: 0.95rem;"
                    />
                    <button type="button" id="toggle-passcode-visibility" class="btn-toggle-eye" aria-label="Toggle password visibility">SHOW</button>
                  </div>
                </div>

                <div id="admin-auth-error" class="admin-error-box hidden">
                  <span class="error-icon">✕</span> ACCESS DENIED: Invalid administrator passcode.
                </div>

                <div class="admin-gate-actions">
                  <button type="submit" class="btn-cms-primary" style="width: 100%; justify-content: center;">
                    UNLOCK STUDIO CONSOLE ⟶
                  </button>
                  <a href="episodes.html" class="btn-cms-secondary" style="width: 100%; text-align: center; justify-content: center; text-decoration: none;">
                    RETURN TO PUBLIC EPISODES ↗
                  </a>
                </div>
              </form>

              <div class="admin-gate-hint-box">
                <span class="hint-label">DEFAULT ACCESS CREDENTIAL:</span>
                <span class="hint-code">admin2026</span>
                <span class="hint-sub">(Or "admin")</span>
              </div>
            </div>

            <!-- CARD 2: VISITOR / GUEST EPISODE PITCH CARD -->
            <div class="admin-gate-card admin-gate-guest-card">
              <div class="admin-gate-top">
                <span class="admin-security-tag" style="color: var(--color-vermilion);"><span class="rec-blink-dot" style="background: var(--color-vermilion);"></span> VISITOR / GUEST ACCESS // OPEN PORTAL</span>
                <span class="admin-sys-time">OPEN CALL 2026</span>
              </div>

              <div class="admin-gate-headline-area">
                <h2 class="admin-gate-title">REQUEST AN EPISODE.</h2>
                <p class="admin-gate-desc">
                  Are you a researcher, survivor, clinician, or thinker with an unscripted story? Submit your episode proposal directly to our editorial curatorial board.
                </p>
              </div>

              <ul class="guest-card-points">
                <li>
                  <strong>01 // Direct Editorial Pitch:</strong>
                  <span>Submit episode synopsis, custom narrative angle, and somatic takeaways.</span>
                </li>
                <li>
                  <strong>02 // Curatorial Review:</strong>
                  <span>Our editorial team reviews all submissions directly within the Studio Approval Queue.</span>
                </li>
                <li>
                  <strong>03 // Broadcast Release:</strong>
                  <span>Approved episodes are instantly converted into full archive releases and published.</span>
                </li>
              </ul>

              <div class="admin-gate-actions" style="margin-top: auto;">
                <a href="request-episode.html" class="btn-cms-primary" style="width: 100%; justify-content: center; text-decoration: none; text-align: center;">
                  + REQUEST / PITCH AN EPISODE ⟶
                </a>
                <a href="become-a-guest.html" class="btn-cms-secondary" style="width: 100%; justify-content: center; text-decoration: none; text-align: center;">
                  GUEST PARTICIPATION INFO ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    const form = container.querySelector("#admin-login-form");
    const input = container.querySelector("#admin-passcode");
    const errorBox = container.querySelector("#admin-auth-error");
    const toggleEye = container.querySelector("#toggle-passcode-visibility");

    toggleEye?.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        toggleEye.textContent = "HIDE";
      } else {
        input.type = "password";
        toggleEye.textContent = "SHOW";
      }
    });

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim().toLowerCase();
      if (val === "admin2026" || val === "admin" || val === "c2ladmin") {
        sessionStorage.setItem(AUTH_KEY, "true");
        showToast("✓ Administrator authenticated. Welcome to Studio CMS.");
        renderDashboard();
      } else {
        errorBox?.classList.remove("hidden");
        input?.classList.add("input-error");
        input?.focus();
        showToast("✕ Access denied: Incorrect passcode.", true);
      }
    });

    ensureFooter();
  }

  function renderDashboard() {
    const stats = calculateStats();
    const pendingSubs = submissions.filter(s => s.status === "pending");
    const pendingCount = pendingSubs.length;

    container.innerHTML = `
      <section class="swiss-section cms-dashboard-section" data-section="CMS">
        <div class="swiss-gutter">
          <span class="gutter-num">007</span>
          <span class="gutter-label">STUDIO CMS</span>
        </div>

        <div class="view-header-strip cms-header-strip">
          <div class="cms-top-breadcrumbs">
            <span class="view-sub-label">007 // BROADCAST MANAGEMENT STUDIO</span>
            <div class="admin-auth-status-cluster">
              <span class="live-sync-indicator"><span class="rec-blink-dot"></span> LIVE SYNC ACTIVE</span>
              <span class="admin-badge-active"><span class="auth-dot"></span> ADMIN: AUTHORIZED</span>
              <button id="btn-admin-logout" class="btn-admin-lock" title="Lock admin console and log out">LOCK CONSOLE ✕</button>
            </div>
          </div>

          <div class="cms-headline-row">
            <div>
              <h1 class="view-giant-headline">EPISODES STUDIO.</h1>
              <p class="view-lead-copy">Manage published episodes, curate guest audio pitches, review unscripted session proposals, and publish directly to the live archive.</p>
            </div>
            <div class="cms-primary-cta-group">
              <button id="btn-create-episode-top" class="btn-cms-primary">
                <span class="plus-sign">+</span> PUBLISH NEW EPISODE
              </button>
              <a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer" class="btn-cms-secondary" style="background:#0d0d0d; color:#fff;" title="Open Lovable React App">
                ▶ LOVABLE APP ↗
              </a>
              <a href="episodes.html" class="btn-cms-secondary">
                VIEW ARCHIVE ↗
              </a>
            </div>
          </div>

          <!-- CMS VIEW SWITCHER TABS -->
          <div class="cms-view-switcher-bar">
            <button type="button" id="cms-tab-episodes" class="cms-view-tab-btn ${activeTab === 'episodes' ? 'active' : ''}">
              01 // EPISODES ARCHIVE (${stats.totalCount})
            </button>
            <button type="button" id="cms-tab-submissions" class="cms-view-tab-btn ${activeTab === 'submissions' ? 'active' : ''}">
              02 // GUEST SUBMISSION APPROVALS
              <span class="cms-sub-badge-count" style="${pendingCount === 0 ? 'background: #166534;' : ''}">
                ${pendingCount} PENDING
              </span>
            </button>
          </div>

          <!-- DYNAMIC VIEW CONTAINER -->
          <div id="cms-main-content-panel"></div>
        </div>
      </section>

      <!-- CMS EPISODE EDITOR MODAL -->
      <div id="cms-editor-modal" class="modal-wrapper hidden" role="dialog" aria-modal="true">
        <div class="modal-backdrop" id="cms-modal-backdrop"></div>
        <div class="modal-card cms-modal-card">
          <div class="cms-modal-header">
            <div>
              <span class="cms-modal-tag" id="cms-modal-tag">007 // EPISODE EDITOR</span>
              <h2 class="cms-modal-title" id="cms-modal-title">NEW EPISODE ARCHIVE ENTRY</h2>
            </div>
            <button class="modal-close-btn" id="cms-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="cms-episode-form" class="cms-form-scrollable" novalidate>
            <!-- Form body dynamically loaded -->
            <div id="cms-form-fields-container"></div>

            <div class="cms-form-bottom-actions">
              <button type="button" class="btn-swiss-notes" id="cms-btn-cancel">CANCEL</button>
              <button type="submit" class="btn-cms-primary" id="cms-btn-submit">
                ✓ SAVE &amp; PUBLISH TO ARCHIVE
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- JSON IMPORT MODAL -->
      <div id="cms-import-modal" class="modal-wrapper hidden" role="dialog" aria-modal="true">
        <div class="modal-backdrop" id="cms-import-backdrop"></div>
        <div class="modal-card" style="max-width: 600px;">
          <div class="cms-modal-header">
            <h3 class="cms-modal-title">IMPORT EPISODES JSON</h3>
            <button class="modal-close-btn" id="cms-import-close">&times;</button>
          </div>
          <div style="padding: 24px;">
            <p style="font-size: 0.88rem; color: #444; margin-bottom: 12px;">Paste valid JSON array containing episode records. This will replace or update current archive records.</p>
            <textarea id="cms-import-textarea" rows="12" class="swiss-textarea" style="width: 100%; font-family: var(--font-mono); font-size: 0.75rem; padding: 12px;"></textarea>
            <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px;">
              <button type="button" class="btn-swiss-notes" id="cms-import-cancel">CANCEL</button>
              <button type="button" class="btn-cms-primary" id="cms-import-submit">IMPORT DATA ↗</button>
            </div>
          </div>
        </div>
      </div>
    `;

    renderActiveTabContent();
    attachDashboardListeners();
    ensureFooter();
  }

  function ensureFooter() {
    if (!container.querySelector("footer.footer-swiss-section")) {
      const fWrapper = document.createElement("div");
      fWrapper.innerHTML = getFooterHTML("006");
      if (fWrapper.firstElementChild) {
        container.appendChild(fWrapper.firstElementChild);
      }
      initFooterEvents(container);
    }
  }

  function renderActiveTabContent() {
    const mainPanel = container.querySelector("#cms-main-content-panel");
    if (!mainPanel) return;

    if (activeTab === "episodes") {
      renderEpisodesView(mainPanel);
    } else {
      renderSubmissionsQueueView(mainPanel);
    }
  }

  function renderEpisodesView(targetEl) {
    const stats = calculateStats();
    targetEl.innerHTML = `
      <!-- KEY STATS STRIP -->
      <div class="cms-stats-grid">
        <div class="cms-stat-box">
          <span class="cms-stat-num">${stats.totalCount}</span>
          <span class="cms-stat-lbl">TOTAL EPISODES</span>
        </div>
        <div class="cms-stat-box">
          <span class="cms-stat-num">${stats.durationLabel}</span>
          <span class="cms-stat-lbl">TOTAL AUDIO ARCHIVE</span>
        </div>
        <div class="cms-stat-box">
          <span class="cms-stat-num">${stats.uniqueTopics}</span>
          <span class="cms-stat-lbl">ACTIVE TOPICS</span>
        </div>
        <div class="cms-stat-box highlight-stat">
          <span class="cms-stat-num">${stats.featuredCount}</span>
          <span class="cms-stat-lbl">FEATURED STORIES</span>
        </div>
      </div>

      <!-- TOOLBAR & FILTERS -->
      <div class="cms-toolbar">
        <div class="cms-search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="cms-search-input" value="${searchQuery}" placeholder="SEARCH EPISODES BY TITLE, GUEST, TOPIC OR TAG..." class="swiss-search-input" />
        </div>

        <div class="cms-toolbar-actions">
          <div class="sort-select-box">
            <label for="cms-cat-filter" class="sort-lbl">TOPIC:</label>
            <select id="cms-cat-filter" class="swiss-select">
              <option value="All" ${selectedCategory === 'All' ? 'selected' : ''}>ALL TOPICS</option>
              ${categories.filter(c => c !== 'All').map(c => `
                <option value="${c}" ${selectedCategory === c ? 'selected' : ''}>${c.toUpperCase()}</option>
              `).join('')}
            </select>
          </div>

          <button id="btn-export-json" class="btn-swiss-notes" title="Download backup of all episodes">
            EXPORT JSON ↓
          </button>
          <button id="btn-import-json" class="btn-swiss-notes" title="Import episodes from JSON">
            IMPORT JSON ↑
          </button>
          <button id="btn-reset-defaults" class="btn-cms-danger" title="Restore factory demo episodes">
            RESET DEFAULTS ↺
          </button>
        </div>
      </div>

      <!-- EPISODES LISTING TABLE -->
      <div class="cms-table-wrapper" id="cms-table-container"></div>
    `;

    renderTableBody();

    targetEl.querySelector("#cms-search-input")?.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderTableBody();
    });

    targetEl.querySelector("#cms-cat-filter")?.addEventListener("change", (e) => {
      selectedCategory = e.target.value;
      renderTableBody();
    });

    targetEl.querySelector("#btn-export-json")?.addEventListener("click", () => {
      const dataStr = exportEpisodesJSON();
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `care2listen-episodes-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      if (navigator.clipboard) navigator.clipboard.writeText(dataStr).catch(() => {});
      showToast("✓ Exported JSON downloaded & copied to clipboard!");
    });

    const importModal = container.querySelector("#cms-import-modal");
    targetEl.querySelector("#btn-import-json")?.addEventListener("click", () => {
      if (importModal) {
        container.querySelector("#cms-import-textarea").value = exportEpisodesJSON();
        importModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }
    });

    targetEl.querySelector("#btn-reset-defaults")?.addEventListener("click", async () => {
      if (confirm("Reset archive to factory demo episodes? Custom additions will be overwritten.")) {
        const success = await resetToDefaultEpisodes();
        if (success) {
          showToast("↺ Archive reset to factory demo episodes.");
          renderDashboard();
        }
      }
    });
  }

  function renderSubmissionsQueueView(targetEl) {
    const pendingCount = submissions.filter(s => s.status === "pending").length;
    const approvedCount = submissions.filter(s => s.status === "approved").length;
    const declinedCount = submissions.filter(s => s.status === "declined").length;

    let filtered = submissions.filter(s => {
      if (subFilter === "all") return true;
      return s.status === subFilter;
    });

    targetEl.innerHTML = `
      <!-- SUBMISSIONS QUEUE HEADER & FILTER BAR -->
      <div class="cms-toolbar" style="margin-bottom: 24px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: #555; margin-right: 6px;">FILTER STATUS:</span>
          <button type="button" class="btn-swiss-notes sub-filter-pill ${subFilter === 'all' ? 'active' : ''}" data-filter="all" style="${subFilter === 'all' ? 'background: #0d0d0d; color: #fff;' : ''}">
            ALL (${submissions.length})
          </button>
          <button type="button" class="btn-swiss-notes sub-filter-pill ${subFilter === 'pending' ? 'active' : ''}" data-filter="pending" style="${subFilter === 'pending' ? 'background: #0d0d0d; color: #fff;' : ''}">
            PENDING (${pendingCount})
          </button>
          <button type="button" class="btn-swiss-notes sub-filter-pill ${subFilter === 'approved' ? 'active' : ''}" data-filter="approved" style="${subFilter === 'approved' ? 'background: #0d0d0d; color: #fff;' : ''}">
            APPROVED (${approvedCount})
          </button>
          <button type="button" class="btn-swiss-notes sub-filter-pill ${subFilter === 'declined' ? 'active' : ''}" data-filter="declined" style="${subFilter === 'declined' ? 'background: #0d0d0d; color: #fff;' : ''}">
            DECLINED (${declinedCount})
          </button>
        </div>

        <div class="cms-toolbar-actions">
          <a href="request-episode.html" class="btn-swiss-notes" target="_blank" title="Open visitor pitch form">
            OPEN VISITOR PITCH FORM ↗
          </a>
        </div>
      </div>

      <!-- QUEUE LIST -->
      <div id="cms-queue-list">
        ${filtered.length === 0 ? `
          <div class="empty-state-swiss">
            <div class="empty-tag">00 // QUEUE EMPTY</div>
            <h3>NO SUBMISSIONS FOUND</h3>
            <p>There are no guest proposals currently matching status "${subFilter.toUpperCase()}".</p>
          </div>
        ` : filtered.map(sub => `
          <div class="cms-queue-card" data-sub-id="${sub.id}">
            <div class="cms-queue-card-top">
              <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <span class="cms-status-pill ${sub.status}">${sub.status}</span>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #777;">ID: ${sub.id}</span>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #777;">SUBMITTED: ${sub.submittedAt ? new Date(sub.submittedAt).toLocaleDateString() : 'Recent'}</span>
              </div>
              <span class="swiss-pill">${(sub.category || 'GENERAL').toUpperCase()}</span>
            </div>

            <div class="cms-queue-body">
              <img src="${sub.guestAvatar || '/assets/hero_meaningful_listening.jpg'}" alt="${sub.guestName}" class="cms-queue-avatar" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />

              <div class="cms-queue-content">
                <h3>${escapeHtml(sub.title || 'Untitled Proposal')}</h3>
                <div class="cms-queue-guest-meta">
                  GUEST: <strong>${escapeHtml(sub.guestName || 'Anonymous')}</strong>
                  ${sub.guestRole ? ` — <span>${escapeHtml(sub.guestRole)}</span>` : ''}
                  ${sub.guestEmail ? ` · <a href="mailto:${sub.guestEmail}" style="text-decoration: underline; color: inherit;">${escapeHtml(sub.guestEmail)}</a>` : ''}
                </div>
                ${sub.guestBio ? `<p style="font-size: 0.82rem; color: #555; margin-bottom: 8px;"><strong>Guest Bio:</strong> ${escapeHtml(sub.guestBio)}</p>` : ''}
                <div class="cms-queue-summary">
                  <strong>Pitch Summary:</strong> ${escapeHtml(sub.summary || 'No summary provided.')}
                </div>
                ${sub.takeaways && sub.takeaways.length ? `
                  <div class="cms-queue-takeaways-box">
                    <div class="cms-queue-takeaways-title">PROPOSED LISTENER TAKEAWAYS:</div>
                    <ul class="cms-queue-takeaways-list">
                      ${sub.takeaways.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>

              <div class="cms-queue-actions">
                ${sub.status !== 'approved' ? `
                  <button type="button" class="btn-approve-publish" data-approve-id="${sub.id}">
                    ✓ APPROVE &amp; PUBLISH
                  </button>
                ` : `
                  <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #166534; font-weight: 700; text-align: center; padding: 6px; background: #eef8ee; border: 1px solid #4ade80;">
                    ✓ PUBLISHED TO ARCHIVE
                  </div>
                `}
                <button type="button" class="btn-review-edit" data-review-id="${sub.id}">
                  ✎ REVIEW &amp; EDIT
                </button>
                ${sub.status === 'pending' ? `
                  <button type="button" class="btn-cms-secondary btn-decline-pitch" data-decline-id="${sub.id}" style="font-size: 0.7rem; justify-content: center; padding: 6px;">
                    ✕ DECLINE PITCH
                  </button>
                ` : ''}
                <button type="button" class="btn-cms-del" data-del-sub-id="${sub.id}" title="Remove submission proposal" style="align-self: flex-end;">
                  ✕
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Filter clicks
    targetEl.querySelectorAll(".sub-filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        subFilter = btn.dataset.filter;
        renderSubmissionsQueueView(targetEl);
      });
    });

    // Approve & Publish handler
    targetEl.querySelectorAll("[data-approve-id]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const sub = submissions.find(s => s.id === btn.dataset.approveId);
        if (!sub) return;

        btn.disabled = true;
        btn.textContent = "PUBLISHING...";

        const nextNum = String(Math.max(...episodes.map(e => parseInt(e.number, 10) || 0), 100) + 1);
        const todayDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date());

        const newEp = {
          id: `ep-${nextNum}`,
          number: nextNum,
          title: sub.title || `Special Session with ${sub.guestName}`,
          category: sub.category || "Mental Health",
          duration: "48 min",
          date: todayDate,
          featured: false,
          guest: {
            name: sub.guestName,
            role: sub.guestRole || "Guest Contributor",
            avatar: sub.guestAvatar || AVATAR_PRESETS[0].url,
            bio: sub.guestBio || ""
          },
          summary: sub.summary || "",
          tags: [sub.category || "Mental Health", "Community"],
          spotifyUrl: "https://open.spotify.com",
          appleUrl: "https://podcasts.apple.com",
          youtubeId: "dQw4w9WgXcQ",
          audioUrl: "",
          takeaways: sub.takeaways && sub.takeaways.length ? sub.takeaways : [
            "Clinical and experiential insight from guest conversation.",
            "Key somatic practice for presence and regulation."
          ],
          transcript: [
            { time: "00:00", speaker: "Host", text: `Welcome to Care 2 Listen. In this episode we are joined by ${sub.guestName}.` },
            { time: "02:15", speaker: sub.guestName, text: sub.summary || "Thank you for creating space for this conversation." }
          ]
        };

        await saveEpisode(newEp);
        await setSubmissionStatus(sub.id, "approved");
        showToast(`✓ Proposal from ${sub.guestName} approved & published as Episode #${nextNum}!`);
        renderDashboard();
      });
    });

    // Review & Edit handler
    targetEl.querySelectorAll("[data-review-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        const sub = submissions.find(s => s.id === btn.dataset.reviewId);
        if (!sub) return;

        const nextNum = String(Math.max(...episodes.map(e => parseInt(e.number, 10) || 0), 100) + 1);
        const todayDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date());

        const prefilledEp = {
          number: nextNum,
          title: sub.title || "",
          category: sub.category || "Mental Health",
          duration: "50 min",
          date: todayDate,
          featured: false,
          guest: {
            name: sub.guestName || "",
            role: sub.guestRole || "",
            avatar: sub.guestAvatar || AVATAR_PRESETS[0].url,
            bio: sub.guestBio || ""
          },
          summary: sub.summary || "",
          tags: [sub.category || "Mental Health"],
          spotifyUrl: "https://open.spotify.com",
          appleUrl: "https://podcasts.apple.com",
          youtubeId: "dQw4w9WgXcQ",
          audioUrl: "",
          takeaways: sub.takeaways && sub.takeaways.length ? sub.takeaways : ["Key takeaway insight."],
          transcript: [
            { time: "00:00", speaker: "Host", text: `Welcome to Care 2 Listen Episode #${nextNum}.` },
            { time: "01:45", speaker: sub.guestName || "Guest", text: sub.summary || "" }
          ]
        };

        openEditorModal(prefilledEp, sub.id);
      });
    });

    // Decline handler
    targetEl.querySelectorAll("[data-decline-id]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const sub = submissions.find(s => s.id === btn.dataset.declineId);
        if (!sub) return;
        if (confirm(`Decline proposal "${sub.title}" from ${sub.guestName}?`)) {
          await setSubmissionStatus(sub.id, "declined");
          showToast(`Proposal marked as declined.`);
          renderDashboard();
        }
      });
    });

    // Delete submission handler
    targetEl.querySelectorAll("[data-del-sub-id]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const subId = btn.dataset.delSubId;
        if (confirm(`Delete this submission proposal permanently?`)) {
          await deleteSubmission(subId);
          showToast(`Submission removed from queue.`);
          renderDashboard();
        }
      });
    });
  }

  function renderTableBody() {
    const tableContainer = container.querySelector("#cms-table-container");
    if (!tableContainer) return;

    let filtered = episodes.filter(ep => {
      const matchCat = selectedCategory === "All" || ep.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q ||
        ep.title.toLowerCase().includes(q) ||
        ep.guest.name.toLowerCase().includes(q) ||
        ep.number.includes(q) ||
        ep.tags?.some(t => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    // Default newest first
    filtered.sort((a, b) => parseInt(b.number, 10) - parseInt(a.number, 10));

    if (filtered.length === 0) {
      tableContainer.innerHTML = `
        <div class="empty-state-swiss">
          <div class="empty-tag">00 // NO MATCHING RECORDS</div>
          <h3>NO EPISODES FOUND</h3>
          <p>No records match query "${searchQuery}". Click "+ PUBLISH NEW EPISODE" to add a new broadcast entry.</p>
        </div>
      `;
      return;
    }

    tableContainer.innerHTML = `
      <div class="cms-table">
        <div class="cms-table-head">
          <div class="cms-cell-idx">INDEX</div>
          <div class="cms-cell-thumb">ARTWORK</div>
          <div class="cms-cell-title">EPISODE / GUEST INFORMATION</div>
          <div class="cms-cell-cat">TOPIC</div>
          <div class="cms-cell-meta">DURATION / DATE</div>
          <div class="cms-cell-feat">FEATURED</div>
          <div class="cms-cell-act">ACTIONS</div>
        </div>

        <div class="cms-table-rows">
          ${filtered.map(ep => `
            <div class="cms-row" data-epid="${ep.id}">
              <div class="cms-cell-idx">
                <span class="cms-idx-pill">EP // ${ep.number}</span>
              </div>
              <div class="cms-cell-thumb">
                <div class="cms-thumb-box">
                  <img src="${ep.guest?.avatar || '/assets/hero_meaningful_listening.jpg'}" alt="${ep.guest?.name || 'Guest'}" class="cms-thumb-img" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />
                </div>
              </div>
              <div class="cms-cell-title">
                <strong class="cms-ep-title">${ep.title}</strong>
                <span class="cms-guest-line">
                  <strong>${ep.guest?.name || 'TBD'}</strong> — ${ep.guest?.role || 'Guest'}
                </span>
                <span class="cms-tags-line">TAGS: ${(ep.tags || []).join(' · ')}</span>
              </div>
              <div class="cms-cell-cat">
                <span class="swiss-pill">${(ep.category || 'GENERAL').toUpperCase()}</span>
              </div>
              <div class="cms-cell-meta">
                <span class="meta-dur">${ep.duration || 'N/A'}</span>
                <span class="meta-date">${ep.date || 'Pending'}</span>
              </div>
              <div class="cms-cell-feat">
                ${ep.featured ? '<span class="cms-badge-feat">★ YES</span>' : '<span class="cms-badge-dim">NO</span>'}
              </div>
              <div class="cms-cell-act">
                <button class="btn-cms-edit" data-edit-id="${ep.id}" title="Edit all fields of this episode">
                  EDIT ✎
                </button>
                <button class="btn-swiss-play" data-play-id="${ep.id}" title="Test audio playback">
                  ▶
                </button>
                <button class="btn-cms-del" data-del-id="${ep.id}" data-del-num="${ep.number}" title="Delete episode record">
                  ✕
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Row edit triggers
    tableContainer.querySelectorAll("[data-edit-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        const ep = episodes.find(e => e.id === btn.dataset.editId);
        if (ep) openEditorModal(ep);
      });
    });

    // Row audio test triggers
    tableContainer.querySelectorAll("[data-play-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        const ep = episodes.find(e => e.id === btn.dataset.playId);
        if (ep) audioPlayer.playEpisode(ep);
      });
    });

    // Row delete triggers
    tableContainer.querySelectorAll("[data-del-id]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const epId = btn.dataset.delId;
        const epNum = btn.dataset.delNum;
        if (confirm(`Are you sure you want to delete Episode #${epNum}? This will remove it from the archive.`)) {
          const success = await deleteEpisode(epId);
          if (success) {
            showToast(`✓ Episode #${epNum} removed from Archive.`);
            renderDashboard();
          }
        }
      });
    });
  }

  function openEditorModal(episodeToEdit = null, fromSubmissionId = null) {
    const modal = container.querySelector("#cms-editor-modal");
    const modalTitle = container.querySelector("#cms-modal-title");
    const modalTag = container.querySelector("#cms-modal-tag");
    const fieldsContainer = container.querySelector("#cms-form-fields-container");
    if (!modal || !fieldsContainer) return;

    editingEpisodeId = episodeToEdit ? episodeToEdit.id : null;
    currentOriginSubmissionId = fromSubmissionId;

    if (episodeToEdit) {
      modalTag.textContent = `007 // EDITING EPISODE #${episodeToEdit.number}`;
      modalTitle.textContent = `MODIFY ARCHIVE ENTRY: EP // ${episodeToEdit.number}`;
    } else {
      modalTag.textContent = "007 // NEW EPISODE PUBLICATION";
      modalTitle.textContent = "PUBLISH NEW EPISODE TO ARCHIVE";
    }

    // Default calculations for new episode
    const nextNumber = episodeToEdit
      ? episodeToEdit.number
      : String(Math.max(...episodes.map(e => parseInt(e.number, 10) || 0), 100) + 1);

    const todayDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date());

    const initialData = episodeToEdit || {
      number: nextNumber,
      title: "",
      category: "Mental Health",
      duration: "52 min",
      date: todayDate,
      featured: false,
      guest: {
        name: "",
        role: "",
        avatar: AVATAR_PRESETS[0].url,
        bio: ""
      },
      summary: "",
      tags: ["Mental Health", "Somatic", "Healing"],
      spotifyUrl: "https://open.spotify.com",
      appleUrl: "https://podcasts.apple.com",
      youtubeId: "dQw4w9WgXcQ",
      audioUrl: "",
      takeaways: [
        "Core clinical insight from unscripted studio dialogue.",
        "Practical self-regulation somatic technique."
      ],
      transcript: [
        { time: "00:00", speaker: "Host (Maya)", text: "Welcome back to Care 2 Listen. In this session we unpack an honest conversation." },
        { time: "04:15", speaker: "Guest", text: "When you finally pause and listen to what your body is holding, everything shifts." }
      ]
    };

    fieldsContainer.innerHTML = `
      <!-- TAB NAVIGATION -->
      <div class="cms-form-tabs">
        <button type="button" class="cms-tab-btn active" data-tab="tab-core">01 // CORE & GUEST</button>
        <button type="button" class="cms-tab-btn" data-tab="tab-editorial">02 // SUMMARY & LINKS</button>
        <button type="button" class="cms-tab-btn" data-tab="tab-content">03 // TAKEAWAYS & TRANSCRIPT</button>
        <button type="button" class="cms-tab-btn" data-tab="tab-preview">04 // LIVE PREVIEW</button>
      </div>

      <!-- TAB 1: CORE & GUEST -->
      <div class="cms-tab-panel active" id="tab-core">
        <div class="cms-form-grid-3">
          <div class="form-group">
            <label class="form-label" for="f-num">EPISODE NUMBER <span class="req">*</span></label>
            <input type="number" id="f-num" required class="form-input" value="${initialData.number}" placeholder="109" />
          </div>

          <div class="form-group">
            <label class="form-label" for="f-category">TOPIC / CATEGORY <span class="req">*</span></label>
            <input type="text" id="f-category" required list="cat-suggestions" class="form-input" value="${initialData.category}" placeholder="e.g. Mental Health" />
            <datalist id="cat-suggestions">
              ${categories.filter(c => c !== 'All').map(c => `<option value="${c}"></option>`).join('')}
              <option value="Somatic"></option>
              <option value="Neuroscience"></option>
              <option value="Creativity"></option>
            </datalist>
          </div>

          <div class="form-group">
            <label class="form-label" for="f-duration">DURATION <span class="req">*</span></label>
            <input type="text" id="f-duration" required class="form-input" value="${initialData.duration || '52 min'}" placeholder="e.g. 52 min" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="f-title">EPISODE HEADLINE / TITLE <span class="req">*</span></label>
          <input type="text" id="f-title" required class="form-input" value="${escapeHtml(initialData.title)}" placeholder="e.g. Learning to Sit With the Silence: Why We Rush to Fix What Needs to Be Felt" />
        </div>

        <div class="cms-form-grid-2">
          <div class="form-group">
            <label class="form-label" for="f-date">RELEASE DATE</label>
            <input type="text" id="f-date" class="form-input" value="${initialData.date || todayDate}" placeholder="e.g. Oct 06, 2026" />
          </div>

          <div class="form-group" style="justify-content: center;">
            <label class="cms-checkbox-label">
              <input type="checkbox" id="f-featured" ${initialData.featured ? 'checked' : ''} class="cms-checkbox" />
              <span><strong>★ FEATURED EPISODE</strong> (Promote on hero and spotlight banners)</span>
            </label>
          </div>
        </div>

        <!-- GUEST DETAILS BOX -->
        <div class="cms-sub-card">
          <div class="cms-sub-card-header">
            <span class="sub-card-title">GUEST PROFILE & ARTWORK</span>
            <span class="sub-card-note">Displayed in hover preview & show notes</span>
          </div>

          <div class="cms-form-grid-2">
            <div class="form-group">
              <label class="form-label" for="f-guest-name">GUEST FULL NAME <span class="req">*</span></label>
              <input type="text" id="f-guest-name" required class="form-input" value="${escapeHtml(initialData.guest?.name || '')}" placeholder="e.g. Dr. Elena Rostova" />
            </div>

            <div class="form-group">
              <label class="form-label" for="f-guest-role">GUEST ROLE / SPECIALTY <span class="req">*</span></label>
              <input type="text" id="f-guest-role" required class="form-input" value="${escapeHtml(initialData.guest?.role || '')}" placeholder="e.g. Somatic Psychologist & Author" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="f-guest-avatar">GUEST PORTRAIT / FEATURE IMAGE URL <span class="req">*</span></label>
            <div class="cms-avatar-input-row">
              <input type="url" id="f-guest-avatar" required class="form-input" value="${initialData.guest?.avatar || ''}" placeholder="https://images.unsplash.com/..." />
              <div class="cms-avatar-live-thumb">
                <img id="f-avatar-preview-img" src="${initialData.guest?.avatar || '/assets/hero_meaningful_listening.jpg'}" alt="Preview" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />
              </div>
            </div>
          </div>

          <!-- Quick Select Preset Avatars -->
          <div class="cms-presets-row">
            <span class="presets-lbl">1-CLICK HIGH-RES PORTRAIT PRESETS:</span>
            <div class="presets-pills">
              ${AVATAR_PRESETS.map((p, idx) => `
                <button type="button" class="btn-preset-avatar" data-preset-url="${p.url}">
                  ${p.name}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="form-group" style="margin-top: 14px;">
            <label class="form-label" for="f-guest-bio">GUEST BIOGRAPHY</label>
            <textarea id="f-guest-bio" rows="3" class="form-textarea" placeholder="Detailed bio describing their clinical research, books, or lived experiences...">${escapeHtml(initialData.guest?.bio || '')}</textarea>
          </div>
        </div>
      </div>

      <!-- TAB 2: EDITORIAL & LINKS -->
      <div class="cms-tab-panel" id="tab-editorial">
        <div class="form-group">
          <label class="form-label" for="f-summary">EPISODE SYNOPSIS / EXCERPT <span class="req">*</span></label>
          <textarea id="f-summary" rows="4" required class="form-textarea" placeholder="A compelling 2-4 sentence overview of the conversation...">${escapeHtml(initialData.summary || '')}</textarea>
        </div>

        <div class="form-group">
          <label class="form-label" for="f-tags">TOPIC TAGS (COMMA SEPARATED)</label>
          <input type="text" id="f-tags" class="form-input" value="${(initialData.tags || []).join(', ')}" placeholder="e.g. Somatic Therapy, Empathy, Silence, Recovery" />
          <span style="font-family: var(--font-mono); font-size: 0.65rem; color: #777; margin-top: 4px;">Separate each keyword with a comma. Used for site search filtering.</span>
        </div>

        <div class="cms-sub-card">
          <div class="cms-sub-card-header">
            <span class="sub-card-title">BROADCAST & EXTERNAL STREAMING LINKS</span>
          </div>

          <div class="cms-form-grid-2">
            <div class="form-group">
              <label class="form-label" for="f-spotify">SPOTIFY URL</label>
              <input type="url" id="f-spotify" class="form-input" value="${initialData.spotifyUrl || 'https://open.spotify.com'}" placeholder="https://open.spotify.com/episode/..." />
            </div>

            <div class="form-group">
              <label class="form-label" for="f-apple">APPLE PODCASTS URL</label>
              <input type="url" id="f-apple" class="form-input" value="${initialData.appleUrl || 'https://podcasts.apple.com'}" placeholder="https://podcasts.apple.com/..." />
            </div>
          </div>

          <div class="cms-form-grid-2">
            <div class="form-group">
              <label class="form-label" for="f-youtube">YOUTUBE VIDEO ID</label>
              <input type="text" id="f-youtube" class="form-input" value="${initialData.youtubeId || 'dQw4w9WgXcQ'}" placeholder="e.g. dQw4w9WgXcQ" />
            </div>

            <div class="form-group">
              <label class="form-label" for="f-audio-url">DIRECT MP3 STREAM (OPTIONAL)</label>
              <input type="url" id="f-audio-url" class="form-input" value="${initialData.audioUrl || ''}" placeholder="https://cdn.care2listen.com/audio/ep109.mp3" />
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 3: TAKEAWAYS & TRANSCRIPT -->
      <div class="cms-tab-panel" id="tab-content">
        <!-- KEY TAKEAWAYS REPEATER -->
        <div class="cms-sub-card">
          <div class="cms-sub-card-header">
            <span class="sub-card-title">KEY LESSONS & CLINICAL TAKEAWAYS</span>
            <button type="button" id="btn-add-takeaway" class="btn-cms-secondary-sm">+ ADD TAKEAWAY</button>
          </div>
          <div id="takeaways-list-container" class="cms-repeater-list">
            ${(initialData.takeaways && initialData.takeaways.length ? initialData.takeaways : ["Core takeaway lesson"]).map((t, idx) => `
              <div class="repeater-row takeaway-item">
                <span class="repeater-num">${String(idx + 1).padStart(2, '0')}</span>
                <input type="text" class="form-input takeaway-input" value="${escapeHtml(t)}" placeholder="Key takeaway point..." />
                <button type="button" class="btn-repeater-del" title="Remove">&times;</button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- TRANSCRIPT REPEATER -->
        <div class="cms-sub-card" style="margin-top: 20px;">
          <div class="cms-sub-card-header">
            <span class="sub-card-title">INTERACTIVE AUDIO TRANSCRIPT HIGHLIGHTS</span>
            <button type="button" id="btn-add-transcript" class="btn-cms-secondary-sm">+ ADD DIALOGUE TURN</button>
          </div>
          <div id="transcript-list-container" class="cms-repeater-list">
            ${(initialData.transcript && initialData.transcript.length ? initialData.transcript : [{ time: "00:00", speaker: "Host", text: "" }]).map(item => `
              <div class="repeater-row transcript-item">
                <input type="text" class="form-input transcript-time" style="max-width: 90px;" value="${item.time || '00:00'}" placeholder="00:00" />
                <input type="text" class="form-input transcript-speaker" style="max-width: 160px;" value="${escapeHtml(item.speaker || 'Host')}" placeholder="Speaker" />
                <input type="text" class="form-input transcript-text" style="flex: 1;" value="${escapeHtml(item.text || '')}" placeholder="Dialogue utterance..." />
                <button type="button" class="btn-repeater-del" title="Remove">&times;</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- TAB 4: LIVE PREVIEW -->
      <div class="cms-tab-panel" id="tab-preview">
        <div class="cms-preview-section">
          <div class="preview-box-header">
            <span>LIVE ARCHIVE CARD & TABLE ROW SIMULATION</span>
            <span class="preview-badge">REAL-TIME SYNC</span>
          </div>

          <div class="preview-stage">
            <!-- Simulated Table Row -->
            <div class="preview-table-mock">
              <div class="ep-table-row preview-simulated-row">
                <div class="ep-cell ep-cell-num" id="prev-num">EP // ${initialData.number}</div>
                <div class="ep-cell ep-cell-title">
                  <strong id="prev-title">${escapeHtml(initialData.title || 'Your Episode Title Here')}</strong>
                  <span class="ep-guest-sub" id="prev-guest-sub">${escapeHtml(initialData.guest?.name || 'Guest Name')} — ${escapeHtml(initialData.guest?.role || 'Guest Role')}</span>
                </div>
                <div class="ep-cell ep-cell-category"><span class="swiss-pill" id="prev-cat">${(initialData.category || 'TOPIC').toUpperCase()}</span></div>
                <div class="ep-cell ep-cell-duration" id="prev-dur">${initialData.duration || '52 min'}</div>
                <div class="ep-cell ep-cell-date" id="prev-date">${initialData.date || todayDate}</div>
                <div class="ep-cell ep-cell-actions">
                  <button type="button" class="btn-swiss-play">▶ PLAY</button>
                  <button type="button" class="btn-swiss-notes">NOTES ↗</button>
                </div>
              </div>
            </div>

            <!-- Simulated Hover Preview Card -->
            <div class="preview-card-wrap">
              <span class="preview-wrap-lbl">SIMULATED GSAP HOVER PREVIEW:</span>
              <div class="ep-hover-preview-card" style="max-width: 260px; margin-top: 10px;">
                <div class="ep-hover-preview-top">
                  <span class="ep-hover-badge" id="prev-hover-badge">EP // ${initialData.number} • ${(initialData.category || 'TOPIC').toUpperCase()}</span>
                  <span class="ep-hover-live"><span class="rec-blink-dot"></span> LIVE ARCHIVE</span>
                </div>
                <div class="ep-hover-media" style="height: 155px;">
                  <img id="prev-hover-img" src="${initialData.guest?.avatar || '/assets/hero_meaningful_listening.jpg'}" alt="Preview" class="ep-hover-img" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />
                  <div class="ep-hover-overlay-tag">ARCHIVE 2026</div>
                </div>
                <div class="ep-hover-preview-info">
                  <div class="ep-hover-guest-name" id="prev-hover-guest">${initialData.guest?.name || 'GUEST NAME'}</div>
                  <div class="ep-hover-guest-role" id="prev-hover-role">${initialData.guest?.role || 'Guest Specialty'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Tab switching logic
    fieldsContainer.querySelectorAll(".cms-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        fieldsContainer.querySelectorAll(".cms-tab-btn").forEach(b => b.classList.remove("active"));
        fieldsContainer.querySelectorAll(".cms-tab-panel").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const target = fieldsContainer.querySelector(`#${btn.dataset.tab}`);
        if (target) target.classList.add("active");
      });
    });

    // Preset avatar pickers
    fieldsContainer.querySelectorAll(".btn-preset-avatar").forEach(btn => {
      btn.addEventListener("click", () => {
        const url = btn.dataset.presetUrl;
        const avatarInput = fieldsContainer.querySelector("#f-guest-avatar");
        const previewImg = fieldsContainer.querySelector("#f-avatar-preview-img");
        const hoverImg = fieldsContainer.querySelector("#prev-hover-img");
        if (avatarInput) avatarInput.value = url;
        if (previewImg) previewImg.src = url;
        if (hoverImg) hoverImg.src = url;
      });
    });

    // Live avatar input change
    const avatarInput = fieldsContainer.querySelector("#f-guest-avatar");
    avatarInput?.addEventListener("input", (e) => {
      const val = e.target.value.trim() || "/assets/hero_meaningful_listening.jpg";
      const previewImg = fieldsContainer.querySelector("#f-avatar-preview-img");
      const hoverImg = fieldsContainer.querySelector("#prev-hover-img");
      if (previewImg) previewImg.src = val;
      if (hoverImg) hoverImg.src = val;
    });

    // Real-time updates to preview stage
    const syncLivePreview = () => {
      const num = fieldsContainer.querySelector("#f-num")?.value || "109";
      const title = fieldsContainer.querySelector("#f-title")?.value || "Episode Title";
      const cat = fieldsContainer.querySelector("#f-category")?.value || "TOPIC";
      const dur = fieldsContainer.querySelector("#f-duration")?.value || "52 min";
      const date = fieldsContainer.querySelector("#f-date")?.value || todayDate;
      const guestName = fieldsContainer.querySelector("#f-guest-name")?.value || "Guest Name";
      const guestRole = fieldsContainer.querySelector("#f-guest-role")?.value || "Guest Specialty";

      const pNum = fieldsContainer.querySelector("#prev-num");
      const pTitle = fieldsContainer.querySelector("#prev-title");
      const pGuestSub = fieldsContainer.querySelector("#prev-guest-sub");
      const pCat = fieldsContainer.querySelector("#prev-cat");
      const pDur = fieldsContainer.querySelector("#prev-dur");
      const pDate = fieldsContainer.querySelector("#prev-date");
      const pHoverBadge = fieldsContainer.querySelector("#prev-hover-badge");
      const pHoverGuest = fieldsContainer.querySelector("#prev-hover-guest");
      const pHoverRole = fieldsContainer.querySelector("#prev-hover-role");

      if (pNum) pNum.textContent = `EP // ${num}`;
      if (pTitle) pTitle.textContent = title;
      if (pGuestSub) pGuestSub.textContent = `${guestName} — ${guestRole}`;
      if (pCat) pCat.textContent = cat.toUpperCase();
      if (pDur) pDur.textContent = dur;
      if (pDate) pDate.textContent = date;
      if (pHoverBadge) pHoverBadge.textContent = `EP // ${num} • ${cat.toUpperCase()}`;
      if (pHoverGuest) pHoverGuest.textContent = guestName;
      if (pHoverRole) pHoverRole.textContent = guestRole;
    };

    fieldsContainer.querySelectorAll("input, textarea").forEach(input => {
      input.addEventListener("input", syncLivePreview);
    });

    // Add Key Takeaway button
    const takeawaysList = fieldsContainer.querySelector("#takeaways-list-container");
    fieldsContainer.querySelector("#btn-add-takeaway")?.addEventListener("click", () => {
      const count = takeawaysList.querySelectorAll(".takeaway-item").length + 1;
      const row = document.createElement("div");
      row.className = "repeater-row takeaway-item";
      row.innerHTML = `
        <span class="repeater-num">${String(count).padStart(2, '0')}</span>
        <input type="text" class="form-input takeaway-input" placeholder="Another key lesson or clinical observation..." />
        <button type="button" class="btn-repeater-del" title="Remove">&times;</button>
      `;
      takeawaysList.appendChild(row);
      attachRepeaterDel(row);
    });

    // Add Transcript Line button
    const transcriptList = fieldsContainer.querySelector("#transcript-list-container");
    fieldsContainer.querySelector("#btn-add-transcript")?.addEventListener("click", () => {
      const row = document.createElement("div");
      row.className = "repeater-row transcript-item";
      row.innerHTML = `
        <input type="text" class="form-input transcript-time" style="max-width: 90px;" value="00:00" placeholder="00:00" />
        <input type="text" class="form-input transcript-speaker" style="max-width: 160px;" value="Guest" placeholder="Speaker" />
        <input type="text" class="form-input transcript-text" style="flex: 1;" placeholder="Dialogue utterance..." />
        <button type="button" class="btn-repeater-del" title="Remove">&times;</button>
      `;
      transcriptList.appendChild(row);
      attachRepeaterDel(row);
    });

    // Attach delete to existing repeater rows
    fieldsContainer.querySelectorAll(".btn-repeater-del").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.closest(".repeater-row")?.remove();
      });
    });

    function attachRepeaterDel(parent) {
      parent.querySelector(".btn-repeater-del")?.addEventListener("click", () => {
        parent.remove();
      });
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    const formScrollable = modal.querySelector(".cms-form-scrollable");
    if (formScrollable) formScrollable.scrollTop = 0;
  }

  function closeEditorModal() {
    const modal = container.querySelector("#cms-editor-modal");
    if (modal) modal.classList.add("hidden");
    document.body.style.overflow = "";
    editingEpisodeId = null;
    currentOriginSubmissionId = null;
  }

  function attachDashboardListeners() {
    // Admin Logout / Lock
    container.querySelector("#btn-admin-logout")?.addEventListener("click", () => {
      sessionStorage.removeItem(AUTH_KEY);
      showToast("🔒 Admin session locked. Console restricted.");
      renderGate();
    });

    // Tab Switchers
    container.querySelector("#cms-tab-episodes")?.addEventListener("click", () => {
      if (activeTab !== "episodes") {
        activeTab = "episodes";
        container.querySelector("#cms-tab-episodes")?.classList.add("active");
        container.querySelector("#cms-tab-submissions")?.classList.remove("active");
        renderActiveTabContent();
      }
    });

    container.querySelector("#cms-tab-submissions")?.addEventListener("click", () => {
      if (activeTab !== "submissions") {
        activeTab = "submissions";
        container.querySelector("#cms-tab-submissions")?.classList.add("active");
        container.querySelector("#cms-tab-episodes")?.classList.remove("active");
        renderActiveTabContent();
      }
    });

    // Top CTA: New Episode
    container.querySelector("#btn-create-episode-top")?.addEventListener("click", () => {
      openEditorModal(null);
    });

    // Modal close & cancel
    container.querySelector("#cms-modal-close")?.addEventListener("click", closeEditorModal);
    container.querySelector("#cms-modal-backdrop")?.addEventListener("click", closeEditorModal);
    container.querySelector("#cms-btn-cancel")?.addEventListener("click", closeEditorModal);

    // Import JSON modal triggers
    const importModal = container.querySelector("#cms-import-modal");
    const closeImportModal = () => {
      if (importModal) {
        importModal.classList.add("hidden");
        document.body.style.overflow = "";
      }
    };

    container.querySelector("#cms-import-close")?.addEventListener("click", closeImportModal);
    container.querySelector("#cms-import-backdrop")?.addEventListener("click", closeImportModal);
    container.querySelector("#cms-import-cancel")?.addEventListener("click", closeImportModal);

    // Global ESC key listener to close active modals
    const handleModalEscape = (e) => {
      if (e.key === "Escape") {
        closeEditorModal();
        closeImportModal();
      }
    };
    window.removeEventListener("keydown", handleModalEscape);
    window.addEventListener("keydown", handleModalEscape);

    container.querySelector("#cms-import-submit")?.addEventListener("click", async () => {
      const text = container.querySelector("#cms-import-textarea")?.value || "";
      const result = await importEpisodesJSON(text);
      if (result.success) {
        closeImportModal();
        showToast(`✓ Successfully imported ${result.count} episodes!`);
        renderDashboard();
      } else {
        alert(`Import Error: ${result.error}`);
      }
    });

    // Form submission
    const form = container.querySelector("#cms-episode-form");
    form?.addEventListener("submit", async (e) => {
      e.preventDefault();

      const num = form.querySelector("#f-num")?.value.trim();
      const title = form.querySelector("#f-title")?.value.trim();
      const category = form.querySelector("#f-category")?.value.trim() || "Mental Health";
      const duration = form.querySelector("#f-duration")?.value.trim() || "50 min";
      const date = form.querySelector("#f-date")?.value.trim() || "Oct 06, 2026";
      const featured = form.querySelector("#f-featured")?.checked || false;

      const guestName = form.querySelector("#f-guest-name")?.value.trim();
      const guestRole = form.querySelector("#f-guest-role")?.value.trim() || "Guest Specialist";
      const guestAvatar = form.querySelector("#f-guest-avatar")?.value.trim() || "/assets/hero_meaningful_listening.jpg";
      const guestBio = form.querySelector("#f-guest-bio")?.value.trim() || "";

      // Safe tab switching validation helper
      const switchTab = (tabId) => {
        container.querySelectorAll(".cms-tab-btn").forEach(b => {
          b.classList.toggle("active", b.dataset.tab === tabId);
        });
        container.querySelectorAll(".cms-tab-panel").forEach(p => {
          p.classList.toggle("active", p.id === tabId);
        });
      };

      if (!num) {
        switchTab("tab-core");
        form.querySelector("#f-num")?.focus();
        showToast("✕ Please enter an episode number.", true);
        return;
      }

      if (!title) {
        switchTab("tab-core");
        form.querySelector("#f-title")?.focus();
        showToast("✕ Please enter an episode headline/title.", true);
        return;
      }

      if (!guestName) {
        switchTab("tab-core");
        form.querySelector("#f-guest-name")?.focus();
        showToast("✕ Please enter the guest full name.", true);
        return;
      }

      const summary = form.querySelector("#f-summary")?.value.trim() || "";
      const tagsRaw = form.querySelector("#f-tags")?.value.trim() || "";
      const tags = tagsRaw.split(",").map(t => t.trim()).filter(Boolean);

      const spotifyUrl = form.querySelector("#f-spotify")?.value.trim() || "https://open.spotify.com";
      const appleUrl = form.querySelector("#f-apple")?.value.trim() || "https://podcasts.apple.com";
      const youtubeId = form.querySelector("#f-youtube")?.value.trim() || "dQw4w9WgXcQ";
      const audioUrl = form.querySelector("#f-audio-url")?.value.trim() || "";

      // Gather takeaways
      const takeaways = [];
      form.querySelectorAll(".takeaway-input").forEach(inp => {
        const val = inp.value.trim();
        if (val) takeaways.push(val);
      });

      // Gather transcript
      const transcript = [];
      form.querySelectorAll(".transcript-item").forEach(item => {
        const time = item.querySelector(".transcript-time")?.value.trim() || "00:00";
        const speaker = item.querySelector(".transcript-speaker")?.value.trim() || "Host";
        const text = item.querySelector(".transcript-text")?.value.trim() || "";
        if (text) transcript.push({ time, speaker, text });
      });

      const episodePayload = {
        id: editingEpisodeId || `ep-${num || Date.now()}`,
        number: num,
        title,
        category,
        duration,
        date,
        featured,
        guest: {
          name: guestName,
          role: guestRole,
          avatar: guestAvatar,
          bio: guestBio
        },
        summary,
        tags: tags.length ? tags : [category],
        spotifyUrl,
        appleUrl,
        youtubeId,
        audioUrl,
        takeaways: takeaways.length ? takeaways : ["Core conversation insight."],
        transcript: transcript.length ? transcript : [{ time: "00:00", speaker: "Host", text: summary }]
      };

      await saveEpisode(episodePayload);

      // If this episode originated from an approved submission proposal, mark submission as approved
      if (currentOriginSubmissionId) {
        await setSubmissionStatus(currentOriginSubmissionId, "approved");
        currentOriginSubmissionId = null;
      }

      closeEditorModal();
      showToast(`✓ Episode #${num} saved! Persisted to archive database.`);
      renderDashboard();
    });
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Listen for external updates (e.g. from other tabs or actions)
  window.addEventListener("care2listen:episodes-updated", () => {
    if (document.querySelector(".cms-dashboard-section")) {
      renderTableBody();
    }
  });

  window.addEventListener("care2listen:submissions-updated", () => {
    if (document.querySelector(".cms-dashboard-section")) {
      renderDashboard();
    }
  });

  if (!isAuthorized()) {
    renderGate();
  } else {
    renderDashboard();
  }
}
