import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let currentParallaxCtx = null;

/**
 * Initializes performant, lifecycle-safe GSAP 3 ScrollTrigger parallax effects.
 * Cleans up previous tweens via gsap.context() to avoid memory leaks or ghost triggers.
 * Respects prefers-reduced-motion for accessibility.
 */
export function initParallaxEffects(scopeElement = document) {
  // Tear down any previous parallax context
  if (currentParallaxCtx) {
    currentParallaxCtx.revert();
    currentParallaxCtx = null;
  }

  currentParallaxCtx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. HERO SECTION: IMAGE SWITCH & PARALLAX ON SCROLL
      const heroSection = document.querySelector(".hero-swiss-section");
      if (heroSection) {
        const imgStudio = heroSection.querySelector(".hero-img-studio");
        const studioTag = heroSection.querySelector("#hero-studio-tag");

        // Smooth crossfade to wide studio image as user scrolls down - fast & responsive
        if (imgStudio) {
          gsap.to(imgStudio, {
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "+=160",
              scrub: 0.3,
              onUpdate: (self) => {
                if (studioTag) {
                  if (self.progress > 0.4) {
                    studioTag.textContent = "AW / 26 — SOUNDSTAGE B";
                  } else {
                    studioTag.textContent = "AW / 26 — STUDIO 01";
                  }
                }
              }
            }
          });
        }

        // Subtly parallax the listening image
        const imgListening = heroSection.querySelector(".hero-img-listening");
        if (imgListening) {
          gsap.fromTo(
            imgListening,
            { yPercent: 0 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 1
              }
            }
          );
        }

        // Giant typography subtle depth drift
        const heroTitle = heroSection.querySelector(".hero-giant-title");
        if (heroTitle) {
          gsap.to(heroTitle, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 0.8
            }
          });
        }
      }

      // 2. SECTION 002: MANIFESTO HEADLINE SCRUB REVEAL
      const manifestoSection = document.querySelector(".manifesto-swiss-section");
      if (manifestoSection) {
        const manifestoHeadline = manifestoSection.querySelector(".manifesto-giant-headline");
        if (manifestoHeadline) {
          gsap.from(manifestoHeadline, {
            x: -30,
            opacity: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: manifestoSection,
              start: "top 85%",
              end: "top 40%",
              scrub: 0.8
            }
          });
        }
      }

      // 3. SECTION 003: 4 EDITORIAL COLUMNS MEDIA PARALLAX & STAGGER
      const quadCols = gsap.utils.toArray(".quad-col");
      if (quadCols.length > 0) {
        quadCols.forEach((col, idx) => {
          const img = col.querySelector(".col-img");
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: -10 },
              {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                  trigger: col,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1
                }
              }
            );
          }

          // Subtle alternating depth offset between adjacent columns
          if (idx % 2 === 1 && window.innerWidth > 860) {
            gsap.fromTo(
              col,
              { y: 16 },
              {
                y: -16,
                ease: "none",
                scrollTrigger: {
                  trigger: col,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2
                }
              }
            );
          }
        });
      }

      // 4. SECTION 004: KINETIC HORIZONTAL SLOGAN TICKER PARALLAX
      const bannerSection = document.querySelector(".banner-swiss-section");
      if (bannerSection) {
        const bannerText = bannerSection.querySelector(".banner-giant-text");
        if (bannerText) {
          gsap.fromTo(
            bannerText,
            { xPercent: 6 },
            {
              xPercent: -18,
              ease: "none",
              scrollTrigger: {
                trigger: bannerSection,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
              }
            }
          );
        }
      }

      // 5. SECTION 005: CTA SOUNDSTAGE PORTRAIT PARALLAX
      const ctaSection = document.querySelector(".cta-swiss-section");
      if (ctaSection) {
        const ctaImg = ctaSection.querySelector(".cta-bw-img");
        if (ctaImg) {
          gsap.fromTo(
            ctaImg,
            { yPercent: -12 },
            {
              yPercent: 12,
              ease: "none",
              scrollTrigger: {
                trigger: ctaSection,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
              }
            }
          );
        }
      }

      // 6. INTERNAL SUBPAGES: EDITORIAL MEDIA REVEALS & PARALLAX
      const editorialImages = gsap.utils.toArray(
        ".manifesto-img, .host-img-portrait, .spotlight-img, .video-thumb-img"
      );
      editorialImages.forEach((img) => {
        const parent = img.parentElement || img;
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: parent,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        );
      });
    });
  }, scopeElement);

  // Refresh ScrollTrigger calculations
  ScrollTrigger.refresh();

  return currentParallaxCtx;
}
