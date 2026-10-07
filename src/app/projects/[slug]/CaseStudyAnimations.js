"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function CaseStudyAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    /* =====================================================
       GSAP CONTEXT
    ===================================================== */

    const ctx = gsap.context(() => {
      /* ===================================================
         NAVIGATION ENTRANCE
      =================================================== */

      gsap.from(".case-nav", {
        y: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      });

      /* ===================================================
         HERO ENTRANCE
      =================================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .from(
          ".case-hero-top",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          0.15
        )

        .from(
          ".case-number",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          0.25
        )

        .from(
          ".case-title-wrap h1",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.25,
          },
          0.3
        )

        .from(
          ".case-title-wrap p",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          0.65
        )

        .from(
          ".case-hero-bottom > *",
          {
            y: 30,
            opacity: 0,
            duration: 0.75,
            stagger: 0.1,
          },
          0.7
        );

      /* ===================================================
         HERO GRID PARALLAX
      =================================================== */

      gsap.to(".case-grid", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".case-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* ===================================================
         HERO TITLE PARALLAX
      =================================================== */

      gsap.to(".case-title-wrap", {
        y: 80,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: ".case-hero",
          start: "45% top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* ===================================================
         MAIN PROJECT PREVIEW
      =================================================== */

      const preview = document.querySelector(".case-preview");

      if (preview) {
        gsap.from(preview, {
          y: 100,
          opacity: 0,
          scale: 0.96,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: preview,
            start: "top 88%",
          },
        });
      }

      /* ===================================================
         BROWSER REVEAL
      =================================================== */

      const browser = document.querySelector(".case-browser");

      if (browser) {
        gsap.from(browser, {
          y: 90,
          scale: 0.92,
          opacity: 0,
          rotateX: 8,
          duration: 1.25,
          ease: "power4.out",
          scrollTrigger: {
            trigger: browser,
            start: "top 90%",
          },
        });

        gsap.to(browser, {
          y: -55,
          ease: "none",
          scrollTrigger: {
            trigger: ".case-preview-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      /* ===================================================
         MAIN PREVIEW IMAGE ZOOM
      =================================================== */

      const previewImage = document.querySelector(
        ".case-browser-screen img"
      );

      if (previewImage) {
        gsap.fromTo(
          previewImage,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".case-preview-section",
              start: "top 85%",
              end: "center 30%",
              scrub: 1,
            },
          }
        );
      }

      /* ===================================================
         CONTENT SECTION REVEALS
      =================================================== */

      gsap.utils
        .toArray(".case-content-section")
        .forEach((section) => {
          const index = section.querySelector(
            ".case-section-index"
          );

          const heading = section.querySelector(
            ".case-content-grid h2"
          );

          const content = section.querySelector(
            ".case-content-grid > div"
          );

          if (index) {
            gsap.from(index, {
              y: 30,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
              },
            });
          }

          if (heading) {
            gsap.from(heading, {
              y: 80,
              opacity: 0,
              duration: 1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: section,
                start: "top 76%",
              },
            });
          }

          if (content) {
            gsap.from(content, {
              y: 55,
              opacity: 0,
              duration: 0.9,
              delay: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 72%",
              },
            });
          }
        });

      /* ===================================================
         TECHNOLOGY / FOCUS PILLS
      =================================================== */

      gsap.utils.toArray(".case-tech").forEach((group) => {
        const items = group.querySelectorAll("span, a");

        if (!items.length) return;

        gsap.from(items, {
          y: 18,
          opacity: 0,
          stagger: 0.08,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 90%",
          },
        });
      });

      /* ===================================================
         LARGE IMAGE FEATURE
      =================================================== */

      const imageFeature = document.querySelector(
        ".case-image-feature"
      );

      if (imageFeature) {
        const heading = imageFeature.querySelector(
          ".case-image-heading"
        );

        const largeBrowser = imageFeature.querySelector(
          ".case-large-browser"
        );

        const largeImage = imageFeature.querySelector(
          ".case-large-image img"
        );

        if (heading) {
          gsap.from(heading, {
            y: 70,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: imageFeature,
              start: "top 82%",
            },
          });
        }

        if (largeBrowser) {
          gsap.from(largeBrowser, {
            y: 100,
            opacity: 0,
            scale: 0.96,
            duration: 1.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: largeBrowser,
              start: "top 88%",
            },
          });
        }

        if (largeImage) {
          gsap.fromTo(
            largeImage,
            {
              scale: 1.07,
            },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: largeBrowser,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      }

      /* ===================================================
         NEXT PROJECT
      =================================================== */

      gsap.utils.toArray(".case-next").forEach((section) => {
        const smallText = section.querySelector(
          ":scope > span"
        );

        const heading = section.querySelector("h2");

        const actions = section.querySelectorAll(
          ".case-next-actions > *"
        );

        if (smallText) {
          gsap.from(smallText, {
            y: 20,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          });
        }

        if (heading) {
          gsap.from(heading, {
            y: 90,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          });
        }

        if (actions.length) {
          gsap.from(actions, {
            y: 45,
            opacity: 0,
            stagger: 0.12,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 68%",
            },
          });
        }
      });

      /* ===================================================
         FOOTER REVEAL
      =================================================== */

      gsap.from(".case-footer > *", {
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".case-footer",
          start: "top 95%",
        },
      });
    });

    /* =====================================================
       REFRESH
    ===================================================== */

    ScrollTrigger.refresh();

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      cancelAnimationFrame(rafId);

      lenis.destroy();

      ctx.revert();

      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.kill()
      );
    };
  }, []);

  return null;
}