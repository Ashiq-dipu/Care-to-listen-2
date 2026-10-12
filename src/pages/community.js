import { testimonials, socialFeed } from "../data/community.js";

export function renderCommunityView(container) {
  container.innerHTML = `
    <section class="swiss-section" data-section="COMMUNITY">
      <div class="swiss-gutter">
        <span class="gutter-num">010</span>
        <span class="gutter-label">NETWORK</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">010 // EMPATHY NETWORK</span>
        <h1 class="view-giant-headline">YOU'RE NOT JUST A LISTENER — YOU'RE FAMILY.</h1>
        <p class="view-lead-copy">Care 2 Listen is powered by an empathetic global network of over 50,000 listeners who believe in vulnerability without shame.</p>

        <!-- Newsletter Card -->
        <div class="nl-swiss-card">
          <div class="nl-card-split">
            <div class="nl-left-info">
              <span class="section-idx">WEEKLY EMPATHY DIGEST</span>
              <h2 class="nl-heading">THE TUESDAY GROUNDING LETTER</h2>
              <p class="nl-text">Join 34,000+ readers who receive our weekly reflection letter: episode deep-dives, book excerpts, mental health toolkits, and invitations to monthly community Zoom circles.</p>
            </div>
            <div class="nl-right-form">
              <form id="community-nl-form" class="swiss-form-inline">
                <input type="email" id="nl-email-field" required placeholder="ENTER YOUR EMAIL..." class="swiss-input" />
                <button type="submit" id="nl-submit-btn" class="btn-editorial-pill">SUBSCRIBE ⟶</button>
              </form>
              <span id="nl-msg" class="nl-feedback-text hidden">✓ Welcome! Check your inbox for our latest reflection letter.</span>
            </div>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="section-title-bar" style="margin-top: 48px;">
          <span class="section-idx">TESTIMONIALS</span>
          <h3 class="section-heading-sm">WHAT OUR LISTENERS SAY</h3>
        </div>

        <div class="reviews-swiss-grid">
          ${testimonials.map(t => `
            <div class="review-swiss-card">
              <div class="rev-header">
                <span class="rev-stars">★★★★★</span>
                <span class="rev-ep">${t.episodeMentioned}</span>
              </div>
              <p class="rev-quote">“${t.quote}”</p>
              <div class="rev-author-bar">
                <img src="${t.avatar}" alt="${t.author}" class="rev-author-img" />
                <div>
                  <strong>${t.author.toUpperCase()}</strong>
                  <span>${t.role} • ${t.city}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Social Media Feed Wall -->
        <div class="section-title-bar" style="margin-top: 50px;">
          <span class="section-idx">SOCIAL VOICES</span>
          <h3 class="section-heading-sm">CONVERSATIONS ACROSS THE WEB</h3>
        </div>

        <div class="social-cards-grid-swiss">
          ${socialFeed.map(p => `
            <div class="social-post-card-swiss">
              <div class="social-card-top">
                <span class="social-handle-swiss">${p.handle}</span>
                <span class="social-badge-tag">${p.badge}</span>
              </div>
              <p class="social-quote-swiss">${p.quote}</p>
              <div class="social-img-box">
                <img src="${p.image}" alt="Social post" class="social-thumb" />
              </div>
              <div class="social-bottom-meta">
                <span>❤️ ${p.likes}</span>
                <span>💬 ${p.comments}</span>
                <span style="margin-left: auto;">${p.time}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  const nlForm = container.querySelector("#community-nl-form");
  const nlEmail = container.querySelector("#nl-email-field");
  const nlMsg = container.querySelector("#nl-msg");
  const nlBtn = container.querySelector("#nl-submit-btn");

  nlForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!nlEmail.value.includes("@")) return;
    nlBtn.textContent = "SUBSCRIBED!";
    nlMsg.classList.remove("hidden");
    nlEmail.value = "";
  });
}
