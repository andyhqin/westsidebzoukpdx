import { site } from "../config/site";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { Card, CardGrid } from "../components/ui/Card";

export function AboutPage() {
  return (
    <>
      <PageHeader
        title="About us"
        intro={`${site.name} teaches Brazilian Zouk on Portland's west side so that every dancer becomes someone people love to dance with.`}
      />

      <Section title="Our mission" width="reading">
        <p>
          We teach through progressive classes that give technique, connection, and body safety equal
          weight. We welcome everyone, in either role, and grow our own assistants, teachers, and DJs from
          within.
        </p>
      </Section>

      <Section title="Our vision" width="reading" tone="tinted">
        <p>
          The west side grows a full Zouk ecosystem, known across the Pacific Northwest for producing the
          social dancers people love to dance with.
        </p>
        <ul>
          <li>Weekly progressive classes from beginner through advanced.</li>
          <li>Socials and practicas where newcomers are welcomed, not left on the wall.</li>
          <li>Visiting artists for weekend workshops, plus local teachers and DJs trained in-house.</li>
          <li>A partner to the wider Portland dance scene, not a rival.</li>
        </ul>
      </Section>

      <Section title="What we value">
        <CardGrid>
          <Card title="Skill with purpose">
            <p>We train real technique so the dance feels better for both partners, not just to look good.</p>
          </Card>
          <Card title="Connection over choreography">
            <p>How your partner feels matters more than how many moves you know.</p>
          </Card>
          <Card title="Safety first">
            <p>We lead within our partner's range, never force, and never dance through pain.</p>
          </Card>
          <Card title="Everyone belongs">
            <p>Any person can dance any role. All backgrounds, bodies, ages, and levels are welcome.</p>
          </Card>
          <Card title="Grow together">
            <p>Experienced dancers lift newcomers. Helping others is a path to growing yourself.</p>
          </Card>
        </CardGrid>
      </Section>

      {/* TBD: add real names, photos, and bios. */}
      <Section title="Your instructors" tone="tinted">
        <CardGrid>
          <Card title="Andrew">
            <p>Founder and instructor. Bio coming soon.</p>
          </Card>
          <Card title="Teaching partner">
            <p>Co-instructor. Name and bio coming soon.</p>
          </Card>
        </CardGrid>
      </Section>
    </>
  );
}
