import { site } from "../config/site";
import { Link } from "../router/router";
import { Section } from "../components/ui/Section";
import { Card, CardGrid } from "../components/ui/Card";
import { ButtonLink, ButtonRow } from "../components/ui/Button";
import { Callout } from "../components/ui/Callout";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Brazilian Zouk on Portland's west side</p>
          <h1>{site.tagline}</h1>
          <p className={styles.lead}>
            Progressive classes, friendly socials, and a community that cares how every dance feels.
            No partner or experience needed.
          </p>
          <ButtonRow>
            <ButtonLink to="/classes">See classes</ButtonLink>
            <ButtonLink to="/new-here" variant="secondary">
              First time? Start here
            </ButtonLink>
          </ButtonRow>
        </div>
      </section>

      {/* ---------- What we focus on ---------- */}
      <Section title="What we teach">
        <p className={styles.sectionIntro}>
          Moves are the easy part. We train the things that make you a dancer people seek out.
        </p>
        <CardGrid minCardWidth={220}>
          <Card title="Real technique">
            <p>Clear, progressive lessons that build on each other week by week.</p>
          </Card>
          <Card title="Connection">
            <p>How your partner feels matters more than how many moves you know.</p>
          </Card>
          <Card title="Safety & body care">
            <p>Zouk's head and torso movement, taught carefully and within every partner's range.</p>
          </Card>
          <Card title="Both roles">
            <p>Leads and follows each have their own craft. Anyone can learn either role.</p>
          </Card>
        </CardGrid>
      </Section>

      {/* ---------- How it works ---------- */}
      <Section title="How it works" tone="tinted">
        <CardGrid>
          <Card eyebrow="Step 1" title="Take a class">
            <p>Join our weekly progressive class. Experienced assistants help you along.</p>
          </Card>
          <Card eyebrow="Step 2" title="Stay for the social">
            <p>Practice what you learned right after class, with a buddy to show you around.</p>
          </Card>
          <Card eyebrow="Step 3" title="Keep growing">
            <p>Practicas, socials, and visiting artists as our community grows.</p>
          </Card>
        </CardGrid>
      </Section>

      {/* ---------- Where ---------- */}
      <Section width="reading">
        <Callout title={`We dance at ${site.venue.name}`}>
          <p>
            {site.venue.address} ({site.venue.area}).{" "}
            <a href={site.venue.mapUrl} target="_blank" rel="noopener noreferrer">
              Open in Maps
            </a>
          </p>
        </Callout>
        <p>
          Everyone is welcome here. Read our <Link to="/code-of-conduct">Code of Conduct</Link> to see how we
          look after each other.
        </p>
      </Section>
    </>
  );
}
