import Image from "next/image";
import { partners } from "./PartnerShowcase.data";

export default function PartnerShowcase() {
  return (
    <section className="partner-section" aria-labelledby="partners-title">
      <div className="partner-heading">
        <p className="section-label">In partnership with</p>
        <h2 id="partners-title">Opportunity grows when more people are in the room.</h2>
        <p>BITs works alongside organizations building practical routes into technology, entrepreneurship, and meaningful work.</p>
      </div>
      <div className="partner-logo-grid" role="list" aria-label="BITs partners">
        {partners.map((partner) => (
          <div className="partner-logo-card" key={partner.name} role="listitem">
            <Image src={partner.src} alt={partner.name} width={partner.width} height={partner.height} />
          </div>
        ))}
      </div>
      <a className="partner-link" href="https://bits.premanni.com/bits/partners" target="_blank" rel="noopener noreferrer">
        Discover BITs partnerships <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
