import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyAnimations from "./CaseStudyAnimations";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {
  clippers: {
    number: "01",
    type: "CONCEPT WEBSITE",
    title: "Clippers",
    subtitle: "BARBERSHOP · TORONTO",
    year: "2026",
    location: "Toronto, Canada",
    role: "DESIGN · DEVELOPMENT",
    image: "/projects/clippers-home.png",

    intro:
      "A modern website concept created to demonstrate a stronger digital presence for a Toronto barbershop, combining bold visual direction with a clear customer journey.",

    overview:
      "The Clippers concept explores how a local barbershop can present itself with the confidence and visual quality of a premium lifestyle brand. The experience focuses on strong typography, atmospheric imagery and simple navigation.",

    challenge:
      "The challenge was to create a design that feels premium without making the experience complicated. Important actions such as discovering services and booking need to remain immediately visible while the visual identity stays memorable.",

    approach:
      "I used a dark editorial direction, oversized typography, warm photography and carefully controlled spacing. The interface was designed around clear content hierarchy and responsive behaviour so the experience remains effective across desktop and mobile screens.",

    technologies: ["NEXT.JS", "RESPONSIVE", "UI DESIGN", "UX"],

    accent: "GREEN",

    focus: [
      "PREMIUM VISUAL DIRECTION",
      "CLEAR SERVICE DISCOVERY",
      "RESPONSIVE EXPERIENCE",
    ],
  },

  "shoo-loong-kan": {
    number: "02",
    type: "RESTAURANT EXPERIENCE",
    title: "Shoo Loong Kan",
    subtitle: "RESTAURANT · DUBAI",
    year: "2026",
    location: "Dubai, UAE",
    role: "WEB DESIGN · FRONT-END",
    image: "/projects/shoo-loong-kan-home.png",

    intro:
      "A premium restaurant website concept focused on atmosphere, discovery and a strong mobile-first customer journey.",

    overview:
      "This concept explores how a restaurant experience can begin before the customer reaches the venue. The website uses visual storytelling and structured information to introduce the atmosphere while keeping important customer actions easy to reach.",

    challenge:
      "Restaurant websites need to communicate atmosphere while still helping visitors quickly find useful information. The design therefore needed to balance visual impact with practical navigation and responsive performance.",

    approach:
      "The interface combines large imagery, focused typography, generous spacing and subtle motion. Content is organised to guide visitors naturally through the restaurant experience without overwhelming the page.",

    technologies: ["NEXT.JS", "MOTION", "MOBILE FIRST", "UI/UX"],

    accent: "RED",

    focus: [
      "ATMOSPHERIC STORYTELLING",
      "MOBILE-FIRST EXPERIENCE",
      "CLEAR CUSTOMER JOURNEY",
    ],
  },

  "tropical-land": {
    number: "03",
    type: "BRAND / E-COMMERCE",
    title: "Tropical Land",
    subtitle: "AQUATICS · DUBAI",
    year: "2026",
    location: "Dubai, UAE",
    role: "BRAND · DIGITAL EXPERIENCE",
    image: "/projects/tropical-land-home.png",

    intro:
      "A product-focused digital experience for a freshwater aquarium retail brand with a modern visual identity.",

    overview:
      "Tropical Land required a digital experience capable of presenting freshwater fish, aquatic plants, aquariums, equipment and fish food in a more structured and visually engaging way.",

    challenge:
      "The main challenge was organising several product categories while keeping the website easy to explore. The interface also needed enough visual character to communicate the colourful world of freshwater aquatics.",

    approach:
      "The design uses strong product imagery, structured category navigation, responsive layouts and modern visual hierarchy. The goal was to make product discovery straightforward while building a recognisable digital identity for the store.",

    technologies: ["NEXT.JS", "TAILWIND", "GSAP", "RESPONSIVE"],

    accent: "BLUE",

    focus: [
      "PRODUCT DISCOVERY",
      "CATEGORY STRUCTURE",
      "VISUAL BRAND EXPERIENCE",
    ],
  },
};

/* =========================================================
   PROJECT ORDER
========================================================= */

const projectOrder = [
  "clippers",
  "shoo-loong-kan",
  "tropical-land",
];

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    return {
      title: "Project | Yogendram Priyadarshan",
    };
  }

  return {
    title: `${project.title} | Yogendram Priyadarshan`,
    description: project.intro,
  };
}

/* =========================================================
   PROJECT PAGE
========================================================= */

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const currentIndex = projectOrder.indexOf(slug);

  const nextSlug =
    projectOrder[(currentIndex + 1) % projectOrder.length];

  const nextProject = projects[nextSlug];

  return (
  <main className="case-study">
    <CaseStudyAnimations />

      {/* ===================================================
          TOP NAVIGATION
      =================================================== */}

      <header className="case-nav">
        <Link href="/" className="case-logo">
          YP<span>.</span>
        </Link>

        <div className="case-nav-center">
          <span>{project.number}</span>
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>

        <Link href="/#work" className="case-back">
          ← BACK TO WORK
        </Link>
      </header>

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="case-hero">
        <div className="case-grid" />

        <div className="case-hero-top">
          <span>SELECTED PROJECT</span>
          <span>{project.location}</span>
        </div>

        <div className="case-title-wrap">
          <span className="case-number">
            {project.number}
          </span>

          <h1>{project.title}</h1>

          <p>{project.subtitle}</p>
        </div>

        <div className="case-hero-bottom">
          <div>
            <span>ROLE</span>
            <strong>{project.role}</strong>
          </div>

          <div>
            <span>YEAR</span>
            <strong>{project.year}</strong>
          </div>

          <p>{project.intro}</p>
        </div>
      </section>

      {/* ===================================================
          MAIN WEBSITE PREVIEW
      =================================================== */}

      <section className="case-preview-section">
        <div
          className={`case-preview case-preview-${project.number}`}
        >
          <div className="case-preview-grid" />

          <span className="case-preview-number">
            {project.number}
          </span>

          <div className="case-browser">
            <div className="case-browser-top">
              <div>
                <span />
                <span />
                <span />
              </div>

              <small>
                {project.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}
                .project
              </small>
            </div>

            <div className="case-browser-screen">
              <img
                src={project.image}
                alt={`${project.title} website homepage`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PROJECT SNAPSHOT
      =================================================== */}

      <section className="case-content-section">
        <div className="case-section-index">
          <span>01</span>
          <span>PROJECT SNAPSHOT</span>
        </div>

        <div className="case-content-grid">
          <h2>
            DIGITAL
            <br />
            <span>EXPERIENCE.</span>
          </h2>

          <div>
            <p>{project.overview}</p>

            <div className="case-tech">
              <span>{project.type}</span>
              <span>{project.location}</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CHALLENGE
      =================================================== */}

      <section className="case-content-section case-dark-section">
        <div className="case-section-index">
          <span>02</span>
          <span>THE CHALLENGE</span>
        </div>

        <div className="case-content-grid">
          <h2>
            THE
            <br />
            <span>CHALLENGE.</span>
          </h2>

          <div>
            <p>{project.challenge}</p>

            <div className="case-tech">
              <span>CLARITY</span>
              <span>USABILITY</span>
              <span>VISUAL IMPACT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          DESIGN APPROACH
      =================================================== */}

      <section className="case-content-section">
        <div className="case-section-index">
          <span>03</span>
          <span>DESIGN APPROACH</span>
        </div>

        <div className="case-content-grid">
          <h2>
            DESIGN
            <br />
            <span>THINKING.</span>
          </h2>

          <div>
            <p>{project.approach}</p>

            <div className="case-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          EXPERIENCE FOCUS
      =================================================== */}

      <section className="case-content-section case-dark-section">
        <div className="case-section-index">
          <span>04</span>
          <span>EXPERIENCE FOCUS</span>
        </div>

        <div className="case-content-grid">
          <h2>
            BUILT WITH
            <br />
            <span>PURPOSE.</span>
          </h2>

          <div>
            <p>
              Every part of the experience was considered around
              presentation, usability and a clear digital journey.
              The objective was not simply to create a visually
              attractive page, but to give the project a stronger
              and more intentional online presence.
            </p>

            <div className="case-tech">
              {project.focus.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
            {/* ===================================================
          LARGE DESIGN SHOWCASE
      =================================================== */}

      <section className="case-image-feature">
        <div className="case-image-heading">
          <span>05</span>

          <h2>
            BUILT FOR
            <br />
            <span>THE EXPERIENCE.</span>
          </h2>
        </div>

        <div className="case-large-browser">
          <div className="case-browser-top">
            <div>
              <span />
              <span />
              <span />
            </div>

            <small>
              YOGENDRAM.DESIGN / {project.number}
            </small>
          </div>

          <div className="case-large-image">
            <img
              src={project.image}
              alt={`${project.title} website design`}
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          PROJECT DETAILS
      =================================================== */}

      <section className="case-content-section">
        <div className="case-section-index">
          <span>06</span>
          <span>PROJECT DETAILS</span>
        </div>

        <div className="case-content-grid">
          <h2>
            DIGITAL
            <br />
            <span>DETAILS.</span>
          </h2>

          <div>
            <p>
              The project combines visual design, responsive
              development and thoughtful content structure to
              create a consistent experience across different
              screen sizes.
            </p>

            <div className="case-tech">
              <span>{project.role}</span>

              {project.technologies.map((technology) => (
                <span key={`detail-${technology}`}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          NEXT PROJECT
      =================================================== */}

      <section className="case-next">
        <span>
          NEXT PROJECT · {nextProject.number}
        </span>

        <h2>
          KEEP
          <br />
          <span>EXPLORING.</span>
        </h2>

        <div className="case-next-actions">
          <Link href={`/projects/${nextSlug}`}>
            <span>
              {nextProject.title.toUpperCase()}
            </span>

            <strong>↗</strong>
          </Link>

          <Link href="/#work">
            <span>VIEW ALL PROJECTS</span>

            <strong>↗</strong>
          </Link>
        </div>
      </section>

      {/* ===================================================
          CONTACT CTA
      =================================================== */}

      <section className="case-content-section case-dark-section">
        <div className="case-section-index">
          <span>07</span>
          <span>START A PROJECT</span>
        </div>

        <div className="case-content-grid">
          <h2>
            HAVE AN
            <br />
            <span>IDEA?</span>
          </h2>

          <div>
            <p>
              Have a website, business or digital idea?
              Let&apos;s turn it into a modern digital
              experience built around your goals.
            </p>

            <div className="case-tech">
              <a
                href="https://wa.me/971559070927"
                target="_blank"
                rel="noopener noreferrer"
              >
                START A PROJECT ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FINAL CTA
      =================================================== */}

      <section className="case-next">
        <span>END OF CASE STUDY</span>

        <h2>
          LIKE WHAT
          <br />
          YOU <span>SEE?</span>
        </h2>

        <div className="case-next-actions">
          <Link href="/#work">
            <span>VIEW ALL PROJECTS</span>

            <strong>↗</strong>
          </Link>

          <a
            href="https://wa.me/971559070927"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>START A PROJECT</span>

            <strong>↗</strong>
          </a>
        </div>
      </section>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="case-footer">
        <div>
          <strong>YP.</strong>

          <span>
            WEB DESIGNER &amp; DEVELOPER
          </span>
        </div>

        <span>
          YOGENDRAM PRIYADARSHAN
        </span>

        <span>
          © 2026
        </span>
      </footer>
    </main>
  );
}