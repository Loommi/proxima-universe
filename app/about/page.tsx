import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { publicRecords } from "@/lib/canon";

const archiveIndex = [
  ["People", "person"], ["Technology", "technology"], ["Science", "science"],
  ["Places", "celestial_body"], ["Missions", "mission"], ["Timeline", "era"],
] as const;

const starts = [
  ["Lumen", "Humanity’s first interstellar mission vessel", "/records/lumen"],
  ["Gaia", "A major system associated with Mission Lumen", "/records/gaia"],
  ["Proxima Centauri", "The destination system", "/records/proxima-centauri"],
  ["Interstellar Communication", "How information crosses the distance", "/records/interstellar-communication"],
];

export const metadata = { title: "About" };

export default function About() {
  return <SiteShell><main className="about-page">
    <header className="about-intro page-grid">
      <aside className="archive-label"><span>PROXIMA / ABOUT</span><span>PUBLIC ARCHIVE — DOCUMENT 000</span></aside>
      <div className="about-lead"><p className="eyebrow">Reference frame / public canon</p><h1>A universe built around one journey beyond the Solar System.</h1><p>Proxima is a hard-science-fiction universe centered on humanity’s first interstellar expedition toward the nearest star.</p></div>
      <dl className="about-meta">
        <div><dt>Form</dt><dd>Fictional universe</dd></div><div><dt>Primary work</dt><dd>Proxima Journey</dd></div><div><dt>Destination</dt><dd>Proxima Centauri</dd></div><div><dt>Distance</dt><dd>4.24 light-years</dd></div><div><dt>Status</dt><dd>In development</dd></div>
      </dl>
    </header>

    <section className="about-section page-grid"><div className="section-index">01 / WHAT IS PROXIMA</div><div className="about-copy"><h2>A future recorded from the outside.</h2><div className="copy-columns"><p>The universe begins with a real astronomical fact: Proxima Centauri is the nearest known star to the Sun, separated from Earth by approximately 4.24 light-years.</p><p>From that distance follows a larger system of questions about propulsion, time, communication, survival and the institutions capable of sustaining an interstellar undertaking.</p></div></div></section>

    <section className="about-section journey-section page-grid"><div className="section-index">02 / THE JOURNEY</div><div className="about-copy"><div className="archive-note">MISSION / LUMEN · REFERENCE / HELIOCENTRIC</div><div className="about-route" aria-label="Earth to Proxima Centauri, a distance of 4.24 light-years"><div><strong>Earth</strong><span>Origin</span></div><div className="about-track"><i/><b>LUMEN</b><span>4.24 LIGHT-YEARS</span></div><div className="align-right"><strong>Proxima Centauri</strong><span>Destination system</span></div></div><p className="margin-copy">The route is simple on a diagram. Its physical consequences define the universe.</p></div></section>

    <section className="about-section page-grid"><div className="section-index">03 / THE ARCHIVE</div><div className="about-copy"><h2>The public knowledge layer.</h2><p className="section-deck">This site holds only approved records: entities, systems and context that can be known without entering the narrative.</p><div className="dense-index">{archiveIndex.map(([label,type])=>{const count=publicRecords.filter(r=>r.type===type).length;return <Link href={label==="Timeline"?"/timeline":`/universe?type=${type}`} key={type}><b>{label}</b>{count>0&&<span>{String(count).padStart(2,"0")} PUBLIC {count===1?"RECORD":"RECORDS"}</span>}<i>↗</i></Link>})}<Link href="/archive"><b>Archive</b><span>{String(publicRecords.length).padStart(2,"0")} DOCUMENTS</span><i>↗</i></Link></div></div></section>

    <section className="about-section boundary page-grid"><div className="section-index">04 / THE BOUNDARY</div><div className="about-copy"><div className="boundary-statement">This archive documents the universe,<br/>not the story.</div><div className="boundary-grid"><p>Public canon may explain the world, its science, technologies, people, institutions and historical context.</p><p>Narrative events, discoveries, outcomes and private causal relationships remain outside the archive.</p></div><div className="boundary-rule"><span>WORLD KNOWLEDGE / PUBLIC</span><span>STORY KNOWLEDGE / WITHHELD</span></div></div></section>

    <section className="about-section page-grid"><div className="section-index">05 / SCIENCE</div><div className="about-copy"><h2>Constraint before spectacle.</h2><p className="section-deck">Scientific ideas enter Proxima as structural conditions. Distance, energy, time and information shape what is possible.</p><div className="science-index">{[["Interstellar distance","Proxima Centauri"],["Fusion propulsion","Fusion Drive"],["Communication delay","Interstellar Communication"],["Closed ecosystems","Closed Ecological Systems"],["Mission systems","Gaia"]].map(([topic,entity],i)=><div key={topic}><span>{String(i+1).padStart(2,"0")}</span><b>{topic}</b><em>{entity}</em></div>)}</div></div></section>

    <section className="about-section explore-end page-grid"><div className="section-index">06 / EXPLORE</div><div className="about-copy"><p className="eyebrow">Start with</p><div className="start-index">{starts.map(([title,desc,href])=><Link href={href} key={href}><div><b>{title}</b><p>{desc}</p></div><span>↗</span></Link>)}</div><div className="archive-foot">SOURCE TYPE / APPROVED CANON <span>·</span> RECORD STATUS / PUBLIC <span>·</span> LAST REVIEW / 2026-10-05</div></div></section>
  </main></SiteShell>;
}
