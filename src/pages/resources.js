import { crisisResources, recommendedBooks, recommendedApps } from "../data/resources.js";

export function renderResourcesView(container) {
  container.innerHTML = `
    <section class="swiss-section" data-section="RESOURCES">
      <div class="swiss-gutter">
        <span class="gutter-num">009</span>
        <span class="gutter-label">DIRECTORY</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">009 // CRISIS & SUPPORT DIRECTORY</span>
        <h1 class="view-giant-headline">TOOLS & SUPPORT BEYOND THE PODCAST.</h1>
        <p class="view-lead-copy">Listening creates space, but certified clinical support saves lives. Explore verified emergency crisis helplines, curated reading lists, and digital wellness tools.</p>

        <!-- Clinical Alert Strip -->
        <div class="crisis-alert-strip">
          ⚠️ <strong>IMPORTANT CLINICAL NOTICE:</strong> Care 2 Listen is an educational and storytelling platform, not a substitute for licensed psychological or psychiatric therapy. If you or someone you know is in active distress, connect directly with the free 24/7 emergency resources below.
        </div>

        <!-- Crisis Hotlines Grid -->
        <div class="section-title-bar" style="margin-top: 36px;">
          <span class="section-idx">HOTLINES // 24/7</span>
          <h3 class="section-heading-sm">FREE EMERGENCY CRISIS HELPLINES</h3>
        </div>

        <div class="crisis-swiss-grid">
          ${crisisResources.map(c => `
            <div class="crisis-swiss-cell">
              <div class="crisis-cell-header">
                <span class="crisis-badge">${c.badge}</span>
                <span class="crisis-region-tag">${c.region}</span>
              </div>
              <h3 class="crisis-cell-name">${c.name}</h3>
              <p class="crisis-cell-desc">${c.desc}</p>
              <div class="crisis-dial-row">
                <span class="dial-code">${c.contact}</span>
                <button class="btn-copy-dial" data-dial="${c.contact}">COPY NUMBER ↗</button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Recommended Books -->
        <div class="section-title-bar" style="margin-top: 50px;">
          <span class="section-idx">LITERATURE // CURATED</span>
          <h3 class="section-heading-sm">BOOKS CURATED BY HOSTS & GUESTS</h3>
        </div>

        <div class="books-grid-swiss">
          ${recommendedBooks.map(b => `
            <div class="book-card-swiss">
              <span class="book-tag-pill">${b.tag.toUpperCase()}</span>
              <h3 class="book-title-swiss">${b.title}</h3>
              <p class="book-author-swiss">BY ${b.author.toUpperCase()}</p>
              <span class="book-cat-tag">${b.category.toUpperCase()}</span>
              <p class="book-desc-swiss">${b.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- Recommended Apps -->
        <div class="section-title-bar" style="margin-top: 50px;">
          <span class="section-idx">DIGITAL TOOLS // WELLNESS</span>
          <h3 class="section-heading-sm">RECOMMENDED APPS & DIRECTORIES</h3>
        </div>

        <div class="apps-grid-swiss">
          ${recommendedApps.map(a => `
            <div class="app-card-swiss">
              <div class="app-card-top">
                <h4 class="app-name-swiss">${a.name.toUpperCase()}</h4>
                <span class="app-cat-label">${a.type.toUpperCase()}</span>
              </div>
              <p class="app-desc-swiss">${a.desc}</p>
              <a href="https://google.com/search?q=${encodeURIComponent(a.name)}" target="_blank" rel="noopener" class="link-editorial-arrow">EXPLORE ↗</a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.querySelectorAll(".btn-copy-dial").forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard?.writeText(btn.dataset.dial);
      btn.textContent = "COPIED!";
      setTimeout(() => btn.textContent = "COPY NUMBER ↗", 2000);
    });
  });
}
