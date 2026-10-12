import { guests } from "../data/guests.js";
import { episodes } from "../data/episodes.js";
import { audioPlayer } from "../components/audioPlayer.js";

export function renderGuestsView(container) {
  const spotlight = guests.find(g => g.spotlight) || guests[0];
  let guestSearch = "";

  function renderCards() {
    const list = guests.filter(g => {
      const q = guestSearch.toLowerCase().trim();
      return !q || g.name.toLowerCase().includes(q) || g.topic.toLowerCase().includes(q) || g.location.toLowerCase().includes(q);
    });

    const gridEl = container.querySelector("#guests-cards-target");
    if (!gridEl) return;

    gridEl.innerHTML = list.map((g, i) => `
      <div class="guest-swiss-entry">
        <div class="guest-idx-strip">
          <span>0${i + 1}</span>
          <span>${g.location.toUpperCase()}</span>
        </div>
        <div class="guest-portrait-box">
          <img src="${g.avatar}" alt="${g.name}" class="guest-photo" />
        </div>
        <h3 class="guest-entry-name">${g.name.toUpperCase()}</h3>
        <span class="guest-entry-role">${g.role}</span>
        <p class="guest-entry-quote">“${g.quote}”</p>
        <button class="btn-guest-ep" data-open-ep="${g.epId}">LISTEN: ${g.epTitle} ⟶</button>
      </div>
    `).join('');

    gridEl.querySelectorAll("[data-open-ep]").forEach(btn => {
      btn.addEventListener("click", () => {
        const ep = episodes.find(e => e.id === btn.dataset.openEp);
        if (ep) audioPlayer.playEpisode(ep);
      });
    });
  }

  container.innerHTML = `
    <section class="swiss-section" data-section="GUESTS">
      <div class="swiss-gutter">
        <span class="gutter-num">007</span>
        <span class="gutter-label">ROSTER</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">007 // VOICES THAT SHAPED OUR SHOW</span>
        <h1 class="view-giant-headline">GUEST ROSTER.</h1>
        <p class="view-lead-copy">Psychologists, poets, caregivers, and executives sharing unfiltered truths about healing and resilience.</p>

        <!-- Spotlight Guest Card -->
        <div class="guest-spotlight-card-swiss">
          <div class="spotlight-top-strip">
            <span>★ GUEST SPOTLIGHT OF THE MONTH</span>
            <span>AW / 26 // EPISODE #${spotlight.epId.replace('ep-', '')}</span>
          </div>

          <div class="spotlight-content-grid">
            <div class="spotlight-photo-frame">
              <img src="${spotlight.avatar}" alt="${spotlight.name}" class="spotlight-photo" />
            </div>

            <div class="spotlight-info-pane">
              <span class="spotlight-cat-tag">${spotlight.topic.toUpperCase()}</span>
              <h2 class="spotlight-fullname">${spotlight.name.toUpperCase()}</h2>
              <p class="spotlight-role-loc">${spotlight.role} • ${spotlight.location}</p>
              
              <blockquote class="spotlight-quote-large">
                “${spotlight.quote}”
              </blockquote>

              <div class="spotlight-actions">
                <button class="btn-spotlight-listen" data-open-ep="${spotlight.epId}">
                  ▶ LISTEN TO ${spotlight.name.toUpperCase()}'S EPISODE
                </button>
                <a href="become-a-guest.html" class="link-editorial-arrow">Apply to Be a Guest ↗</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="search-cell" style="margin: 32px 0 24px;">
          <span class="search-icon">🔍</span>
          <input type="text" id="guest-search-input" placeholder="SEARCH GUESTS BY NAME, FIELD OF WORK, OR TOPIC..." class="swiss-search-input" />
        </div>

        <div id="guests-cards-target" class="guests-swiss-columns"></div>
      </div>
    </section>
  `;

  container.querySelector("#guest-search-input")?.addEventListener("input", (e) => {
    guestSearch = e.target.value;
    renderCards();
  });

  container.querySelectorAll("[data-open-ep]").forEach(btn => {
    btn.addEventListener("click", () => {
      const ep = episodes.find(e => e.id === btn.dataset.openEp);
      if (ep) audioPlayer.playEpisode(ep);
    });
  });

  renderCards();
}
