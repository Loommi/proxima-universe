import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { getPublicRecord, publicRecords, recordTypeLabel } from "@/lib/canon";

const record = (slug: string) => {
  const item = getPublicRecord(slug);
  if (!item) throw new Error(`Missing public canon record: ${slug}`);
  return item;
};

const lumen = record("lumen");
const gaia = record("gaia");
const mission = record("mission-lumen");
const destination = record("proxima-centauri");

const systems = [
  record("fusion-drive"), gaia, record("closed-ecological-systems"), record("interstellar-communication"),
];

const scienceQuestions = [
  ["Distance", "What does 4.24 light-years mean for a human mission?", destination.slug],
  ["Communication", "How does information move when light itself takes years to arrive?", "interstellar-communication"],
  ["Propulsion", "What systems can enable travel between stars?", "fusion-drive"],
  ["Life", "Can a closed biological system remain stable across an interstellar journey?", "closed-ecological-systems"],
  ["Intelligence", "What role does mission intelligence hold when Earth cannot participate in real time?", gaia.slug],
  ["Reference frames", "How do distance, location and causal order shape what can be known?", destination.slug],
];

const archiveSelection = [lumen, gaia, record("fusion-drive"), record("closed-ecological-systems"), destination, mission];

export default function Home() {
  return <SiteShell><main className="home-depth">
    <section className="hero" aria-labelledby="hero-title"><div className="star-field" aria-hidden="true"/><div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/>
      <div className="hero-copy page-grid"><div className="hero-kicker mono">PROXIMA / PUBLIC ARCHIVE</div><h1 id="hero-title">The distance<br/>between worlds.</h1><p className="hero-intro">Humanity&apos;s first interstellar journey begins with a question measured across 4.24 light-years.</p><Link href="/universe" className="text-link">Enter the universe <span>↗</span></Link></div>
      <div className="hero-measure mono" aria-label="Distance from Sol to Proxima Centauri: 4.24 light-years"><span>SOL</span><span className="measure-line"/><span>4.24 LIGHT-YEARS</span><span className="measure-line"/><span>PROXIMA CENTAURI</span></div><div className="hero-coordinates mono">REF / HELIOCENTRIC<br/>RANGE / INTERSTELLAR</div>
    </section>

    <section className="home-section page-grid"><div className="section-index">01 / THE PREMISE</div><div className="home-body"><p className="eyebrow">Mission / Lumen</p><h2>A mission beyond the Solar System.</h2><div className="home-prose"><p>Proxima begins at the edge of ordinary human distance. An interstellar program has been created to send Lumen toward Proxima Centauri—the nearest known star to the Sun.</p><p>The mission is an attempt to carry human life beyond its world of origin. The public archive records the vessel, the destination and the scientific systems that make the undertaking conceivable.</p></div><dl className="fact-strip"><div><dt>Destination</dt><dd>{destination.title}</dd></div><div><dt>Distance</dt><dd>4.24 light-years</dd></div><div><dt>Mission</dt><dd>{mission.title}</dd></div><div><dt>Vessel</dt><dd>{lumen.title}</dd></div></dl></div></section>

    <section className="home-section home-lumen page-grid"><div className="section-index">02 / {lumen.identifier}</div><div className="home-body"><div className="home-heading-row"><div><p className="eyebrow">Vessel / habitat / mission system</p><h2>Lumen</h2></div><span className="record-state">PUBLIC RECORD · CONFIRMED</span></div><p className="home-deck">Lumen is not recorded as a vehicle alone. It is the vessel assigned to humanity&apos;s first interstellar expedition: a technological environment built to carry life through deep space.</p><div className="system-matrix"><Link href="/records/fusion-drive"><span>Propulsion</span><b>Fusion Drive</b></Link><Link href="/records/gaia"><span>Mission intelligence</span><b>Gaia</b></Link><Link href="/records/closed-ecological-systems"><span>Life support</span><b>Closed ecological systems</b></Link><Link href="/records/interstellar-communication"><span>Communication</span><b>Interstellar architecture</b></Link></div><Link href={`/records/${lumen.slug}`} className="text-link">Open complete vessel record <span>↗</span></Link></div></section>

    <section className="home-section distance-section page-grid"><div className="section-index">03 / DISTANCE</div><div className="home-body"><div className="distance-number">4.24 <span>LIGHT-YEARS</span></div><p className="home-deck">A distance large enough to turn communication into history. Even light requires more than four years to cross it.</p><div className="distance-map"><div><b>Earth</b><span>Origin</span></div><div className="distance-axis"><i/><span>LIGHT / 4.24 YEARS</span></div><div className="align-right"><b>Proxima Centauri</b><span>Destination system</span></div></div><div className="consequence-index">{["Distance","Communication","Isolation","Navigation","Relativity","Causality"].map((x,i)=><span key={x}>{String(i+1).padStart(2,"0")} {x}</span>)}</div></div></section>

    <section className="home-section page-grid"><div className="section-index">04 / SYSTEMS</div><div className="home-body"><h2>Systems of the journey</h2><div className="knowledge-list">{systems.map((item,i)=><Link href={`/records/${item.slug}`} key={item.id}><span>{String(i+1).padStart(2,"0")}</span><div><b>{item.title}</b><p>{item.summary}</p></div><em>{recordTypeLabel(item.type)}</em><i>↗</i></Link>)}</div></div></section>

    <section className="home-section history-section page-grid"><div className="section-index">05 / HISTORY</div><div className="home-body"><h2>Humanity before Proxima</h2><p className="section-deck">Only two frames of the pre-mission chronology are currently approved for public release. Dates remain unpublished until canon review is complete.</p><div className="history-line"><Link href="/records/earth-departure-era"><span>01</span><b>Earth Departure Era</b><p>Preparation for humanity&apos;s first interstellar mission.</p></Link><Link href="/records/mission-lumen"><span>02</span><b>Mission Lumen</b><p>The first expedition toward the Proxima Centauri system.</p></Link><i aria-hidden="true"/></div><Link href="/timeline" className="text-link">Open public timeline <span>↗</span></Link></div></section>

    <section className="home-section page-grid"><div className="section-index">06 / PEOPLE</div><div className="home-body"><div className="home-heading-row"><div><h2>Personnel records</h2><p className="section-deck">Public biographies appear only when identity and mission association are confirmed.</p></div><span className="record-state">01 PUBLIC RECORD</span></div><Link href="/records/elena-carter" className="personnel-row"><span>PER-001</span><div><b>Elena Carter</b><p>A person associated with the public record of Mission Lumen.</p></div><em>Mission Lumen</em><i>↗</i></Link></div></section>

    <section className="home-section science-home page-grid"><div className="section-index">07 / SCIENCE</div><div className="home-body"><h2>Questions built into the universe</h2><p className="section-deck">Science appears here as a set of constraints and responsibilities—not as decorative plausibility.</p><div className="question-index">{scienceQuestions.map(([topic,question,slug],i)=><Link href={`/records/${slug}`} key={topic}><span>{String(i+1).padStart(2,"0")}</span><b>{topic}</b><p>{question}</p><i>↗</i></Link>)}</div></div></section>

    <section className="home-section archive-home page-grid"><div className="section-index">08 / PUBLIC ARCHIVE</div><div className="home-body"><div className="home-heading-row"><div><h2>Open records</h2><p className="section-deck">{publicRecords.length} confirmed records are currently eligible for public rendering.</p></div><span className="record-state">FILTER / PUBLIC + CONFIRMED</span></div><div className="archive-records"><div className="archive-columns"><span>Identifier</span><span>Record</span><span>Class</span><span>Status</span></div>{archiveSelection.map(item=><Link href={`/records/${item.slug}`} key={item.id}><span>{item.identifier}</span><b>{item.title}</b><em>{recordTypeLabel(item.type)}</em><small>Confirmed</small></Link>)}</div><Link href="/archive" className="text-link">Enter the archive <span>↗</span></Link></div></section>

    <section className="home-section boundary-home page-grid"><div className="section-index">09 / PUBLISHING BOUNDARY</div><div className="home-body"><h2>The archive documents the universe.<br/>The books tell what happened inside it.</h2><div className="boundary-grid"><p>Public knowledge may include people, places, science, technologies, missions and historical context.</p><p>Narrative events, discoveries and plot outcomes remain outside the public archive.</p></div></div></section>

    <section className="home-section book-home page-grid"><div className="section-index">10 / {record("proxima-journey").identifier}</div><div className="home-body book-layout"><div><p className="eyebrow">Current working title</p><h2>Proxima Journey</h2></div><div><p className="home-deck">A book series following the human journey within this universe. It is one entrance into Proxima—not the boundary of the world itself.</p><Link href="/books" className="text-link">Open book record <span>↗</span></Link></div></div></section>

    <section className="home-section explore-directory page-grid"><div className="section-index">11 / EXPLORE</div><div className="home-body"><p className="eyebrow">Knowledge directory</p><div className="directory-grid"><div><b>Universe</b><Link href="/universe?type=person">People</Link><Link href="/universe?type=celestial_body">Places</Link><Link href="/universe?type=mission">Missions</Link></div><div><b>Science</b><Link href="/records/proxima-centauri">Distance</Link><Link href="/records/fusion-drive">Propulsion</Link><Link href="/records/closed-ecological-systems">Life</Link><Link href="/records/interstellar-communication">Communication</Link></div><div><b>Technology</b><Link href="/records/lumen">Lumen</Link><Link href="/records/gaia">Gaia</Link><Link href="/records/fusion-drive">Fusion Drive</Link></div><div><b>History + Archive</b><Link href="/timeline">Timeline</Link><Link href="/records/earth-departure-era">Earth Departure Era</Link><Link href="/archive">Public Records</Link><Link href="/search">Search</Link></div></div></div></section>
  </main></SiteShell>;
}
