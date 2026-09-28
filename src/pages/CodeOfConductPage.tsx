import { site } from "../config/site";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { Callout } from "../components/ui/Callout";
import { ButtonLink, ButtonRow } from "../components/ui/Button";

export function CodeOfConductPage() {
  return (
    <>
      <PageHeader
        title="Code of conduct"
        intro="This code applies to everyone at our classes, practicas, socials, and workshops, and in our online spaces. That includes instructors, assistants, DJs, and guests."
      />

      <Section width="reading">
        <h2>Asking and declining</h2>
        <ul>
          <li>Anyone may ask anyone to dance, in any role.</li>
          <li>"No, thank you" is a complete answer. No reason is needed, and it is never taken personally.</li>
          <li>If you were declined, don't ask that person again that night. Let them come to you.</li>
          <li>You may stop a dance at any time for any reason. A simple "thank you" is enough.</li>
        </ul>

        <h2>Consent and touch</h2>
        <ul>
          <li>Keep your connection within the frame the dance needs. Adjust at once if your partner signals discomfort.</li>
          <li>Close embrace, dips, and intense moves need your partner's clear comfort. With new partners, start light and build.</li>
          <li>
            No unasked-for feedback or teaching at socials. At practicas, feedback is welcome only when both
            partners agree to it before the dance.
          </li>
          <li>Comments or touch that are sexual, demeaning, or unwanted are never okay, on or off the floor.</li>
        </ul>

        <h2>Head-movement and body safety</h2>
        <ul>
          <li>Lead head movement only after you have learned it in class, and only within your partner's range.</li>
          <li>Never force, yank, or rush a head or torso movement. If in doubt, leave it out.</li>
          <li>Follows may skip or soften any movement at any time. Leads adjust without complaint.</li>
          <li>Mind the floor: watch for other couples, and keep big movements to open space.</li>
        </ul>

        <h2>Inclusion</h2>
        <ul>
          <li>We say "leads" and "follows," not "men" and "women."</li>
          <li>Treat every dancer with respect, whatever their gender, orientation, race, age, body, ability, or experience.</li>
          <li>Dance with newcomers. Every experienced dancer was once a beginner.</li>
        </ul>

        <h2>Hygiene and care</h2>
        <ul>
          <li>Arrive clean. Bring a spare shirt, deodorant, and breath mints.</li>
          <li>Stay home if you are sick.</li>
          <li>
            Don't dance while impaired by any substance. Safe Zouk depends on control and on sensing your
            partner, and impairment dulls both.
          </li>
        </ul>
      </Section>

      <Section title="Reporting a concern" width="reading" tone="tinted">
        <ul>
          <li>
            At every event, 1–2 named safety contacts wear an identifying marker. You can talk to them, to an
            instructor, or send a private message afterward.
          </li>
          <li>
            You can also use our report form. Leaving your name is optional. Only the safety council sees
            responses, and they are checked every week.
          </li>
          <li>
            Anonymous reports are taken seriously. On their own they lead us to watch, check, and coach
            rather than to remove anyone. If you leave contact details, we can follow up with you.
          </li>
          <li>Reports are kept as confidential as possible. You don't need proof to report something.</li>
          <li>Retaliating against someone who reports is itself a violation.</li>
        </ul>
        {site.reportFormUrl ? (
          <ButtonRow>
            <ButtonLink to={site.reportFormUrl}>Open the report form</ButtonLink>
          </ButtonRow>
        ) : (
          <Callout>
            <p>
              Our online report form is coming soon. Until then, talk to a safety contact or email{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>
          </Callout>
        )}
      </Section>

      <Section title="What happens next" width="reading">
        <p>
          The safety council handles every report. It is made up of the lead instructors and council members
          appointed from dancers who actively contribute to the community and are widely trusted. Depending
          on how serious it is, the council may:
        </p>
        <ol>
          <li>Have a private conversation and give guidance.</li>
          <li>Issue a formal warning.</li>
          <li>Suspend the person from events for a set period.</li>
          <li>Remove them permanently.</li>
        </ol>
        <p>
          Serious cases, such as assault, threats, or deliberate unsafe dancing, may lead straight to
          removal. The council decides in good faith, and its decision is final. A council member who is
          involved in a report steps aside from that decision.
        </p>
      </Section>
    </>
  );
}
