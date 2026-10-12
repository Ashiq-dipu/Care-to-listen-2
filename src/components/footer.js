/**
 * Care 2 Listen — Master Swiss Brutalist Footer Component
 * Rendered on Homepage (Section 006) and all internal subpages
 */

export function getFooterHTML(sectionNum = "006") {
  return `
    <!-- SECTION ${sectionNum}: MASTER SWISS BRUTALIST FOOTER -->
    <footer class="swiss-section footer-swiss-section" data-section="${sectionNum}" role="contentinfo">
      <div class="swiss-gutter">
        <span class="gutter-num">${sectionNum}</span>
        <span class="gutter-label">FOOTER</span>
      </div>

      <div class="footer-inner-content">
        <!-- Top Newsletter Strip -->
        <div class="footer-newsletter-bar">
          <div class="fn-left">
            <span class="fn-index">01 // WEEKLY REFLECTIONS</span>
            <h3 class="fn-heading">SUBSCRIBE TO THE TUESDAY GROUNDING LETTER</h3>
            <p class="fn-sub">Curated episode deep-dives, somatic prompts, and certified mental health resources delivered weekly to 34,000+ readers.</p>
          </div>
          <div class="fn-right">
            <form id="footer-nl-form" class="swiss-form-inline">
              <input type="email" id="footer-nl-email" required placeholder="ENTER YOUR EMAIL ADDRESS..." class="swiss-input" />
              <button type="submit" id="footer-nl-btn" class="btn-editorial-pill">SUBSCRIBE ⟶</button>
            </form>
            <span id="footer-nl-msg" class="nl-feedback-text hidden">✓ Subscribed! Welcome to our reflection network.</span>
          </div>
        </div>

        <!-- 4-Column Swiss Sitemap Grid -->
        <div class="footer-sitemap-grid">
          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">01 //</span>
            <h4 class="sitemap-col-title">THE PODCAST</h4>
            <ul class="sitemap-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="episodes.html">Episodes Archive</a></li>
              <li><a href="hosts.html">Meet The Hosts</a></li>
              <li><a href="guests.html">Guest Directory</a></li>
              <li><a href="videos.html">4K Video Channel</a></li>
            </ul>
          </div>

          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">02 //</span>
            <h4 class="sitemap-col-title">PHILOSOPHY</h4>
            <ul class="sitemap-links">
              <li><a href="about.html">Our Story & Ethos</a></li>
              <li><a href="mission.html">Mission & 4 Pillars</a></li>
              <li><a href="mission.html#pledge">Ethical Broadcast Pledge</a></li>
              <li><a href="become-a-guest.html">Become a Guest</a></li>
              <li><a href="become-a-guest.html#faq">Guest FAQ Accordion</a></li>
            </ul>
          </div>

          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">03 //</span>
            <h4 class="sitemap-col-title">SUPPORT & TOOLS</h4>
            <ul class="sitemap-links">
              <li><a href="resources.html">24/7 Crisis Helplines</a></li>
              <li><a href="resources.html#books">Curated Reading List</a></li>
              <li><a href="resources.html#apps">Recommended Wellness Apps</a></li>
              <li><a href="community.html">Listener Testimonials</a></li>
              <li><a href="community.html#social">Community Voices</a></li>
            </ul>
          </div>

          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">04 //</span>
            <h4 class="sitemap-col-title">STUDIOS & INQUIRIES</h4>
            <ul class="sitemap-links">
              <li><a href="contact.html">Seattle Soundstage</a></li>
              <li><a href="contact.html">Brooklyn Soundstage</a></li>
              <li><a href="mailto:press@care2listen.com">Press & Media</a></li>
              <li><a href="mailto:hello@care2listen.com">Listener Inquiries</a></li>
              <li><a href="contact.html">Send Us a Direct Note ↗</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Technical Meta Bar -->
        <div class="footer-meta-bottom-bar">
          <div class="meta-copy-cell">
            <strong>© 2026 CARE 2 LISTEN PODCAST PRACTICE.</strong>
            <span>AN INDEPENDENT BROADCAST LABORATORY. ALL RIGHTS RESERVED.</span>
          </div>

          <div class="meta-clinical-disclaimer">
            NON-CLINICAL EDUCATIONAL STORYTELLING. IF IN ACTIVE DISTRESS, DIAL OR TEXT <strong>988</strong> FOR FREE 24/7 CRISIS SUPPORT.
          </div>

          <div class="meta-actions-cell">
            <span class="meta-coords">SEATTLE 47.6062° N, 122.3321° W</span>
            <button id="back-to-top-btn" class="btn-back-to-top" title="Scroll to top of page">TOP ↑</button>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initFooterEvents(container) {
  const fnForm = container.querySelector("#footer-nl-form");
  const fnEmail = container.querySelector("#footer-nl-email");
  const fnBtn = container.querySelector("#footer-nl-btn");
  const fnMsg = container.querySelector("#footer-nl-msg");

  fnForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!fnEmail.value.includes("@")) return;
    fnBtn.textContent = "SUBSCRIBED!";
    fnMsg?.classList.remove("hidden");
    fnEmail.value = "";
  });

  const topBtn = container.querySelector("#back-to-top-btn");
  topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
