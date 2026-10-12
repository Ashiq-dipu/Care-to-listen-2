import gsap from "gsap";
import { guestFaqs } from "../data/community.js";

export function renderBecomeAGuestSection() {
  const container = document.getElementById("guest-application-container");
  if (!container) return;

  container.innerHTML = `
    <div class="guest-hero-banner">
      <div class="editorial-badge">008 // CASTING & STORIES</div>
      <h1 class="page-headline">Have a Story Worth Telling? <br/><span class="text-accent">We Care Enough to Listen.</span></h1>
      <p class="page-subhead">
        Care 2 Listen exists because of real people who refuse to stay silent about what truly matters.
        If you have lived through trauma, overcome burnout, re-evaluated relationships, or navigated an untold personal journey, our studio is your safe space.
      </p>

      <div class="guidelines-card-grid">
        <div class="guideline-card">
          <div class="guideline-num">01</div>
          <h4 class="guideline-title">Radical Authenticity</h4>
          <p class="guideline-text">No corporate scripts or performative optimism. We value honest, grounded lived experiences over polished pitches.</p>
        </div>
        <div class="guideline-card">
          <div class="guideline-num">02</div>
          <h4 class="guideline-title">Dignity First</h4>
          <p class="guideline-text">You maintain complete agency over your narrative. We never sensationalize pain or probe beyond your boundaries.</p>
        </div>
        <div class="guideline-card">
          <div class="guideline-num">03</div>
          <h4 class="guideline-title">Practical Healing</h4>
          <p class="guideline-text">We connect personal struggles to broader insights and practical resources that empower our global community.</p>
        </div>
      </div>
    </div>

    <div class="guest-content-split">
      <div class="form-wrapper-card">
        <div class="form-header">
          <h3 class="form-title">Guest Application Form</h3>
          <p class="form-subtitle">Fields marked with an asterisk (<span class="req">*</span>) are mandatory.</p>
        </div>

        <form id="guest-form" class="application-form" novalidate>
          <div class="form-grid-2">
            <div class="form-group">
              <label for="guest-name" class="form-label">Full Name <span class="req">*</span></label>
              <input type="text" id="guest-name" name="name" required placeholder="e.g. Dr. Maya Patel" class="form-input" />
              <span class="field-error" id="error-name"></span>
            </div>
            
            <div class="form-group">
              <label for="guest-email" class="form-label">Email Address <span class="req">*</span></label>
              <input type="email" id="guest-email" name="email" required placeholder="you@domain.com" class="form-input" />
              <span class="field-error" id="error-email"></span>
            </div>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label for="guest-phone" class="form-label">Phone Number (Optional)</label>
              <input type="tel" id="guest-phone" name="phone" placeholder="+1 (555) 000-0000" class="form-input" />
            </div>

            <div class="form-group">
              <label for="guest-location" class="form-label">Location (City, Country)</label>
              <input type="text" id="guest-location" name="location" placeholder="e.g. London, UK or Austin, TX" class="form-input" />
            </div>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label for="guest-occupation" class="form-label">Occupation / Area of Expertise</label>
              <input type="text" id="guest-occupation" name="occupation" placeholder="e.g. Somatic Therapist, Artist, Caregiver" class="form-input" />
            </div>

            <div class="form-group">
              <label for="guest-links" class="form-label">Social Media or Website Links</label>
              <input type="url" id="guest-links" name="links" placeholder="https://instagram.com/yourhandle" class="form-input" />
            </div>
          </div>

          <div class="form-group">
            <label for="guest-topic" class="form-label">Topic or Core Theme You'd Like to Discuss <span class="req">*</span></label>
            <input type="text" id="guest-topic" name="topic" required placeholder="e.g. Recovering identity after caregiving burnout" class="form-input" />
            <span class="field-error" id="error-topic"></span>
          </div>

          <div class="form-group">
            <div class="label-with-counter">
              <label for="guest-story" class="form-label">Brief Summary of Your Story <span class="req">*</span></label>
              <span class="word-counter" id="word-count-badge">0 / 300 words</span>
            </div>
            <textarea id="guest-story" name="story" rows="5" required placeholder="Tell us in your own words what you lived through, what you learned, and what message you wish to share with someone in the dark..." class="form-textarea"></textarea>
            <span class="field-error" id="error-story"></span>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Have you been on a podcast before?</label>
              <div class="radio-pill-group">
                <label class="radio-pill">
                  <input type="radio" name="podcast-exp" value="yes" />
                  <span>Yes, I have</span>
                </label>
                <label class="radio-pill">
                  <input type="radio" name="podcast-exp" value="no" checked />
                  <span>No, this is my first</span>
                </label>
              </div>
            </div>

            <div class="form-group">
              <label for="guest-format" class="form-label">Preferred Recording Format</label>
              <select id="guest-format" name="format" class="form-select">
                <option value="remote-video">Remote Video (Studio riverside.fm)</option>
                <option value="in-person">In-Person (Seattle or NYC Soundstage)</option>
                <option value="audio-only">Audio-Only (Voice Call / Studio Feed)</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="guest-availability" class="form-label">Your General Availability</label>
            <input type="text" id="guest-availability" name="availability" placeholder="e.g. Weekday evenings (PST) or Saturday mornings" class="form-input" />
          </div>

          <div class="form-group">
            <label for="guest-notes" class="form-label">Anything else we should know?</label>
            <input type="text" id="guest-notes" name="notes" placeholder="Accessibility needs, sensitive topics, or scheduling nuances" class="form-input" />
          </div>

          <div class="form-checkbox-group">
            <label class="checkbox-container">
              <input type="checkbox" id="consent-check" required />
              <span class="checkbox-checkmark"></span>
              <span class="checkbox-label">I consent to being contacted by the Care 2 Listen editorial team regarding this guest application. <span class="req">*</span></span>
            </label>
            <span class="field-error" id="error-consent"></span>
          </div>

          <div class="form-submit-row">
            <button type="submit" id="submit-application-btn" class="btn btn-primary btn-lg">
              <span>Submit Guest Application</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <span class="form-security-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Your personal information is kept strictly confidential.
            </span>
          </div>
        </form>

        <div id="form-success-message" class="form-success-card hidden">
          <div class="success-icon-wrap">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 class="success-title">Thank You For Trusting Us With Your Story</h3>
          <p class="success-text">Your application has been received by Maya and Marcus. Our editorial committee reviews every submission with intentional care. We will reach out via email within 5 business days.</p>
          <button id="reset-form-btn" class="btn btn-secondary">Submit Another Story</button>
        </div>
      </div>

      <div class="faq-sidebar">
        <div class="faq-card-sticky">
          <div class="faq-header">
            <span class="badge badge-accent">HELP & PROCESS</span>
            <h3 class="faq-title">Frequently Asked Questions</h3>
            <p class="faq-subtitle">Everything you need to know about stepping up to the mic.</p>
          </div>

          <div class="accordion-list">
            ${guestFaqs.map((faq, idx) => `
              <div class="accordion-item" data-faq="${idx}">
                <button class="accordion-trigger" aria-expanded="${idx === 0}">
                  <span class="accordion-q">${faq.q}</span>
                  <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-panel ${idx === 0 ? 'open' : ''}">
                  <p class="accordion-text">${faq.a}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="host-encouragement-card">
            <div class="quote-symbol">“</div>
            <p class="encouragement-text">
              “You don't need to have arrived at a neat ending to share your truth. Healing is messy, and honest work happens in the middle.”
            </p>
            <div class="host-signature">
              <span class="signature-name">Maya Lin & Marcus Vance</span>
              <span class="signature-role">Co-Hosts, Care 2 Listen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach Accordion Logic
  const accordionItems = container.querySelectorAll(".accordion-item");
  accordionItems.forEach(item => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    const icon = item.querySelector(".accordion-icon");

    trigger?.addEventListener("click", () => {
      const isOpen = panel.classList.contains("open");

      // Close all
      accordionItems.forEach(other => {
        other.querySelector(".accordion-panel")?.classList.remove("open");
        const otherIcon = other.querySelector(".accordion-icon");
        if (otherIcon) otherIcon.textContent = "+";
        other.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        panel.classList.add("open");
        if (icon) icon.textContent = "−";
        trigger.setAttribute("aria-expanded", "true");
        gsap.from(panel, { opacity: 0, y: -6, duration: 0.25, ease: "power2.out" });
      }
    });
  });

  // Word counter
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

  // Form submission handler
  const form = container.querySelector("#guest-form");
  const successCard = container.querySelector("#form-success-message");
  const resetBtn = container.querySelector("#reset-form-btn");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic client validation
    let valid = true;
    const nameInput = form.querySelector("#guest-name");
    const emailInput = form.querySelector("#guest-email");
    const topicInput = form.querySelector("#guest-topic");
    const storyInput = form.querySelector("#guest-story");
    const consentInput = form.querySelector("#consent-check");

    const errorName = form.querySelector("#error-name");
    const errorEmail = form.querySelector("#error-email");
    const errorTopic = form.querySelector("#error-topic");
    const errorStory = form.querySelector("#error-story");
    const errorConsent = form.querySelector("#error-consent");

    [errorName, errorEmail, errorTopic, errorStory, errorConsent].forEach(el => {
      if (el) el.textContent = "";
    });

    if (!nameInput.value.trim()) {
      if (errorName) errorName.textContent = "Please provide your name";
      valid = false;
    }

    if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
      if (errorEmail) errorEmail.textContent = "Please provide a valid email address";
      valid = false;
    }

    if (!topicInput.value.trim()) {
      if (errorTopic) errorTopic.textContent = "Please state your proposed topic";
      valid = false;
    }

    const words = storyInput.value.trim().split(/\s+/).filter(Boolean);
    if (!storyInput.value.trim()) {
      if (errorStory) errorStory.textContent = "Please summarize your story";
      valid = false;
    } else if (words.length > 300) {
      if (errorStory) errorStory.textContent = "Please keep your story summary under 300 words";
      valid = false;
    }

    if (!consentInput.checked) {
      if (errorConsent) errorConsent.textContent = "Please check the consent box to proceed";
      valid = false;
    }

    if (!valid) return;

    // Simulate submission with button state
    const submitBtn = form.querySelector("#submit-application-btn");
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Submitting Application...</span>`;

    setTimeout(() => {
      gsap.to(form, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
          form.classList.add("hidden");
          successCard.classList.remove("hidden");
          gsap.fromTo(successCard, { opacity: 0, scale: 0.95, y: 15 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" });
        }
      });
    }, 900);
  });

  resetBtn?.addEventListener("click", () => {
    form.reset();
    form.classList.remove("hidden");
    successCard.classList.add("hidden");
    const submitBtn = form.querySelector("#submit-application-btn");
    submitBtn.disabled = false;
    submitBtn.innerHTML = `
      <span>Submit Guest Application</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    `;
    if (wordCountBadge) wordCountBadge.textContent = "0 / 300 words";
    gsap.fromTo(form, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
  });
}
