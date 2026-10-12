import { hosts } from "../data/hosts.js";
import { episodes } from "../data/episodes.js";
import { audioPlayer } from "../components/audioPlayer.js";

export function renderHostsView(container) {
  container.innerHTML = `
    <section class="swiss-section" data-section="HOSTS">
      <div class="swiss-gutter">
        <span class="gutter-num">004</span>
        <span class="gutter-label">VOICES</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">004 // MEET THE CO-HOSTS</span>
        <h1 class="view-giant-headline">MEET THE VOICES BEHIND THE MIC.</h1>
        <p class="view-lead-copy">Maya Lin and Marcus Vance bring clinical depth, investigative rigor, and deep human hospitality to the studio.</p>

        <div class="hosts-deep-grid">
          ${hosts.map((h, idx) => `
            <div class="host-profile-block">
              <div class="host-profile-header">
                <span class="host-num">0${idx + 1} // ${h.pronouns.toUpperCase()}</span>
                <span class="host-location-spec">SEATTLE SOUNDSTAGE // 2026</span>
              </div>

              <div class="host-profile-split">
                <div class="host-photo-col">
                  <div class="host-frame">
                    <img src="${h.avatar}" alt="${h.name}" class="host-img-portrait" />
                    <span class="crosshair-mark top-right">+</span>
                  </div>
                </div>

                <div class="host-bio-col">
                  <h2 class="host-fullname">${h.name.toUpperCase()}</h2>
                  <span class="host-title-role">${h.title}</span>

                  <blockquote class="host-credo-quote">
                    “${h.quote}”
                  </blockquote>

                  <p class="host-full-bio-text">${h.bio}</p>

                  <!-- Favorite Episode Box with direct Play button -->
                  <div class="host-fav-episode-card">
                    <div class="fav-tag">FAVORITE EPISODE PICK</div>
                    <div class="fav-ep-title">EP #${h.favoriteEpisode.epNumber} — “${h.favoriteEpisode.title}”</div>
                    <p class="fav-reason">${h.favoriteEpisode.reason}</p>
                    <button class="btn-play-fav" data-fav-ep="ep-${h.favoriteEpisode.epNumber}">
                      ▶ PLAY EPISODE #${h.favoriteEpisode.epNumber}
                    </button>
                  </div>

                  <!-- Fun Facts & Behind the scenes -->
                  <div class="host-trivia-section">
                    <h4 class="trivia-title">BEHIND THE SCENES RITUALS</h4>
                    <ul class="trivia-ul">
                      ${h.funFacts.map(f => `<li><span class="bullet-cross">+</span> ${f}</li>`).join('')}
                    </ul>
                  </div>

                  <!-- Gear Spec -->
                  <div class="host-gear-panel">
                    <span class="gear-tag">STUDIO HARDWARE:</span>
                    <span class="gear-spec">${h.gear}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.querySelectorAll("[data-fav-ep]").forEach(btn => {
    btn.addEventListener("click", () => {
      const ep = episodes.find(e => e.id === btn.dataset.favEp);
      if (ep) audioPlayer.playEpisode(ep);
    });
  });
}
