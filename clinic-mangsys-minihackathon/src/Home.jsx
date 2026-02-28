import { useEffect, useRef, useState } from "react";
import "./Home.css";

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const menus = [
    { label: "Product", items: ["Overview", "Scheduling", "Billing", "Telehealth"] },
    { label: "Resources", items: ["Docs", "Blog", "Guides", "Webinars"] },
    { label: "Our Community", items: ["Customers", "Partners", "Events"] },
    { label: "Support", items: ["Help Center", "Status", "Contact Support"] },
    { label: "About Us", items: ["Company", "Careers", "Security"] }
  ];

  return (
    <>
      <script id="omnidimension-web-widget" async src="https://omnidim.io/web_widget.js?secret_key=7dd0b5a33fd882ff5506ea29faa1a1da"></script>
      <header className="site-header" ref={navRef}>
        <nav className="nav container">
          <a href="#" className="brand">
            <img src="/imgi_2_specialist.png" alt="Logo" className="brand-logo" />
            <span className="brand-text">CLINIC<br />PULSE</span>
          </a>

          <ul className="nav-links" role="menubar" aria-label="Primary">
            {menus.map((m, idx) => (
              <li
                key={m.label}
                className={`nav-item ${openDropdown === idx ? "open" : ""}`}
                role="none"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="nav-link has-caret"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === idx}
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  onKeyDown={(e) => e.key === "Escape" && setOpenDropdown(null)}
                >
                  {m.label}
                  <svg className="caret" width="12" height="12" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5 7l5 6 5-6H5z" fill="currentColor" />
                  </svg>
                </button>
                <div className="dropdown" role="menu">
                  {m.items.map((it) => (
                    <a key={it} href="#" className="dropdown-link" role="menuitem">
                      {it}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
              <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
              <button className="search-btn" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21l-4.2-4.2M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </form>
            <a href="#login" className="btn outline">Login</a>
            
            <a href="#" className="btn primary">Get in Touch</a>
          </div>

          <button
            className={`hamburger ${mobileOpen ? "is-active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        <div className={`mobile-panel ${mobileOpen ? "open" : ""}`}>
          <div className="mobile-group">
            {menus.map((m) => (
              <details key={m.label} className="mobile-accordion">
                <summary>{m.label}</summary>
                <div className="mobile-accordion-items">
                  {m.items.map((it) => (
                    <a key={it} href="#" className="mobile-link">{it}</a>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <form className="mobile-search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
            <button className="search-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-4.2-4.2M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <div className="mobile-actions">
            <a href="#login" className="btn outline">Login</a>
            <a href="#" className="btn subtle">Customer Support</a>
            <a href="#" className="btn primary">Get in Touch</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h5>CLOUD-FIRST MEDICAL SOFTWARE</h5>
          <h1>
            Practice<br />
            Management<br />
            Software that works<br />
            for you
          </h1>
          <div className="hero-buttons">
            <a href="#" className="btn primary">Product Tour</a>
            <a href="#" className="btn outline">Get In Touch</a>
          </div>
        </div>
      </section>


      {/* NOTES & EMR FEATURE SECTION */}
<section className="notes-emr">
  <div className="container notes-grid">
    {/* Illustration / Screenshot */}
    <div className="notes-visual" aria-hidden="true">
      {/* Replace the src with your asset */}
      <img
        src="/imgi_19_a2.svg"
        alt="Plato app interface with notes and lab results"
        className="notes-img"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="notes-content">
      <div className="feature-block">
        <div className="feature-icon">
          {/* Pencil / note icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
            <path d="M14.06 6.19l3.75 3.75 1.59-1.59a1.5 1.5 0 0 0 0-2.12L17.81 4.6a1.5 1.5 0 0 0-2.12 0l-1.63 1.59z" fill="currentColor"/>
          </svg>
        </div>
        <div className="feature-text">
          <h3>Create electronic notes, your way</h3>
          <p>
            From structured forms to handwritten electronic notes—create medical records your way.
            Write, type, draw, or use speech‑to‑text. Securely access your EMR from anywhere.
          </p>
        </div>
      </div>

      <div className="feature-block">
        <div className="feature-icon">
          {/* Stack / records icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="feature-text">
          <h3>Integrated Electronic Medical Records</h3>
          <p>
            Receive direct lab and radiology results. Share care plans and summary notes securely.
            Contribute to national systems where applicable and complete your work from a single clinic system.
          </p>
          <br />
          <a href="#upgrade" className="btn primary btn-lg">Upgrade Today</a>
        </div>
      </div>
    </div>
  </div>
</section>


{/* CMS/EMR SELECTOR SECTION */}
<section className="cms-selector">
  <div className="container">
    <h2 className="cms-title">Which CMS/EMR suits you best?</h2>

    <div className="cms-grid" role="list">
      {/* Card 1 */}
      <a className="cms-card" role="listitem" href="#specialist">
        <span className="cms-icon" aria-hidden="true">
          {/* Heartbeat */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M3.5 12.5c-2.5-3.5.5-8 4.6-8 2 0 3.1 1 3.9 2 .8-1 1.9-2 3.9-2 4.1 0 7.1 4.5 4.6 8-2.3 3.3-8.5 7.5-8.5 7.5S5.8 15.8 3.5 12.5Z" fill="#1e66ff"/>
            <path d="M5 12h3l1.2-3.2L11.5 15l1.4-3h2.6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="cms-text">Specialist Clinic Software</span>
      </a>

      {/* Card 2 */}
      <a className="cms-card" role="listitem" href="#gp">
        <span className="cms-icon" aria-hidden="true">
          {/* Plus */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v16M4 12h16" stroke="#1e66ff" strokeWidth="2.4" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="cms-text">GP Clinic Solution</span>
      </a>

      {/* Card 3 */}
      <a className="cms-card" role="listitem" href="#dental">
        <span className="cms-icon" aria-hidden="true">
          {/* Tooth */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M7 4c-2 0-3.5 1.7-3 3.8 1.1 4.8 3.4 10.2 5 10.2 1.7 0 1.7-3 3-3s1.3 3 3 3c1.6 0 3.9-5.4 5-10.2C20.5 5.7 19 4 17 4c-2 0-3 1-5 1S9 4 7 4Z" stroke="#1e66ff" strokeWidth="1.6" fill="#eef4ff"/>
          </svg>
        </span>
        <span className="cms-text">Dental Practice Management Software</span>
      </a>

      {/* Card 4 */}
      <a className="cms-card" role="listitem" href="#allied">
        <span className="cms-icon" aria-hidden="true">
          {/* Caduceus simplified */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M12 3v18M8 7h8M9 11h6M10 15h4" stroke="#1e66ff" strokeWidth="1.6" strokeLinecap="round"/>
            <circle cx="12" cy="5" r="2" fill="#1e66ff"/>
          </svg>
        </span>
        <span className="cms-text">Allied Health Software</span>
      </a>

      {/* Card 5 */}
      <a className="cms-card" role="listitem" href="#aesthetic">
        <span className="cms-icon" aria-hidden="true">
          {/* Profile */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="9" r="4" fill="#1e66ff"/>
            <path d="M4.5 19.5a7.5 7.5 0 0 1 15 0" stroke="#1e66ff" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="cms-text">Aesthetic Clinic Software</span>
      </a>

      {/* Card 6 */}
      <a className="cms-card" role="listitem" href="#group">
        <span className="cms-icon" aria-hidden="true">
          {/* Hands + cross */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M6 14l-2 1.5V18a3 3 0 0 0 3 3h3l2-2" stroke="#1e66ff" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M18 14l2 1.5V18a3 3 0 0 1-3 3h-3l-2-2" stroke="#1e66ff" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M12 6v4M10 8h4" stroke="#1e66ff" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="cms-text">Group Practice Management</span>
      </a>
    </div>

    {/* Trust strip */}
    <p className="trust-strip">
      More than <strong>4000</strong> healthcare providers across Singapore, Australia, and the Asia‑Pacific Region
      trust our platform to run their full clinic operations.
    </p>
  </div>
</section>


{/* CTA BANNER + CONTACTS SECTION */}
<section className="cta-upgrade">
  <div className="cta-bg">
    <div className="cta-shape cta-shape--1" aria-hidden="true"></div>
    <div className="cta-shape cta-shape--2" aria-hidden="true"></div>
    <div className="cta-shape cta-shape--3" aria-hidden="true"></div>

    <div className="container cta-inner">
      <h2 className="cta-title">
        Upgrade from a Clinic Software to a Clinic<br />
        Operating System
      </h2>
      <a className="btn btn-cta">Book a Demo</a>
    </div>
  </div>
<br />
<br />
  {/* Contact / Footer strip */}
  <div className="contacts">
    <div className="container contacts-grid">
      <div className="contacts-left">
        <p className="contacts-company">Plato Medical Pte Ltd.</p>
        <p>68 Circular Road, #02‑01,<br />Singapore 049422</p>
        <p className="contacts-copyright">
          Copyright 2015, Plato Medical Pte Ltd
        </p>
      </div>

      <div className="contacts-right">
        <ul className="contacts-list">
          <li><strong>Singapore:</strong> +65 31294333, +65 83280301</li>
          <li><strong>Australia:</strong> +61 440 132 718</li>
          <li><strong>Malaysia:</strong> +60 162992309</li>
          <li><strong>Hong Kong:</strong> +852 30016045</li>
          <li><strong>Philippines:</strong> +63 1800 1550 0020</li>
          <li><strong>England:</strong> +70 162992309</li>
          <li><strong>India:</strong> +91 30016045</li>
          <li><strong>Pakistan:</strong> +92 1800 1550 0020</li>
        </ul>
       
      </div>
    </div>
  </div>
</section>



    </>
  );
}

export default Home;