import { submitEpisodePitch } from "../data/submissions.js";
import { categories } from "../data/episodes.js";

const PITCH_AVATAR_PRESETS = [
  { name: "Dr. Elena (Clinical)", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
  { name: "Julian (Tech/Founder)", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
  { name: "Amara (Poet/Advocate)", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Kiran (Family Mediation)", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
  { name: "Hannah (Caregiver)", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" },
  { name: "Tariq (Recovery Counselor)", url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80" }
];

export function renderRequestEpisodeView(container) {
  container.innerHTML = `
    <!-- SECTION 008: REQUEST AN EPISODE PITCH -->
    <section class="swiss-section request-episode-section" data-section="008">
      <div class="swiss-gutter">
        <span class="gutter-num">008</span>
        <span class="gutter-label">PROPOSAL</span>
      </div>

      <div class="view-header-strip">
        <div class="cms-top-breadcrumbs">
          <span class="view-sub-label">008 // GUEST BROADCAST APPLICATION</span>
          <span class="live-sync-indicator"><span class="rec-blink-dot" style="background: var(--color-vermilion);"></span> SUBMISSIONS OPEN</span>
        </div>

        <div class="cms-headline-row">
          <div>
            <h1 class="view-giant-headline">REQUEST AN EPISODE.</h1>
            <p class="view-lead-copy">
              Have an unscripted story, clinical insight, or transformative human experience to share? Pitch a conversation to Care 2 Listen. Every submission enters our editorial review queue for host review.
            </p>
          </div>
          <div class="cms-primary-cta-group">
            <a href="episodes.html" class="btn-cms-secondary">
              BROWSE ARCHIVE ↗
            </a>
          </div>
        </div>

        <!-- FORM CONTAINER -->
        <div style="max-width: 920px; margin: 32px 0; background: #ffffff; border: 2px solid var(--border-black); box-shadow: 6px 6px 0 var(--border-black); padding: 36px 32px;">
          <div style="border-bottom: 2px solid var(--border-black); padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 800; color: var(--color-vermilion); letter-spacing: 0.08em; display: block;">PROPOSAL SPECIFICATION</span>
              <h2 style="font-family: var(--font-sub); font-size: 1.35rem; font-weight: 800; margin: 4px 0 0; color: #0d0d0d;">SUBMIT GUEST & EPISODE PROPOSAL</h2>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #666; font-weight: 600;">AVERAGE REVIEW TIME: 48-72 HOURS</span>
          </div>

          <form id="request-episode-form" style="display: flex; flex-direction: column; gap: 20px;">
            <!-- Core Proposal Details -->
            <div class="cms-form-grid-2">
              <div class="form-group">
                <label class="form-label" for="req-title">PROPOSED EPISODE TITLE / THEME <span class="req">*</span></label>
                <input type="text" id="req-title" required class="form-input" placeholder="e.g. Somatic Healing After Chronic Burnout" />
              </div>

              <div class="form-group">
                <label class="form-label" for="req-cat">TOPIC CATEGORY <span class="req">*</span></label>
                <select id="req-cat" required class="form-input">
                  ${categories.filter(c => c !== 'All').map(c => `<option value="${c}">${c.toUpperCase()}</option>`).join('')}
                  <option value="Philosophy">PHILOSOPHY</option>
                  <option value="Somatic">SOMATIC</option>
                  <option value="Identity">IDENTITY</option>
                </select>
              </div>
            </div>

            <div class="cms-form-grid-3">
              <div class="form-group">
                <label class="form-label" for="req-name">YOUR FULL NAME <span class="req">*</span></label>
                <input type="text" id="req-name" required class="form-input" placeholder="e.g. Dr. Jordan Reed" />
              </div>

              <div class="form-group">
                <label class="form-label" for="req-role">YOUR ROLE / CREDENTIALS <span class="req">*</span></label>
                <input type="text" id="req-role" required class="form-input" placeholder="e.g. Somatic Clinician & Author" />
              </div>

              <div class="form-group">
                <label class="form-label" for="req-email">CONTACT EMAIL <span class="req">*</span></label>
                <input type="email" id="req-email" required class="form-input" placeholder="jordan@domain.com" />
              </div>
            </div>

            <!-- Avatar & Presets -->
            <div class="form-group">
              <label class="form-label" for="req-avatar">PORTRAIT / HEADSHOT IMAGE URL</label>
              <div style="display: flex; gap: 12px; align-items: center;">
                <input type="url" id="req-avatar" class="form-input" placeholder="https://images.unsplash.com/..." value="${PITCH_AVATAR_PRESETS[0].url}" />
                <div style="width: 50px; height: 50px; border: 1.5px solid var(--border-black); background: #111; flex-shrink: 0; overflow: hidden;">
                  <img id="req-avatar-preview" src="${PITCH_AVATAR_PRESETS[0].url}" alt="Preview" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />
                </div>
              </div>
              <div style="margin-top: 8px;">
                <span style="font-family: var(--font-mono); font-size: 0.65rem; color: #666; font-weight: 700;">OR SELECT PRESET AVATAR:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;">
                  ${PITCH_AVATAR_PRESETS.map(p => `
                    <button type="button" class="btn-preset-avatar req-preset-btn" data-url="${p.url}">${p.name}</button>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Bio -->
            <div class="form-group">
              <label class="form-label" for="req-bio">BRIEF GUEST BIO</label>
              <textarea id="req-bio" rows="2" class="form-textarea" placeholder="Brief 2-3 sentences about your background, clinical work, or lived experience..."></textarea>
            </div>

            <!-- Episode Pitch Summary -->
            <div class="form-group">
              <label class="form-label" for="req-summary">CONVERSATION SUMMARY / WHY THIS MATTERS <span class="req">*</span></label>
              <textarea id="req-summary" required rows="4" class="form-textarea" placeholder="Describe the core dialogue, unscripted moments, and philosophical questions you would like to explore..."></textarea>
            </div>

            <!-- Proposed Key Takeaways -->
            <div class="form-group">
              <label class="form-label">KEY TAKEAWAYS FOR LISTENERS (1-3 BULLETS)</label>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <input type="text" class="form-input req-takeaway" placeholder="Takeaway 1: Core insight or somatic technique..." />
                <input type="text" class="form-input req-takeaway" placeholder="Takeaway 2: Practical self-regulation lesson..." />
                <input type="text" class="form-input req-takeaway" placeholder="Takeaway 3: Reflection prompt (optional)..." />
              </div>
            </div>

            <!-- Submission Feedback Notice -->
            <div id="req-feedback-box" class="hidden" style="padding: 16px; border: 1.5px solid var(--border-black); font-family: var(--font-mono); font-size: 0.8rem;"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1.5px solid var(--border-black); padding-top: 20px; flex-wrap: wrap; gap: 14px;">
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #555;">All accepted pitches will be reviewed in the studio queue.</span>
              <button type="submit" id="btn-submit-pitch" class="btn-cms-primary" style="padding: 12px 28px; font-size: 0.82rem;">
                SUBMIT EPISODE PROPOSAL ⟶
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;

  // Preset button logic
  const avatarInput = container.querySelector("#req-avatar");
  const avatarPreview = container.querySelector("#req-avatar-preview");
  container.querySelectorAll(".req-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      if (avatarInput) avatarInput.value = url;
      if (avatarPreview) avatarPreview.src = url;
    });
  });

  avatarInput?.addEventListener("input", (e) => {
    if (avatarPreview) {
      avatarPreview.src = e.target.value.trim() || "/assets/hero_meaningful_listening.jpg";
    }
  });

  // Submit handler
  const form = container.querySelector("#request-episode-form");
  const feedbackBox = container.querySelector("#req-feedback-box");
  const submitBtn = container.querySelector("#btn-submit-pitch");

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = container.querySelector("#req-title")?.value.trim();
    const category = container.querySelector("#req-cat")?.value.trim() || "Mental Health";
    const name = container.querySelector("#req-name")?.value.trim();
    const role = container.querySelector("#req-role")?.value.trim();
    const email = container.querySelector("#req-email")?.value.trim();
    const avatar = container.querySelector("#req-avatar")?.value.trim() || PITCH_AVATAR_PRESETS[0].url;
    const bio = container.querySelector("#req-bio")?.value.trim() || "";
    const summary = container.querySelector("#req-summary")?.value.trim();

    const takeaways = [];
    container.querySelectorAll(".req-takeaway").forEach(t => {
      const val = t.value.trim();
      if (val) takeaways.push(val);
    });

    if (!title || !name || !role || !email || !summary) {
      alert("Please fill in all required fields.");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "SUBMITTING PROPOSAL...";

    const result = await submitEpisodePitch({
      title,
      category,
      duration: "50 min",
      guest: {
        name,
        role,
        email,
        avatar,
        bio
      },
      summary,
      takeaways: takeaways.length ? takeaways : ["Core conversation insight."],
      status: "pending"
    });

    submitBtn.disabled = false;
    submitBtn.textContent = "SUBMIT EPISODE PROPOSAL ⟶";

    if (result.success) {
      form.reset();
      feedbackBox.className = "";
      feedbackBox.style.background = "#eef8ee";
      feedbackBox.style.borderColor = "#4ade80";
      feedbackBox.style.color = "#166534";
      feedbackBox.innerHTML = `
        <strong>✓ PROPOSAL RECEIVED SUCCESSFULLY!</strong><br/>
        Thank you, ${name}. Your episode pitch <em>"${title}"</em> has been added to our editorial review queue.
        Our hosts review submissions weekly and will follow up at <strong>${email}</strong>.
      `;
    } else {
      feedbackBox.className = "";
      feedbackBox.style.background = "#fee2e2";
      feedbackBox.style.borderColor = "#f87171";
      feedbackBox.style.color = "#991b1b";
      feedbackBox.textContent = "✕ Error submitting proposal. Please try again.";
    }
  });
}
