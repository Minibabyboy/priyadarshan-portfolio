"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import HeroAvatar from "./HeroAvatar";
import "./avatar.css";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    slug: "clippers",
    category: "CONCEPT WEBSITE",
    title: "Clippers",
    subtitle: "Barbershop · Toronto",
    description:
      "A modern website concept created to demonstrate a stronger digital presence for a Toronto barbershop, with a clean interface and customer-focused experience.",
    className: "project-green",
    year: "2026",
    role: "DESIGN · DEVELOPMENT",
    tech: ["NEXT.JS", "RESPONSIVE", "UI / UX"],
    image: "/projects/clippers-home.png",
  },
  {
    number: "02",
    slug: "shoo-loong-kan",
    category: "RESTAURANT EXPERIENCE",
    title: "Shoo Loong Kan",
    subtitle: "Restaurant · Dubai",
    description:
      "A premium restaurant website concept focused on atmosphere, discovery and a strong mobile-first customer journey.",
    className: "project-red",
    year: "2026",
    role: "WEB DESIGN · FRONT-END",
    tech: ["NEXT.JS", "MOTION", "MOBILE FIRST"],
    image: "/projects/shoo-loong-kan-home.png",
  },
  {
    number: "03",
    slug: "tropical-land",
    category: "BRAND / E-COMMERCE",
    title: "Tropical Land",
    subtitle: "Aquatics · Dubai",
    description:
      "A product-focused digital experience for a freshwater aquarium retail brand with a modern visual identity.",
    className: "project-blue",
    year: "2026",
    role: "BRAND · DIGITAL EXPERIENCE",
    tech: ["NEXT.JS", "TAILWIND", "GSAP"],
    image: "/projects/tropical-land-home.png",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Modern, responsive websites built around your brand, audience and business goals.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Fast and scalable front-end experiences using modern web technologies.",
  },
  {
    number: "03",
    title: "UI / UX",
    description:
      "Clean interfaces and intuitive digital journeys designed around real users.",
  },
  {
    number: "04",
    title: "Digital Creative",
    description:
      "Landing pages, campaign experiences and creative digital assets that stand out.",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  "NEXT.JS",
  "REACT",
  "JAVASCRIPT",
  "HTML / CSS",
  "TAILWIND CSS",
  "GSAP",
  "FRAMER MOTION",
  "RESPONSIVE DESIGN",
  "UI / UX",
  "DEPLOYMENT",
];

/* =========================================================
   MAGNETIC COMPONENT
========================================================= */

function Magnetic({ children, className = "" }) {
  const magneticRef = useRef(null);

  const handleMove = (event) => {
    const element = magneticRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      event.clientX - rect.left - rect.width / 2;

    const y =
      event.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * 0.18,
      y: y * 0.18,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!magneticRef.current) return;

    gsap.to(magneticRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.35)",
    });
  };

  return (
    <div
      ref={magneticRef}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  const [cursorText, setCursorText] = useState("");

  /* =======================================================
     GSAP + LENIS
  ======================================================= */

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
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
       CUSTOM CURSOR
    ===================================================== */

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const moveCursor = (event) => {
      if (!cursor || !cursorDot) return;

      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.55,
        ease: "power3.out",
      });

      gsap.to(cursorDot, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.08,
        ease: "none",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    /* =====================================================
       PAGE ANIMATIONS
    ===================================================== */

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".nav-inner", {
          y: -35,
          opacity: 0,
          duration: 0.9,
        })

        .from(
          ".hero-eyebrow",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )

        .from(
          ".hero-word-inner",
          {
            yPercent: 120,
            duration: 1.25,
            stagger: 0.12,
          },
          "-=0.5"
        )

        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.65"
        )

        .from(
          ".hero-cta-wrap",
          {
            scale: 0.6,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )

        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );

      /* ===================================================
         HERO PARALLAX
      =================================================== */

      gsap.to(".hero-name-one", {
        xPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-name-two", {
        xPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-orb-one", {
        y: 180,
        x: -80,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-orb-two", {
        y: -120,
        x: 80,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* ===================================================
         REVEAL HEADINGS
      =================================================== */

      gsap.utils
        .toArray(".reveal-heading")
        .forEach((heading) => {
          gsap.from(heading, {
            y: 90,
            opacity: 0,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
            },
          });
        });

      /* ===================================================
         PROJECT ANIMATIONS
      =================================================== */

      gsap.utils
        .toArray(".project-card-v2")
        .forEach((card) => {
          const visual =
            card.querySelector(".project-visual-v2");

          const browser =
            card.querySelector(".browser-v2");

          gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          });

          if (visual) {
            gsap.fromTo(
              visual,
              {
                y: 70,
              },
              {
                y: -50,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.1,
                },
              }
            );
          }

          if (browser) {
            gsap.fromTo(
              browser,
              {
                rotateX: 7,
                rotateY: -10,
              },
              {
                rotateX: -3,
                rotateY: 5,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.3,
                },
              }
            );
          }
        });

      /* ===================================================
         PROJECT TECH + IMAGE ANIMATIONS
      =================================================== */

      gsap.utils
        .toArray(".project-card-v2")
        .forEach((card) => {
          const tech =
            card.querySelectorAll(
              ".project-tech-v3 span"
            );

          const indexLabel =
            card.querySelector(
              ".project-v3-index"
            );

          const image =
            card.querySelector(
              ".project-real-image"
            );

          if (tech.length) {
            gsap.from(tech, {
              y: 18,
              opacity: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 72%",
              },
            });
          }

          if (indexLabel) {
            gsap.to(indexLabel, {
              y: -35,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }

          if (image) {
            gsap.fromTo(
              image,
              {
                scale: 1.08,
              },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 90%",
                  end: "center 35%",
                  scrub: 1,
                },
              }
            );
          }
        });

      /* ===================================================
         SERVICE ANIMATIONS
      =================================================== */

      gsap.utils
        .toArray(".service-v2")
        .forEach((service) => {
          gsap.from(service, {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: service,
              start: "top 90%",
            },
          });
        });

      /* ===================================================
         CONTACT MARQUEE
      =================================================== */

      gsap.to(".contact-marquee-track", {
        xPercent: -50,
        duration: 18,
        ease: "none",
        repeat: -1,
      });
    }, rootRef);

    ScrollTrigger.refresh();

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      cancelAnimationFrame(rafId);

      lenis.destroy();

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      ctx.revert();

      ScrollTrigger.getAll().forEach(
        (trigger) => trigger.kill()
      );
    };
  }, []);

  /* =======================================================
     CURSOR FUNCTIONS
  ======================================================= */

  const cursorEnter = (text = "") => {
    setCursorText(text);

    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      scale: text ? 2.4 : 1.6,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const cursorLeave = () => {
    setCursorText("");

    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  /* =======================================================
     PAGE
  ======================================================= */

  return (
        <main ref={rootRef} className="portfolio-v2">
      {/* CUSTOM CURSOR */}

      <div ref={cursorRef} className="custom-cursor">
        <span>{cursorText}</span>
      </div>

      <div ref={cursorDotRef} className="cursor-dot" />

      <div className="page-noise" />

      {/* ===================================================
          NAVIGATION
      =================================================== */}

      <nav className="nav-v2">
        <div className="nav-inner">
          <Magnetic>
            <a href="#home" className="logo-v2">
              YP<span>.</span>
            </a>
          </Magnetic>

          <div className="nav-center">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="availability-v2">
            <span />
            Available for work
          </a>
        </div>
      </nav>

      {/* ===================================================
          HERO
      =================================================== */}

      <section id="home" ref={heroRef} className="hero-v2">
        <div className="tech-grid" />
        <div className="hero-scanline" />

        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-eyebrow">
          <span>WEB DESIGNER &amp; DEVELOPER</span>

          <span className="hero-coordinate">
            25.2048° N &nbsp; 55.2708° E
          </span>

          <span>MALTA</span>
        </div>

        {/* NAME */}

        <div className="hero-name">
          <div className="hero-word-mask">
            <div className="hero-word-inner hero-name-one">
              PRIYADARSHAN
            </div>
          </div>

          <div className="hero-word-mask">
            <div className="hero-word-inner hero-name-two outline-v2">
              YOGENDRAM
            </div>
          </div>
        </div>

        {/* 3D AVATAR */}

        <HeroAvatar />

        {/* HERO BOTTOM */}

        <div className="hero-footer-v2">
          <p className="hero-description">
            I design and develop digital experiences
            <br />
            that help ambitious businesses stand out.
          </p>

          <Magnetic className="hero-cta-wrap">
            <a
              href="#work"
              className="hero-cta"
              onMouseEnter={() => cursorEnter()}
              onMouseLeave={cursorLeave}
            >
              <span>Explore</span>
              <span>my work</span>
              <strong>↘</strong>
            </a>
          </Magnetic>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>

          <div className="hero-scroll-track">
            <div />
          </div>
        </div>

        <div className="hero-index">01 / 05</div>
      </section>

      {/* ===================================================
          ABOUT
      =================================================== */}

      <section id="about" className="about-v2 section-v2">
        <div className="section-topline">
          <span className="section-number">01</span>
          <span>ABOUT</span>
          <span>WHO I AM</span>
        </div>

        <div className="about-layout">
          <div className="about-side">
            <span className="vertical-text">
              DIGITAL CREATIVE
            </span>
          </div>

          <div className="about-main">
            <h2 className="reveal-heading">
              Design is not just
              <br />
              how it <span>looks.</span>
              <br />
              It&apos;s how it
              <br />
              <span>works.</span>
            </h2>

            <div className="about-copy-grid">
              <div>
                <span className="mini-title">
                  MY APPROACH
                </span>

                <p>
                  I combine clean visual design, modern
                  development and thoughtful interaction to
                  create websites that feel professional and
                  memorable.
                </p>
              </div>

              <div>
                <span className="mini-title">
                  THE GOAL
                </span>

                <p>
                  Every website should have a purpose —
                  communicate clearly, build trust and turn
                  attention into meaningful business results.
                </p>
              </div>
            </div>

            <div className="about-stat-line">
              <div>
                <strong>DESIGN</strong>
                <span>Visual systems</span>
              </div>

              <div>
                <strong>DEVELOP</strong>
                <span>Modern websites</span>
              </div>

              <div>
                <strong>DELIVER</strong>
                <span>Real experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          WORK
      =================================================== */}

      <section id="work" className="work-v2 section-v2">
        <div className="section-topline">
          <span className="section-number">02</span>
          <span>SELECTED WORK</span>
          <span>2026</span>
        </div>

        <div className="work-title-v2">
          <h2 className="reveal-heading">
            SELECTED
            <br />
            <span>PROJECTS.</span>
          </h2>

          <p>
            Selected digital experiences and concept projects
            across hospitality, retail and service brands.
          </p>
        </div>

        <div className="project-list-v2">
          {projects.map((project, index) => (
            <article
              className="project-card-v2 group"
              key={project.slug}
              data-project={project.number}
              onMouseEnter={() => cursorEnter("VIEW")}
              onMouseLeave={cursorLeave}
            >
              {/* PROJECT META */}

              <div className="project-meta-v2">
                <span>{project.number}</span>

                <span>{project.category}</span>

                <span className="hidden md:inline">
                  {project.year}
                </span>
              </div>

              {/* PROJECT VISUAL */}

              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.title} case study`}
                className="project-case-link"
              >
                <div
                  className={`project-visual-v2 ${project.className}`}
                >
                  <div className="visual-grid" />

                  <div className="project-big-number project-v3-index">
                    {project.number}
                  </div>

                  <div className="project-circle circle-one" />
                  <div className="project-circle circle-two" />

                  {/* REAL WEBSITE PREVIEW */}

                  <div className="browser-v2 project-browser-real">
                    <div className="browser-top-v2">
                      <div>
                        <span />
                        <span />
                        <span />
                      </div>

                      <small>
                        priyadarshan.design / project-
                        {project.number}
                      </small>
                    </div>

                    <div
                      className="browser-body-v2 project-screenshot-body"
                      style={{
                        padding: 0,
                        overflow: "hidden",
                        position: "relative",
                        background: "#080808",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} website homepage`}
                        className="project-real-image"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top center",
                        }}
                      />

                      <div
                        className="project-image-overlay"
                        style={{
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none",
                          background:
                            "linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.22) 100%)",
                        }}
                      />
                    </div>
                  </div>

                  {/* PROJECT VISUAL BOTTOM LABEL */}

                  <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between pointer-events-none">
                    <span className="text-[9px] tracking-[0.28em] uppercase opacity-50">
                      {project.role}
                    </span>

                    <span className="text-[9px] tracking-[0.28em] uppercase opacity-50">
                      0{index + 1} / 03
                    </span>
                  </div>
                </div>
              </Link>

              {/* PROJECT INFORMATION */}

              <div className="project-bottom-v2">
                <div>
                  <h3>{project.title}</h3>
                  <span>{project.subtitle}</span>
                </div>

                <div>
                  <p>{project.description}</p>

                  <div className="project-tech-v3 mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 px-3 py-1.5 text-[9px] tracking-[0.16em] text-white/55"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CLICKABLE PROJECT ARROW */}

                <Magnetic>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="project-arrow-v2"
                    aria-label={`Open ${project.title} case study`}
                    onMouseEnter={() => cursorEnter("VIEW")}
                    onMouseLeave={cursorLeave}
                  >
                    ↗
                  </Link>
                </Magnetic>
              </div>
            </article>
          ))}
        </div>
      </section>
            {/* ===================================================
          SERVICES
      =================================================== */}

      <section
        id="services"
        className="services-v2 section-v2"
      >
        <div className="section-topline dark-line">
          <span className="section-number">03</span>
          <span>SERVICES</span>
          <span>WHAT I DO</span>
        </div>

        <div className="services-title-v2">
          <h2 className="reveal-heading">
            BUILDING
            <br />
            <span>DIGITAL VALUE.</span>
          </h2>
        </div>

        <div className="services-list-v2">
          {services.map((service) => (
            <div
              className="service-v2"
              key={service.number}
              onMouseEnter={() => cursorEnter()}
              onMouseLeave={cursorLeave}
            >
              <span className="service-number-v2">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-icon-v2">
                ↗
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================
          TECHNOLOGY
      =================================================== */}

      <section className="technology-v2 section-v2">
        <div className="section-topline">
          <span className="section-number">04</span>
          <span>TECHNOLOGY</span>
          <span>THE STACK</span>
        </div>

        <div className="technology-layout">
          <h2 className="reveal-heading">
            TOOLS BEHIND
            <br />
            THE <span>EXPERIENCE.</span>
          </h2>

          <div className="technology-right">
            <p>
              Modern tools combined with thoughtful design
              to build fast, responsive and interactive
              digital experiences.
            </p>

            <div className="skills-v2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  onMouseEnter={() => cursorEnter()}
                  onMouseLeave={cursorLeave}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTACT
      =================================================== */}

      <section id="contact" className="contact-v2">
        <div className="contact-grid-v2" />

        {/* CONTACT MARQUEE */}

        <div className="contact-marquee">
          <div className="contact-marquee-track">
            <span>AVAILABLE FOR PROJECTS ✦</span>
            <span>AVAILABLE FOR PROJECTS ✦</span>
            <span>AVAILABLE FOR PROJECTS ✦</span>
            <span>AVAILABLE FOR PROJECTS ✦</span>
            <span>AVAILABLE FOR PROJECTS ✦</span>
            <span>AVAILABLE FOR PROJECTS ✦</span>
          </div>
        </div>

        <div className="contact-inner-v2">
          <div className="contact-small-v2">
            <span>05</span>
            <span>LET&apos;S TALK</span>
          </div>

          <div className="contact-title-v2">
            <span>HAVE AN IDEA?</span>

            <h2 className="reveal-heading">
              LET&apos;S BUILD
              <br />
              <span>SOMETHING GREAT.</span>
            </h2>
          </div>

          <div className="contact-actions-v2">
            <Magnetic>
              <a
                href="https://wa.me/971559070927"
                target="_blank"
                rel="noreferrer"
                className="contact-circle-v2"
                onMouseEnter={() => cursorEnter()}
                onMouseLeave={cursorLeave}
              >
                <span>START A</span>
                <span>PROJECT</span>
                <strong>↗</strong>
              </a>
            </Magnetic>

            <div className="contact-message-v2">
              <p>
                Have a website, business or digital idea?
                <br />
                Let&apos;s turn it into a real experience.
              </p>

              <a
                href="https://wa.me/971559070927"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp →
              </a>
            </div>
          </div>

          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="footer-v2">
            <div>
              <strong>YP.</strong>

              <span>
                WEB DESIGNER &amp; DEVELOPER
              </span>
            </div>

            <div>
              <a href="#home">
                BACK TO TOP ↑
              </a>
            </div>

            <span>
              © 2026 PRIYADARSHAN YOGENDRAM
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}