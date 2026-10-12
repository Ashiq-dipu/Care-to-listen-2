import gsap from "gsap";
import { setupAudioPlayerUI, audioPlayer } from "./components/audioPlayer.js";
import { setupEpisodeModal } from "./components/episodeModal.js";
import { renderBecomeAGuestSection } from "./components/guestForm.js";
import {
  renderHomeView,
  renderEpisodesView,
  renderVideosView,
  renderGuestsView,
  renderAboutView,
  renderMissionView,
  renderHostsView,
  renderBecomeAGuestView,
  renderResourcesView,
  renderCommunityView,
  renderContactView,
  renderDashboardView,
  renderRequestEpisodeView
} from "./views.js";
import { getFooterHTML, initFooterEvents } from "./components/footer.js";
import { initParallaxEffects } from "./utils/parallax.js";
import { episodes } from "./data/episodes.js";

// Initialize Router & Lifecycle
const appContainer = document.getElementById("app-content");
const navLinks = document.querySelectorAll(".nav-link");
const drawerLinks = document.querySelectorAll(".drawer-link");
const mobileToggle = document.getElementById("mobile-menu-btn");
const mobileDrawer = document.getElementById("mobile-drawer");
const drawerBackdrop = document.getElementById("drawer-backdrop");
const drawerClose = document.getElementById("drawer-close");

const routes = {
  home: (el) => renderHomeView(el),
  about: (el) => renderAboutView(el),
  mission: (el) => renderMissionView(el),
  hosts: (el) => renderHostsView(el),
  episodes: (el) => renderEpisodesView(el),
  videos: (el) => renderVideosView(el),
  guests: (el) => renderGuestsView(el),
  guest: (el) => renderBecomeAGuestView(el),
  "become-a-guest": (el) => renderBecomeAGuestView(el),
  "request-episode": (el) => renderRequestEpisodeView(el),
  request: (el) => renderRequestEpisodeView(el),
  resources: (el) => renderResourcesView(el),
  community: (el) => renderCommunityView(el),
  contact: (el) => renderContactView(el),
  dashboard: (el) => renderDashboardView(el),
  admin: (el) => renderDashboardView(el)
};

function getRoute() {
  const path = window.location.pathname.toLowerCase();
  if (path.endsWith("/admin") || path.endsWith("/admin/")) return "admin";
  const fileMatch = path.match(/\/([a-z0-9_-]+)\.html/);
  if (fileMatch) {
    const pageName = fileMatch[1];
    if (pageName === "index") return "home";
    if (routes[pageName]) return pageName;
    if (pageName === "become-a-guest") return "guest";
  }

  const hash = window.location.hash.replace("#", "").toLowerCase() || "home";
  const cleanRoute = hash.split("?")[0];
  return routes[cleanRoute] ? cleanRoute : "home";
}

function updateNavActive(currentRoute) {
  const normalize = (href) => {
    if (!href) return "";
    return href.replace("#", "").replace(".html", "").replace("./", "").toLowerCase();
  };

  const target = currentRoute === "become-a-guest" ? "guest" : currentRoute;

  navLinks.forEach(link => {
    const norm = normalize(link.getAttribute("href"));
    if (norm === target || (target === "home" && (norm === "home" || norm === "index" || norm === ""))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  drawerLinks.forEach(link => {
    const norm = normalize(link.getAttribute("href"));
    if (norm === target || (target === "home" && (norm === "home" || norm === "index" || norm === ""))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function navigateToRoute(route) {
  if (!appContainer) return;

  // Check if route has an episode ID query
  const fullHash = window.location.hash;
  const matchId = fullHash.match(/id=([^&]+)/);

  // Animate transition using GSAP 3
  gsap.to(appContainer, {
    opacity: 0,
    y: 8,
    duration: 0.18,
    ease: "power2.in",
    onComplete: () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      const renderFn = routes[route] || routes.home;
      renderFn(appContainer);

      // Ensure Master Swiss Brutalist Footer is present on all views
      if (!appContainer.querySelector("footer.footer-swiss-section")) {
        const fWrapper = document.createElement("div");
        fWrapper.innerHTML = getFooterHTML();
        if (fWrapper.firstElementChild) {
          appContainer.appendChild(fWrapper.firstElementChild);
        }
        initFooterEvents(appContainer);
      }

      updateNavActive(route);

      // Open episode modal if requested in URL
      if (matchId && matchId[1] && window.openEpisodeDetail) {
        window.openEpisodeDetail(matchId[1]);
      }

      // Initialize GSAP ScrollTrigger parallax effects
      initParallaxEffects(appContainer);

      gsap.fromTo(
        appContainer,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" }
      );
    }
  });
}

// Drawer animations
function openDrawer() {
  if (mobileDrawer) mobileDrawer.style.display = "flex";
  gsap.fromTo(drawerBackdrop, { opacity: 0 }, { opacity: 1, duration: 0.25 });
  gsap.fromTo(".drawer-panel", { x: -320 }, { x: 0, duration: 0.3, ease: "power3.out" });
}

function closeDrawer() {
  gsap.to(drawerBackdrop, { opacity: 0, duration: 0.2 });
  gsap.to(".drawer-panel", {
    x: -320,
    duration: 0.25,
    ease: "power3.in",
    onComplete: () => {
      if (mobileDrawer) mobileDrawer.style.display = "none";
    }
  });
}

mobileToggle?.addEventListener("click", openDrawer);
drawerBackdrop?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

drawerLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeDrawer();
  });
});

window.addEventListener("hashchange", () => {
  const currentRoute = getRoute();
  navigateToRoute(currentRoute);
});

// App Launch
document.addEventListener("DOMContentLoaded", () => {
  setupAudioPlayerUI();
  setupEpisodeModal();

  // Pre-load the latest episode into the player so it's instantly interactive
  if (episodes.length > 0) {
    audioPlayer.currentEpisode = episodes[0];
    audioPlayer.notify();
  }

  // Live Seattle clock
  function updateSeattleClock() {
    const el = document.getElementById("swiss-local-clock");
    if (!el) return;
    try {
      const now = new Date();
      const options = { timeZone: "America/Los_Angeles", hour: "2-digit", minute: "2-digit", hour12: false };
      el.textContent = new Intl.DateTimeFormat("en-US", options).format(now);
    } catch (e) {
      el.textContent = "13:42";
    }
  }
  updateSeattleClock();
  setInterval(updateSeattleClock, 10000);

  const initialRoute = getRoute();
  navigateToRoute(initialRoute);
});
