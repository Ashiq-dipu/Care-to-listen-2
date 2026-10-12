export function renderMissionView(container) {
  container.innerHTML = `
    <section class="swiss-section" data-section="MISSION">
      <div class="swiss-gutter">
        <span class="gutter-num">003</span>
        <span class="gutter-label">PURPOSE</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">003 // OUR NORTH STAR</span>
        <h1 class="view-giant-headline">OUR MISSION.</h1>
        
        <!-- Big Mission Statement -->
        <div class="mission-statement-card">
          <p class="mission-giant-quote">
            “TO CREATE A SAFE SPACE WHERE PEOPLE FEEL TRULY HEARD — AND TO REMIND THE WORLD THAT LISTENING IS ONE OF THE MOST POWERFUL FORMS OF CARE.”
          </p>
        </div>

        <!-- Impact Stats Grid -->
        <div class="impact-stats-grid">
          <div class="impact-stat-box">
            <span class="stat-giant-num">108+</span>
            <span class="stat-unit-lbl">EPISODES RELEASED</span>
          </div>
          <div class="impact-stat-box highlight-stat">
            <span class="stat-giant-num">50K+</span>
            <span class="stat-unit-lbl">MONTHLY LISTENERS</span>
          </div>
          <div class="impact-stat-box">
            <span class="stat-giant-num">30+</span>
            <span class="stat-unit-lbl">COUNTRIES REACHED</span>
          </div>
          <div class="impact-stat-box">
            <span class="stat-giant-num">100%</span>
            <span class="stat-unit-lbl">LISTENER SUPPORTED</span>
          </div>
        </div>

        <!-- The 4 Mission Pillars -->
        <div class="pillars-section-swiss">
          <div class="section-title-bar">
            <span class="section-idx">PILLARS // 04</span>
            <h3 class="section-heading-sm">FOUR PILLARS GUIDING EVERY RECORDING</h3>
          </div>

          <div class="pillars-quad-grid">
            <div class="pillar-box">
              <span class="p-index">01</span>
              <h3 class="p-title">BREAK THE STIGMA</h3>
              <p class="p-desc">Normalize open, honest dialogues around mental health, depression, loss, and trauma without sensationalism or shame.</p>
            </div>
            <div class="pillar-box">
              <span class="p-index">02</span>
              <h3 class="p-title">AMPLIFY UNHEARD VOICES</h3>
              <p class="p-desc">Provide a high-production broadcast platform for caregivers, survivors, and neurodivergent storytellers who are often overlooked.</p>
            </div>
            <div class="pillar-box">
              <span class="p-index">03</span>
              <h3 class="p-title">BUILD GENUINE COMMUNITY</h3>
              <p class="p-desc">Transform isolated digital listeners into an active, compassionate network rooted in mutual empathy and vulnerability.</p>
            </div>
            <div class="pillar-box">
              <span class="p-index">04</span>
              <h3 class="p-title">PRACTICAL EMPOWERMENT</h3>
              <p class="p-desc">Anchor personal stories in practical, certified mental health resources, vetted literature, and verified crisis helplines.</p>
            </div>
          </div>
        </div>

        <!-- Ethical Pledge Banner -->
        <div class="ethical-pledge-banner">
          <h4 class="pledge-title">THE CARE 2 LISTEN ETHICAL BROADCAST PLEDGE</h4>
          <p class="pledge-text">
            We pledge to never exploit personal trauma for viral engagement. Every guest maintains editorial agency over their story, receives a pre-broadcast preview cut, and can pause or redact sensitive audio without hesitation.
          </p>
        </div>
      </div>
    </section>
  `;
}
