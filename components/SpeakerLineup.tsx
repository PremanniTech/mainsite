import Image from "next/image";

const lineup = [
  {
    category: "Featured speaker",
    name: "Prof. Delali Kwasi Dake",
    role: "Head, Department of ICT Education, University of Education, Winneba",
    image: "/speakers/dr-kwasi-dake.jpeg",
  },
  {
    category: "Featured panelist",
    name: "Queenie Adu-Amankwah Kessie",
    role: "Entrepreneurship Pathway panelist",
    image: "/speakers/queenie-adu-amankwah-kessie.jpeg",
  },
];

export default function SpeakerLineup() {
  return (
    <section className="lineup-section" aria-labelledby="lineup-title">
      <div className="lineup-heading">
        <p className="section-label">Voices from BITs</p>
        <h2 id="lineup-title">The people helping shape what&apos;s next.</h2>
        <p>Meet featured voices from the BITs program—bringing practical experience, ideas, and perspective into the room.</p>
      </div>
      <div className="lineup-grid">
        {lineup.map((person) => (
          <article className="lineup-card" key={person.name}>
            <div className="lineup-image"><Image src={person.image} alt={person.name} fill sizes="(max-width: 760px) 100vw, 40vw" /></div>
            <div className="lineup-details"><p>{person.category}</p><h3>{person.name}</h3><span>{person.role}</span></div>
          </article>
        ))}
      </div>
      <a className="lineup-link" href="https://bits.premanni.com/bits/speakers" target="_blank" rel="noopener noreferrer">Meet the BITs lineup <span aria-hidden="true">↗</span></a>
    </section>
  );
}
