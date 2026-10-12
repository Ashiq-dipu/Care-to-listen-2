import { guestFaqs } from "../data/community.js";

export function renderBecomeAGuestView(container) {
  container.innerHTML = `
    <section class="swiss-section" data-section="GUEST_APP">
      <div class="swiss-gutter">
        <span class="gutter-num">008</span>
        <span class="gutter-label">CASTING</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">008 // CASTING & COMMUNITY STORIES</span>
        <h1 class="view-giant-headline">HAVE A STORY? WE WANT TO HEAR IT.</h1>
        <p class="view-lead-copy">Care 2 Listen exists because of real people who refuse to stay silent about what truly matters. If you have lived through trauma, overcome burnout, re-evaluated relationships, or navigated an untold personal journey, our studio is your safe space.</p>

        <!-- 3 Guidelines Cards -->
        <div class="guidelines-card-grid">
          <div class="guideline-card">
            <span class="guideline-num">01</span>
            <h4 class="guideline-title">RADICAL AUTHENTICITY</h4>
            <p class="guideline-text">No corporate scripts or performative optimism. We value honest, grounded lived experiences over polished pitches.</p>
          </div>
          <div class="guideline-card">
            <span class="guideline-num">02</span>
            <h4 class="guideline-title">DIGNITY FIRST</h4>
            <p class="guideline-text">You maintain complete agency over your narrative. We never sensationalize pain or probe beyond your boundaries.</p>
          </div>
          <div class="guideline-card">
            <span class="guideline-num">03</span>
            <h4 class="guideline-title">PRACTICAL HEALING</h4>
            <p class="guideline-text">We connect personal struggles to broader insights and practical resources that empower our global community.</p>
          </div>
        </div>

        <div class="guest-content-split">
          <!-- Application Form Card -->
          <div class="form-wrapper-card">
            <div class="form-header">
              <h3 class="form-title">GUEST APPLICATION FORM</h3>
              <p class="form-subtitle">Fields marked with an asterisk (<span class="req">*</span>) are mandatory.</p>
            </div>

            <form id="guest-form" class="application-form" novalidate>
              <div class="form-grid-2">
                <div class="form-group">
                  <label for="guest-name" class="form-label">FULL NAME <span class="req">*</span></label>
                  <input type="text" id="guest-name" name="name" required placeholder="e.g. Dr. Maya Patel" class="form-input" />
                  <span class="field-error" id="error-name"></span>
                </div>
                
                <div class="form-group">
                  <label for="guest-email" class="form-label">EMAIL ADDRESS <span class="req">*</span></label>
                  <input type="email" id="guest-email" name="email" required placeholder="you@domain.com" class="form-input" />
                  <span class="field-error" id="error-email"></span>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label for="guest-phone" class="form-label">PHONE NUMBER (OPTIONAL)</label>
                  <input type="tel" id="guest-phone" name="phone" placeholder="+1 (555) 000-0000" class="form-input" />
                </div>

                <div class="form-group">
                  <label for="guest-location" class="form-label">LOCATION (CITY, COUNTRY)</label>
                  <input type="text" id="guest-location" name="location" placeholder="e.g. London, UK or Austin, TX" class="form-input" />
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label for="guest-occupation" class="form-label">OCCUPATION / FIELD OF EXPERTISE</label>
                  <input type="text" id="guest-occupation" name="occupation" placeholder="e.g. Somatic Therapist, Artist, Caregiver" class="form-input" />
                </div>

                <div class="form-group">
                  <label for="guest-links" class="form-label">SOCIAL MEDIA OR WEBSITE LINKS</label>
                  <input type="url" id="guest-links" name="links" placeholder="https://instagram.com/yourhandle" class="form-input" />
                </div>
              </div>

              <div class="form-group">
                <label for="guest-topic" class="form-label">TOPIC OR CORE THEME <span class="req">*</span></label>
                <input type="text" id="guest-topic" name="topic" required placeholder="e.g. Recovering identity after caregiving burnout" class="form-input" />
                <span class="field-error" id="error-topic"></span>
              </div>

              <div class="form-group">
                <div class="label-with-counter">
                  <label for="guest-story" class="form-label">BRIEF SUMMARY OF YOUR STORY <span class="req">*</span></label>
                  <span class="word-counter" id="word-count-badge">0 / 300 words</span>
                </div>
                <textarea id="guest-story" name="story" rows="5" required placeholder="Tell us what you lived through, what you learned, and the message you wish to share..." class="form-textarea"></textarea>
                <span class="field-error" id="error-story"></span>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label for="guest-comfort" class="form-label">COMFORT LEVEL ON SENSITIVE TOPICS</label>
                  <select id="guest-comfort" class="form-select">
                    <option value="open">Fully open to discuss any dimension</option>
                    <option value="some-boundaries">Open with specific agreed boundaries</option>
                    <option value="anonymous">Prefer identity/name to be disguised</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="guest-format" class="form-label">RECORDING PREFERENCE</label>
                  <select id="guest-format" class="form-select">
                    <option value="studio-seattle">In-Person (Seattle Studio)</option>
                    <option value="studio-brooklyn">In-Person (Brooklyn Studio)</option>
                    <option value="remote-video">Remote High-Def Video (Riverside)</option>
                    <option value="audio-only">Audio-Only (Voice Call / Studio Feed)</option>
                  </select>
                </div>
              </div>

              <div class="form-checkbox-group">
                <label class="checkbox-container">
                  <input type="checkbox" id="consent-check" required />
                  <span class="checkbox-label">I consent to being contacted by the Care 2 Listen editorial team regarding this application. <span class="req">*</span></span>
                </label>
                <span class="field-error" id="error-consent"></span>
              </div>

              <div class="form-submit-row">
                <button type="submit" id="submit-application-btn" class="btn-editorial-pill" style="font-size: 0.9rem; padding: 12px 24px;">
                  SUBMIT GUEST APPLICATION ⟶
                </button>
              </div>
            </form>

            <div id="form-success-message" class="form-success-card hidden">
              <div class="success-icon-wrap">✓</div>
              <h3 class="success-title">APPLICATION RECEIVED.</h3>
              <p class="success-text">Thank you for trusting us with your story. Marcus, Maya, and our editorial committee review every submission with intentional care. We will reach out via email within 5 business days.</p>
              <button id="reset-form-btn" class="btn-swiss-notes">SUBMIT ANOTHER STORY</button>
            </div>
          </div>

          <!-- FAQ Accordion Sidebar -->
          <div class="faq-sidebar">
            <div class="faq-card-sticky">
              <div class="faq-header">
                <span class="section-idx">HELP & PROCESS</span>
                <h3 class="faq-title">FREQUENTLY ASKED QUESTIONS</h3>
              </div>

              <div class="accordion-list">
                ${guestFaqs.map((faq, idx) => `
                  <div class="accordion-item" data-faq="${idx}">
                    <button class="accordion-trigger" aria-expanded="${idx === 0}">
                      <span class="accordion-q">${faq.q}</span>
                      <span class="accordion-icon">${idx === 0 ? '−' : '+'}</span>
                    </button>
                    <div class="accordion-panel ${idx === 0 ? 'open' : ''}">
                      <p class="accordion-text">${faq.a}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach accordion handlers
  const accordionItems = container.querySelectorAll(".accordion-item");
  accordionItems.forEach(item => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    const icon = item.querySelector(".accordion-icon");

    trigger?.addEventListener("click", () => {
      const isOpen = panel.classList.contains("open");
      accordionItems.forEach(other => {
        other.querySelector(".accordion-panel")?.classList.remove("open");
        const otherIcon = other.querySelector(".accordion-icon");
        if (otherIcon) otherIcon.textContent = "+";
      });

      if (!isOpen) {
        panel.classList.add("open");
        if (icon) icon.textContent = "−";
      }
    });
  });

  // Story word counter
  const storyTextarea = container.querySelector("#guest-story");
  const wordCountBadge = container.querySelector("#word-count-badge");

  storyTextarea?.addEventListener("input", () => {
    const words = storyTextarea.value.trim().split(/\s+/).filter(Boolean);
    const count = storyTextarea.value.trim() === "" ? 0 : words.length;
    if (wordCountBadge) {
      wordCountBadge.textContent = `${count} / 300 words`;
      if (count > 300) {
        wordCountBadge.classList.add("word-limit-exceeded");
      } else {
        wordCountBadge.classList.remove("word-limit-exceeded");
      }
    }
  });

  // Form submission
  const form = container.querySelector("#guest-form");
  const successCard = container.querySelector("#form-success-message");
  const resetBtn = container.querySelector("#reset-form-btn");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = form.querySelector("#guest-name");
    const emailInput = form.querySelector("#guest-email");
    const topicInput = form.querySelector("#guest-topic");
    const storyInput = form.querySelector("#guest-story");
    const consentInput = form.querySelector("#consent-check");

    if (!nameInput.value.trim() || !emailInput.value.includes("@") || !topicInput.value.trim() || !storyInput.value.trim() || !consentInput.checked) {
      alert("Please complete all mandatory fields (*)");
      return;
    }

    form.classList.add("hidden");
    successCard.classList.remove("hidden");
  });

  resetBtn?.addEventListener("click", () => {
    form.reset();
    form.classList.remove("hidden");
    successCard.classList.add("hidden");
    if (wordCountBadge) wordCountBadge.textContent = "0 / 300 words";
  });
}
