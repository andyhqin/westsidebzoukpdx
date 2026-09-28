import { site } from "../config/site";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { Callout } from "../components/ui/Callout";
import { FaqItem, FaqList } from "../components/ui/Faq";
import { ButtonLink, ButtonRow } from "../components/ui/Button";

export function NewHerePage() {
  return (
    <>
      <PageHeader
        title="New here?"
        intro="Welcome! Here's everything you need for your first night."
      />

      <Section title="Your first night" width="reading">
        <ol>
          <li>
            <strong>Arrive about 10 minutes early</strong> at {site.venue.name}. We'll say hi and get you
            checked in.
          </li>
          <li>
            <strong>Meet your buddy.</strong> An experienced assistant looks out for you all night,
            including at the social.
          </li>
          <li>
            <strong>Take the class.</strong> We rotate partners, so you'll dance with lots of people.
          </li>
          <li>
            <strong>Stay for the social.</strong> Try what you learned in a relaxed setting. Watching is
            fine too.
          </li>
        </ol>
        <Callout title="What to bring">
          <ul>
            <li>Comfortable clothes you can move in.</li>
            <li>Shoes with smooth soles that can turn (no grippy sneakers). Socks work in a pinch.</li>
            <li>Water, and a spare shirt if you run warm.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="Common questions" width="reading" tone="tinted">
        <FaqList>
          <FaqItem question="Do I need a partner?">
            <p>No. We rotate partners during class, and most people come on their own.</p>
          </FaqItem>
          <FaqItem question="Do I need dance experience?">
            <p>
              No. Our classes start from the basics. If you already dance salsa, bachata, kizomba, or West
              Coast Swing, you'll pick things up fast and still find plenty of depth.
            </p>
          </FaqItem>
          <FaqItem question="Should I lead or follow?">
            <p>
              Either. Roles aren't tied to gender here. Pick the one that interests you, and feel free to
              learn both later.
            </p>
          </FaqItem>
          <FaqItem question="Aren't the head movements dangerous?">
            <p>
              We teach head and torso movement step by step, only after the basics, and always within each
              partner's comfort. You can skip or soften any movement at any time.
            </p>
          </FaqItem>
          <FaqItem question="What if I feel uncomfortable?">
            <p>
              You can say no to any dance or stop one at any time. Our safety contacts are at every event,
              and our Code of Conduct explains how we look after each other.
            </p>
          </FaqItem>
        </FaqList>
        <ButtonRow>
          <ButtonLink to="/classes">See the schedule</ButtonLink>
          <ButtonLink to="/code-of-conduct" variant="secondary">
            Read the Code of Conduct
          </ButtonLink>
        </ButtonRow>
      </Section>
    </>
  );
}
