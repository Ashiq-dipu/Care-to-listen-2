export function renderContactView(container) {
  container.innerHTML = `
    <section class="swiss-section" data-section="CONTACT">
      <div class="swiss-gutter">
        <span class="gutter-num">011</span>
        <span class="gutter-label">STUDIO</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">011 // PRODUCTION & PRESS</span>
        <h1 class="view-giant-headline">GET IN TOUCH.</h1>
        <p class="view-lead-copy">Whether you have feedback on an episode, a press inquiry, sponsorship proposal, or a guest suggestion, reach out directly.</p>

        <div class="contact-swiss-grid">
          <form id="contact-form" class="swiss-form" style="padding: 40px;">
            <div class="form-group">
              <label class="form-label">YOUR FULL NAME *</label>
              <input type="text" required placeholder="Alex Mercer" class="form-input" />
            </div>

            <div class="form-group">
              <label class="form-label">EMAIL ADDRESS *</label>
              <input type="email" required placeholder="alex@domain.com" class="form-input" />
            </div>

            <div class="form-group">
              <label class="form-label">SUBJECT / INQUIRY CATEGORY *</label>
              <select class="form-select">
                <option>General Inquiry & Listener Note</option>
                <option>Press & Media Coverage</option>
                <option>Sponsorship & Brand Partnership</option>
                <option>Guest Booking Question</option>
                <option>Audio / Website Technical Issue</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">YOUR MESSAGE *</label>
              <textarea rows="5" required placeholder="What's on your mind?..." class="form-textarea"></textarea>
            </div>

            <button type="submit" id="contact-submit-btn" class="btn-editorial-pill" style="font-size: 0.9rem; padding: 12px 24px; margin-top: 10px;">
              SEND MESSAGE ⟶
            </button>

            <span id="contact-success" class="contact-feedback-msg hidden">✓ Thank you! Your message was sent to Maya and Marcus.</span>
          </form>

          <div class="contact-info-panel">
            <h3 class="info-panel-title">STUDIO LOCATIONS</h3>
            <div class="studio-loc-box">
              <strong>SEATTLE SOUNDSTAGE (PRIMARY)</strong>
              <p>Pike Place Market District, Seattle, WA</p>
            </div>

            <div class="studio-loc-box">
              <strong>BROOKLYN SOUNDSTAGE (SECONDARY)</strong>
              <p>DUMBO Waterfront, Brooklyn, NY</p>
            </div>

            <div class="info-rule"></div>

            <div class="contact-meta-row">
              <span class="c-lbl">DIRECT EMAIL:</span>
              <a href="mailto:hello@care2listen.com" class="c-val">HELLO@CARE2LISTEN.COM</a>
            </div>

            <div class="contact-meta-row">
              <span class="c-lbl">PRESS & MEDIA:</span>
              <a href="mailto:press@care2listen.com" class="c-val">PRESS@CARE2LISTEN.COM</a>
            </div>

            <div class="contact-meta-row">
              <span class="c-lbl">TELEPHONE:</span>
              <span class="c-val">+1 206 555 0192</span>
            </div>

            <div class="contact-meta-row">
              <span class="c-lbl">RESPONSE TIME:</span>
              <span class="c-val" style="color: var(--color-vermilion);">UNDER 48 HOURS (EST)</span>
            </div>

            <div class="info-rule"></div>

            <div class="social-tags-row">
              <a href="https://instagram.com" target="_blank" rel="noopener" class="social-link">INSTAGRAM</a>
              <a href="https://youtube.com" target="_blank" rel="noopener" class="social-link">YOUTUBE</a>
              <a href="https://open.spotify.com" target="_blank" rel="noopener" class="social-link">SPOTIFY</a>
              <a href="https://podcasts.apple.com" target="_blank" rel="noopener" class="social-link">APPLE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = container.querySelector("#contact-form");
  const msg = container.querySelector("#contact-success");
  const btn = container.querySelector("#contact-submit-btn");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = "SENDING...";
    setTimeout(() => {
      btn.textContent = "MESSAGE SENT!";
      msg.classList.remove("hidden");
    }, 600);
  });
}
