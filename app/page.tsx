"use client";

import Image from "next/image";
import {
  Camera,
  Droplets,
  GraduationCap,
  Headphones,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PencilRuler,
  Phone,
  Recycle,
  Send,
  Sprout,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const companyName = "Company Name";
const emailAddress = "hello@example.com";
const phoneNumber = "+1 (868) 000-0000";
const whatsappUrl = "#"; // TODO: Replace with final WhatsApp link, e.g. https://wa.me/1868XXXXXXX
const emailUrl = `mailto:${emailAddress}`; // TODO: Replace email address when finalized.
const hydroponicsImage = "/images/hydroponics/hero.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Hydroponics?", href: "#why-hydroponics" },
  { label: "Contact", href: "#contact" },
];

const benefits = [
  {
    icon: Droplets,
    title: "Uses Less Water",
    text: "Designed to significantly reduce water consumption compared with traditional growing.",
  },
  {
    icon: Leaf,
    title: "Pesticide-Conscious Growing",
    text: "Controlled growing environments can support cleaner and more efficient cultivation.",
  },
  {
    icon: Sprout,
    title: "Faster Growth",
    text: "Optimized growing environments can help plants develop efficiently.",
  },
  {
    icon: Recycle,
    title: "Sustainable Future",
    text: "Make smarter use of land, water and growing space.",
  },
];

const services = [
  {
    icon: PencilRuler,
    title: "System Design",
    text: "Hydroponic layouts tailored to your available space and growing goals.",
  },
  {
    icon: Wrench,
    title: "Installation",
    text: "Professional setup and implementation of hydroponic growing systems.",
  },
  {
    icon: Headphones,
    title: "Support",
    text: "Ongoing assistance to help systems operate efficiently.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    text: "Practical guidance to help customers understand and manage their systems.",
  },
];

const solutions = [
  {
    title: "Commercial Hydroponics",
    text: "For farms and larger growing operations.",
  },
  {
    title: "Home Growing",
    text: "Compact solutions for homes and small spaces.",
  },
  {
    title: "Supplies & Equipment",
    text: "Hydroponic components, growing supplies and accessories.",
  },
];

const metrics = [
  {
    title: "Efficient Water Use",
    text: "Designed around recirculating growing systems.",
  },
  {
    title: "Optimized Space",
    text: "Grow efficiently in controlled environments.",
  },
  {
    title: "Local Production",
    text: "Support fresh food production closer to communities.",
  },
  {
    title: "Scalable Systems",
    text: "Solutions can evolve from small to larger operations.",
  },
];

function LogoMark() {
  return (
    <a className="brand" href="#home" aria-label={`${companyName} home`}>
      <span className="brand-mark" aria-hidden="true">
        <Leaf size={20} strokeWidth={2.2} />
      </span>
      <span>
        <strong>COMPANY NAME</strong>
        <small>Hydroponics</small>
      </span>
    </a>
  );
}

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a href={href} onClick={onClick}>
      {label}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage(
      "Thanks for reaching out. This form is ready for a future email or API service."
    );
  }

  return (
    <main id="home">
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <LogoMark />
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>
          <div className="nav-actions">
            <a className="btn btn-small btn-primary" href="#contact">
              Get in Touch
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              {...link}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>
      </header>

      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Hydroponic Solutions in Trinidad & Tobago</p>
            <h1>
              Fresh Thinking.
              <span>Better Growing.</span>
            </h1>
            <p className="hero-lede">
              Modern hydroponic solutions designed for a healthier, more
              sustainable future.
            </p>
            <p className="hero-support">
              We help businesses, growers and communities make better use of
              space, water and modern growing technology.
            </p>
            <div className="button-row">
              <a className="btn btn-primary" href="#why-hydroponics">
                Learn More
              </a>
              <a className="btn btn-outline" href={whatsappUrl}>
                <MessageCircle size={20} />
                Chat With Us
              </a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="image-glow" aria-hidden="true" />
            <div className="image-card">
              <Image
                src={hydroponicsImage}
                alt="Hydroponic lettuce growing in a bright modern greenhouse"
                width={1536}
                height={1024}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section why" id="why-hydroponics">
        <div className="container">
          <div className="section-heading centered reveal">
            <span className="section-icon">
              <Sprout size={22} />
            </span>
            <h2>Why Hydroponics?</h2>
            <p>
              Hydroponics uses modern growing technology to produce more while
              using fewer natural resources.
            </p>
          </div>
          <div className="benefit-grid reveal">
            {benefits.map((benefit) => (
              <article className="benefit-item" key={benefit.title}>
                <benefit.icon aria-hidden="true" size={28} />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-band" id="about">
        <div className="container about-grid">
          <div className="about-image reveal">
            <Image
              src={hydroponicsImage}
              alt="Rows of fresh hydroponic greens inside a greenhouse"
              width={1536}
              height={1024}
            />
          </div>
          <div className="section-copy reveal">
            <p className="eyebrow">About Us</p>
            <h2>Growing Smarter for Tomorrow</h2>
            <p>
              We are a new hydroponics company focused on developing practical,
              sustainable growing solutions for Trinidad & Tobago.
            </p>
            <p>
              Our goal is to combine modern agricultural technology with local
              knowledge to help make fresh produce more accessible, efficient
              and sustainable.
            </p>
            <a className="btn btn-primary" href="#what-we-do">
              Learn About Our Vision
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="what-we-do">
        <div className="container">
          <div className="section-heading centered reveal">
            <p className="eyebrow">What We Do</p>
            <span className="badge">Services Coming Soon</span>
            <h2>Complete Hydroponic Solutions</h2>
            <p>
              Our services are being developed to support growers from concept
              through operation.
            </p>
          </div>
          <div className="card-grid four reveal">
            {services.map((service) => (
              <article className="feature-card" key={service.title}>
                <span className="card-icon">
                  <service.icon size={25} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section solutions-band" id="solutions">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Solutions</p>
            <h2>What We&apos;re Building</h2>
            <p>Our product and solution range is currently being developed.</p>
          </div>
          <div className="card-grid three reveal">
            {solutions.map((solution, index) => (
              <article className="solution-card" key={solution.title}>
                <div className={`solution-image solution-${index + 1}`}>
                  <Image
                    src={hydroponicsImage}
                    alt={`${solution.title} hydroponics preview`}
                    width={768}
                    height={512}
                  />
                </div>
                <div className="solution-body">
                  <span className="coming-soon">Coming Soon</span>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section metrics-band">
        <div className="container">
          <div className="metrics-header reveal">
            <p className="eyebrow">Sustainability</p>
            <h2>Grow More With Less</h2>
          </div>
          <div className="metric-grid reveal">
            {metrics.map((metric) => (
              <article className="metric-card" key={metric.title}>
                <h3>{metric.title}</h3>
                <p>{metric.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-panel reveal">
          <div>
            <h2>Let&apos;s Build a Greener Future</h2>
            <p>
              Interested in hydroponics or want to learn more about what
              we&apos;re building?
            </p>
          </div>
          <div className="button-row">
            <a className="btn btn-light" href="#contact">
              Get in Touch
            </a>
            <a className="btn btn-ghost-light" href={whatsappUrl}>
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="section-copy reveal">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s Talk</h2>
            <p>
              Have a question about hydroponics, future products or potential
              projects? Send us a message.
            </p>
            <div className="contact-list">
              <a href="#contact">
                <MapPin size={20} />
                Trinidad & Tobago
              </a>
              <a href={emailUrl}>
                <Mail size={20} />
                {emailAddress}
              </a>
              <a href={whatsappUrl}>
                <Phone size={20} />
                {phoneNumber}
              </a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            {/* TODO: Connect this form to an API route, CRM, or email service when backend requirements are finalized. */}
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn btn-primary" type="submit">
              <Send size={18} />
              Submit
            </button>
            <p className="form-note" role="status" aria-live="polite">
              {formMessage || "Form UI only until messaging is connected."}
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <LogoMark />
            <p>Modern hydroponic solutions for a more sustainable future.</p>
            <div className="social-row" aria-label="Social links">
              {/* TODO: Replace social and contact href values when final accounts are available. */}
              <a href="#" aria-label="Instagram">
                <Camera size={20} />
              </a>
              <a href="#" aria-label="Facebook">
                <Users size={20} />
              </a>
              <a href={whatsappUrl} aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              {navLinks
                .filter((link) => link.label !== "Why Hydroponics?")
                .map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label.replace(" Us", "")}
                  </a>
                ))}
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <div className="footer-links">
              <span>Trinidad & Tobago</span>
              <a href={emailUrl}>{emailAddress}</a>
              <a href={whatsappUrl}>{phoneNumber}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
