import Image from "next/image";
import DigitalGlobe from "../components/DigitalGlobe";

const services = [
  ["01", "Digital presence", "Website development, design, content, search visibility, and campaigns that help your business get found."],
  ["02", "Applied technology", "Mobile app development and IT services implementation that turn a useful idea into a working tool."],
  ["03", "Market momentum", "Business research, digital marketing, and event strategy that connect your offer to the right audience."],
];

const principles = [
  ["Business first", "Every engagement begins with the decision, customer, or operational challenge that needs to move."],
  ["Built to last", "We make considered technical choices and create systems that can grow with your business."],
  ["Clear partnership", "You get direct communication, useful perspective, and a team that takes ownership."],
];

function ArrowUpRight() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="arrow-icon"><path d="M3 13 13 3M6 3h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SocialIcon({ name }: { name: "linkedin" | "facebook" | "instagram" }) {
  if (name === "linkedin") return <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M5.37 3.42A2.38 2.38 0 1 1 .62 3.42a2.38 2.38 0 0 1 4.75 0ZM.98 8.13h4.78V23H.98V8.13ZM8.75 8.13h4.58v2.03h.06c.64-1.21 2.2-2.49 4.53-2.49 4.84 0 5.73 3.18 5.73 7.31V23h-4.77v-7.11c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23H8.75V8.13Z" /></svg>;
  if (name === "facebook") return <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.54-4.7 1.32 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.97.94-1.97 1.9v2.28h3.35l-.54 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" /></svg>;
  return <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="2" /><circle cx="18" cy="6" r="1.25" fill="currentColor" /></svg>;
}

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Premanni home"><Image className="brand-logo" src="/premanni-logo.avif" alt="" width={48} height={48} priority /><span><strong>Premanni</strong><small>Technologies</small></span></a>
      <p className="header-descriptor">Technology consulting &amp; digital growth</p>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#services">Capabilities</a><a href="#approach">Approach</a><a href="#bits">Our initiative</a></nav>
      <a className="header-cta" href="mailto:info@premanni.com">Let&apos;s work together <ArrowUpRight /></a>
    </header>

    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-globe" aria-hidden="true"><DigitalGlobe /></div>
      <div className="hero-copy"><p className="eyebrow"><span /> Premanni Technologies</p><h1 id="hero-title">Technology consulting for businesses ready to stand out.</h1><p className="hero-intro">From websites and mobile apps to IT implementation and digital marketing, Premanni turns business needs into practical digital progress.</p><div className="hero-actions"><a className="button button-primary" href="mailto:info@premanni.com">Book a consultation <ArrowUpRight /></a><a className="button button-secondary" href="#services">What we do <span aria-hidden="true">↓</span></a></div></div>
      <aside className="hero-statement" aria-label="Premanni promise"><p className="statement-index">01 / 01</p><div className="statement-rule" /><p>Good technology is not the destination. It is the momentum behind your next decision.</p></aside>
    </section>

    <section className="intro-section" aria-labelledby="intro-title"><p className="section-label">What we are here for</p><div className="intro-content"><h2 id="intro-title">One partner for the work that connects your business to what comes next.</h2><p>Premanni is a technology consulting firm for teams that need the right mix of digital product, market insight, and implementation support.</p></div></section>

    <section className="services-section" id="services" aria-labelledby="services-title"><div className="section-heading"><p className="section-label">Capabilities</p><h2 id="services-title">Where we create momentum.</h2></div><div className="service-list">{services.map(([number, title, text]) => <article className="service-item" key={number}><p className="service-number">{number}</p><h3>{title}</h3><p>{text}</p><span className="service-arrow" aria-hidden="true"><ArrowUpRight /></span></article>)}</div></section>

    <section className="engagement-section" aria-labelledby="engagement-title">
      <div className="engagement-heading"><p className="section-label">The engagement</p><h2 id="engagement-title">From a clear brief to a working result.</h2></div>
      <ol className="engagement-steps">
        <li><span>01</span><div><h3>Understand</h3><p>We begin with the challenge, the people it affects, and the outcome that matters.</p></div></li>
        <li><span>02</span><div><h3>Shape</h3><p>We turn insight into a focused digital, technology, or marketing plan your team can act on.</p></div></li>
        <li><span>03</span><div><h3>Deliver</h3><p>We build, implement, and support the work needed to put that plan into motion.</p></div></li>
      </ol>
    </section>

    <section className="specialist-section" aria-labelledby="specialist-title">
      <div className="specialist-heading"><p className="section-label">Specialist capabilities</p><h2 id="specialist-title">The expertise around the work.</h2><p>Premanni combines product, marketing, and operational technology support so teams can solve the problem in front of them without losing sight of what comes next.</p></div>
      <div className="specialist-grid">
        <article><span>01</span><h3>Managed IT</h3><p>Implementation and ongoing support for the systems your team depends on.</p></article>
        <article><span>02</span><h3>Secure infrastructure</h3><p>Cybersecurity and network infrastructure support for resilient operations.</p></article>
        <article><span>03</span><h3>Digital marketing</h3><p>SEO, social media, email, advertising, and content that build digital reach.</p></article>
        <article><span>04</span><h3>Technology education</h3><p>Practical learning, career guidance, and workshops that build technology confidence.</p></article>
      </div>
    </section>

    <section className="approach-section" id="approach" aria-labelledby="approach-title"><div className="approach-heading"><p className="section-label">How we work</p><h2 id="approach-title">The right solution should feel like forward motion.</h2></div><div className="principle-list">{principles.map(([title, text], index) => <article className="principle" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="bits-section" id="bits" aria-labelledby="bits-title">
      <div className="initiative-label"><span className="initiative-dot" aria-hidden="true" /> A Premanni initiative</div>
      <div className="initiative-identity"><Image src="/bits-logo.svg" alt="BITs — Break Into Tech Successfully" width={448} height={145} /><p>by Premanni Technologies</p></div>
      <div className="bits-content">
        <p className="section-label">Beyond client work</p>
        <h2 id="bits-title">Turning potential into a path forward.</h2>
        <p>BITs—Break Into Tech Successfully—is Premanni&apos;s flagship initiative for people moving from education toward meaningful work in technology.</p>
        <ul className="initiative-pillars" aria-label="How BITs supports emerging talent">
          <li><span>01</span> Events &amp; access</li>
          <li><span>02</span> Skills &amp; guidance</li>
          <li><span>03</span> Industry connections</li>
        </ul>
        <div className="initiative-actions"><a className="initiative-link" href="https://bits.premanni.com" target="_blank" rel="noopener noreferrer">Explore the BITs program <ArrowUpRight /></a><div className="bits-social"><span>Follow Premanni</span><a href="https://www.linkedin.com/company/pr%C3%A9manni-technologies-ltd/" target="_blank" rel="noopener noreferrer"><SocialIcon name="linkedin" /> LinkedIn</a><a href="https://www.facebook.com/premannitech/" target="_blank" rel="noopener noreferrer"><SocialIcon name="facebook" /> Facebook</a><a href="https://www.instagram.com/pre.manni/" target="_blank" rel="noopener noreferrer"><SocialIcon name="instagram" /> Instagram</a></div></div>
      </div>
    </section>

    <section className="people-section" aria-labelledby="people-title">
      <div className="people-heading"><p className="section-label">Who we build with</p><h2 id="people-title">Progress looks different for every team.</h2></div>
      <div className="people-grid">
        <article><p className="people-index">01</p><h3>Businesses</h3><p>Organisations ready to improve how they show up, operate, or connect with customers.</p></article>
        <article><p className="people-index">02</p><h3>Founders</h3><p>Builders turning a market insight or useful idea into a credible digital product.</p></article>
        <article><p className="people-index">03</p><h3>Emerging talent</h3><p>Students, graduates, and career changers finding a route into technology through BITs.</p></article>
      </div>
    </section>

    <section className="contact-section" aria-labelledby="contact-title"><p className="section-label">Let&apos;s build what&apos;s next</p><h2 id="contact-title">Have a challenge worth solving?</h2><a href="mailto:info@premanni.com" className="contact-email">info@premanni.com <ArrowUpRight /></a></section>
    <footer className="site-footer"><a className="footer-brand" href="#top"><Image src="/premanni-logo.avif" alt="Premanni Technologies" width={34} height={34} /><span>Premanni Technologies</span></a><p>© {new Date().getFullYear()} Premanni Technologies</p><div><a href="https://bits.premanni.com" target="_blank" rel="noopener noreferrer">BITs</a><a href="mailto:info@premanni.com">Email</a></div><nav className="footer-social" aria-label="Premanni social media"><a href="https://www.linkedin.com/company/pr%C3%A9manni-technologies-ltd/" target="_blank" rel="noopener noreferrer" aria-label="Premanni on LinkedIn"><SocialIcon name="linkedin" /></a><a href="https://www.facebook.com/premannitech/" target="_blank" rel="noopener noreferrer" aria-label="Premanni on Facebook"><SocialIcon name="facebook" /></a><a href="https://www.instagram.com/pre.manni/" target="_blank" rel="noopener noreferrer" aria-label="Premanni on Instagram"><SocialIcon name="instagram" /></a></nav></footer>
  </main>;
}
