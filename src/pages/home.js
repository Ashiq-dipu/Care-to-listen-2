import { episodes } from "../data/episodes.js";
import { audioPlayer } from "../components/audioPlayer.js";

export function renderHomeView(container) {
  const latestEp = episodes[0];

  container.innerHTML = `
    <!-- SECTION 001: HERO SECTION WITH SCROLL-DRIVEN IMAGE SWITCH -->
    <section class="swiss-section hero-swiss-section" data-section="001">
      <div class="swiss-gutter">
        <span class="gutter-num">001</span>
        <span class="gutter-dash">-001</span>
      </div>

      <div class="swiss-hero-grid">
        <div class="hero-left-col">
          <div class="hero-title-group">
            <h1 class="hero-giant-title">
              STORIES<br/>
              MADE<br/>
              <span class="text-vermilion">HEALING.</span>
            </h1>

            <div class="hero-dash-rule">
              <span class="dash-text">-001</span>
              <span class="dash-line"></span>
            </div>
          </div>

          <div class="hero-lead-group">
            <p class="hero-editorial-bio">
              An independent audio sanctuary shaping honest conversations, digital experiences, and visual culture.
            </p>

            <div class="hero-meta-block">
              <span class="meta-label">SELECTED WORK / 2026</span>
              <span class="meta-tags">SOMATIC · GRIEF · IDENTITY · HUMAN CONDITION</span>
            </div>

            <div class="hero-actions-row">
              <a href="episodes.html" class="link-editorial-arrow">View Selected Work ↘</a>
              <button id="hero-listen-trigger" class="btn-editorial-pill">
                <span class="play-triangle">▶</span>
                <span>Listen to Latest (Ep #${latestEp.number})</span>
              </button>
            </div>
          </div>
        </div>

        <div class="hero-right-cover">
          <div class="collage-top-bar">
            <span class="crosshair-mark">+</span>
            <span class="studio-tag" id="hero-studio-tag">AW / 26 — STUDIO 01</span>
            <span class="crosshair-mark right-mark">+</span>
          </div>

          <div class="hero-cover-visual">
            <div class="hero-cover-img-wrap">
              <!-- Initial Image: Meaningful Listening with Dr. Elena -->
              <img src="/assets/hero_meaningful_listening.jpg" alt="Care 2 Listen soundstage — empathetic dialogue and active listening" class="hero-cover-img hero-img-listening" />
              <!-- Scroll Switch Image: Cinematic Soundstage Studio -->
              <img src="/assets/hero_studio_wide.jpg" alt="Care 2 Listen recording studio soundstage" class="hero-cover-img hero-img-studio" />
            </div>
            <div class="hero-yellow-strip"></div>

            <div class="hero-cover-coords">
              <span class="coord-text">47.6062° N<br/>122.3321° W</span>
              <span class="crosshair-mark">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 002: MANIFESTO & PROCESS -->
    <section class="swiss-section manifesto-swiss-section" data-section="002">
      <div class="swiss-gutter">
        <span class="gutter-num">002</span>
      </div>

      <div class="manifesto-inner-grid">
        <div class="manifesto-headline-col">
          <h2 class="manifesto-giant-headline">
            WE CREATE IDENTITIES /<br/>
            DIGITAL EXPERIENCES /<br/>
            VISUAL CULTURE /<br/>
            HONEST CONVERSATIONS.
          </h2>
        </div>

        <div class="manifesto-desc-col">
          <p class="manifesto-desc-text">
            Care 2 Listen operates as a weekly sonic laboratory exploring grief, healing, trauma, and identity. We believe listening is an intentional craft — stripping away corporate gloss to reveal raw human truths.
          </p>
          <a href="about.html" class="link-editorial-arrow" style="margin-top: 20px; display: inline-block;">Our Complete Philosophy ↗</a>
        </div>

        <!-- 4 Step Process Horizontal Bar -->
        <div class="manifesto-process-bar">
          <div class="process-col">
            <span class="p-step-num">01 / INTAKE</span>
            <p class="p-step-desc">Identifying unresolved narratives through confidential community submissions.</p>
          </div>
          <div class="process-col">
            <span class="p-step-num">02 / DIALOGUE</span>
            <p class="p-step-desc">Unscripted studio sessions in Seattle and Brooklyn with zero corporate filters.</p>
          </div>
          <div class="process-col">
            <span class="p-step-num">03 / HARMONY</span>
            <p class="p-step-desc">Binaural spatial mastering designed for intimate headphone contemplation.</p>
          </div>
          <div class="process-col">
            <span class="p-step-num">04 / DISPATCH</span>
            <p class="p-step-desc">Weekly worldwide broadcast accompanied by clinical toolkits and crisis support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 003: 4 EDITORIAL VERTICAL COLUMNS -->
    <section class="swiss-section columns-swiss-section" data-section="003">
      <div class="swiss-gutter">
        <span class="gutter-num">003</span>
      </div>

      <div class="columns-quad-grid">
        <!-- COL 01: ARCHIVE -->
        <div class="quad-col col-archive">
          <div class="col-head">
            <span class="col-idx">01</span>
            <span class="col-label">ARCHIVE // 108 EPS</span>
          </div>

          <div class="col-media-frame">
            <img src="/assets/card_01_arch.jpg" alt="Episode Archive" class="col-img" />
          </div>

          <div class="col-content">
            <h3 class="col-title">DEEP CATALOGUE</h3>
            <p class="col-copy">Over 108 recorded hours spanning ambiguous loss, sibling estrangement, and creative resurrection.</p>
            <a href="episodes.html" class="col-action-link">Explore Episodes ⟶</a>
          </div>
        </div>

        <!-- COL 02: GUESTS (COBALT BLUE CARD) -->
        <div class="quad-col col-blue">
          <div class="col-head">
            <span class="col-idx">02</span>
            <span class="col-label">VOICES // 2026</span>
          </div>

          <div class="col-media-frame">
            <img src="/assets/card_02_aura.jpg" alt="Guests spotlight" class="col-img" />
          </div>

          <div class="col-content">
            <h3 class="col-title text-white">GUEST ROSTER</h3>
            <p class="col-copy text-white-dim">Psychologists, poets, somatic healers, and everyday people with extraordinary courage.</p>
            <a href="guests.html" class="col-action-link link-white">Meet The Guests ⟶</a>
          </div>
        </div>

        <!-- COL 03: MISSION (VERMILION RED CARD) -->
        <div class="quad-col col-vermilion">
          <div class="col-head">
            <span class="col-idx">03</span>
            <span class="col-label">PLEDGE // 24/7</span>
          </div>

          <div class="col-media-frame">
            <img src="/assets/card_03_cutout.jpg" alt="Our Mission" class="col-img" />
          </div>

          <div class="col-content">
            <h3 class="col-title text-white">ETHICAL CARE</h3>
            <p class="col-copy text-white-dim">A radical pledge to never sensationalize trauma or exploit human vulnerability for algorithms.</p>
            <a href="mission.html" class="col-action-link link-white">Read Our Mission ⟶</a>
          </div>
        </div>

        <!-- COL 04: STUDIO/HOSTS (ACID YELLOW CARD) -->
        <div class="quad-col col-hosts">
          <div class="col-head">
            <span class="col-idx">04</span>
            <span class="col-label">SOUNDSTAGE</span>
          </div>

          <div class="col-media-frame">
            <img src="/assets/card_04_zine.jpg" alt="Soundstage & Hosts" class="col-img" />
          </div>

          <div class="col-content">
            <h3 class="col-title">THE HOSTS</h3>
            <p class="col-copy">Maya Lin and Marcus Vance bring clinical nuance and investigative warmth to the broadcast desk.</p>
            <a href="hosts.html" class="col-action-link">Meet Hosts ⟶</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 004: FULL-BLEED SLOGAN STRIP -->
    <section class="swiss-section banner-swiss-section" data-section="004">
      <div class="swiss-gutter dark-gutter">
        <span class="gutter-num" style="color: #fff;">004</span>
      </div>

      <div class="banner-slogan-wrap">
        <div class="banner-slogan-top">
          <span class="banner-giant-text">
            LISTEN ─ HEAL ─ GROW ─ CARE 2 LISTEN ─ LISTEN ─ HEAL ─ GROW
          </span>
        </div>
        <div class="banner-sub-meta">
          <span>BROADCAST SOUNDSTAGE // SEATTLE WA 98101</span>
          <span>DUMBO BROOKLYN 11201</span>
          <span>108 EPISODES RELEASED // 24/7 CRISIS SUPPORT</span>
        </div>
      </div>
    </section>

    <!-- SECTION 005: CALL TO ACTION & STUDIO CONTACT STRIP -->
    <section class="swiss-section cta-swiss-section" data-section="005">
      <div class="swiss-gutter">
        <span class="gutter-num">005</span>
      </div>

      <div class="cta-inner-grid">
        <!-- Col 1: B&W Soundstage Portrait -->
        <div class="cta-portrait-col">
          <span class="crosshair-mark">+</span>
          <img src="/assets/card_05_bw.jpg" alt="Studio Soundstage Portrait" class="cta-bw-img" />
          <div class="portrait-caption">STUDIO DESK // 2026</div>
        </div>

        <!-- Col 2: Headline & CTA Button -->
        <div class="cta-lead-col">
          <span class="cta-mini-label">HAVE A STORY TO SHARE?</span>
          <h2 class="cta-headline">
            LET'S BUILD<br/>
            SOMETHING<br/>
            EXTRAORDINARY<br/>
            TOGETHER.
          </h2>
          <a href="become-a-guest.html" class="link-start-project">Apply to Be a Guest on Care 2 Listen ↗</a>
        </div>

        <!-- Col 3: Studio Directory & Socials -->
        <div class="cta-info-col">
          <div class="info-block">
            <span class="info-lbl">SEATTLE STUDIO (PRIMARY)</span>
            <p class="info-val">Pike Place Soundstage<br/>Seattle, WA 98101</p>
          </div>

          <div class="info-block">
            <span class="info-lbl">BROOKLYN SOUNDSTAGE</span>
            <p class="info-val">DUMBO Water Street<br/>Brooklyn, NY 11201</p>
          </div>

          <div class="info-block">
            <span class="info-lbl">DIRECT PRODUCTION INQUIRIES</span>
            <p class="info-val"><a href="mailto:hello@care2listen.com">hello@care2listen.com</a></p>
          </div>

          <div class="info-social-block">
            <a href="https://instagram.com" target="_blank" rel="noopener" class="social-link">INSTAGRAM ↗</a>
            <a href="https://youtube.com" target="_blank" rel="noopener" class="social-link">YOUTUBE ↗</a>
            <a href="https://open.spotify.com" target="_blank" rel="noopener" class="social-link">SPOTIFY ↗</a>
            <a href="https://podcasts.apple.com" target="_blank" rel="noopener" class="social-link">APPLE ↗</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 006: MASTER SWISS BRUTALIST FOOTER -->
    <footer class="swiss-section footer-swiss-section" data-section="006" role="contentinfo">
      <div class="swiss-gutter">
        <span class="gutter-num">006</span>
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

  // Attach listen trigger to latest episode
  const listenBtn = container.querySelector("#hero-listen-trigger");
  listenBtn?.addEventListener("click", () => {
    audioPlayer.playEpisode(latestEp);
  });

  // Footer newsletter submission
  const fnForm = container.querySelector("#footer-nl-form");
  const fnEmail = container.querySelector("#footer-nl-email");
  const fnBtn = container.querySelector("#footer-nl-btn");
  const fnMsg = container.querySelector("#footer-nl-msg");

  fnForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!fnEmail.value.includes("@")) return;
    fnBtn.textContent = "SUBSCRIBED!";
    fnMsg.classList.remove("hidden");
    fnEmail.value = "";
  });

  // Back to top smooth scroll
  const topBtn = container.querySelector("#back-to-top-btn");
  topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
