import { site } from "../config/site";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { Card, CardGrid } from "../components/ui/Card";
import { Callout } from "../components/ui/Callout";
import { ButtonLink, ButtonRow } from "../components/ui/Button";
import styles from "./ClassesPage.module.css";

/*
 * Edit the schedule and prices here. "TBD" values are placeholders.
 */
const schedule = {
  classNight: "Night TBD",
  classTime: "Time TBD",
};

const prices = [
  { name: "Drop-in class", price: "TBD", note: "Pay as you go" },
  { name: "4-week series pass", price: "TBD", note: "Save by committing to a series" },
  { name: "8-week series pass", price: "TBD", note: "Best value" },
];

export function ClassesPage() {
  return (
    <>
      <PageHeader
        title="Classes & events"
        intro="One weekly class, a social right after, and more to come as our community grows."
      />

      <Section title="This season">
        <CardGrid>
          <Card eyebrow="Weekly" title="Progressive Zouk class">
            <p>
              <strong>
                {schedule.classNight}, {schedule.classTime}
              </strong>
            </p>
            <p>
              Beginner-friendly lessons that build week by week. Experienced dancers get extra detail and
              depth on the same concepts.
            </p>
          </Card>
          <Card eyebrow="After every class" title="Social dancing">
            <p>Put the lesson to work in a relaxed social right after class. Newcomers get a buddy for the night.</p>
          </Card>
          <Card eyebrow="Coming soon" title="Practicas & socials">
            <p>Guided practice nights and standalone socials start as our community grows.</p>
          </Card>
        </CardGrid>
      </Section>

      <Section title="Pricing" tone="tinted" width="reading">
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Price</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td className={styles.price}>{item.price}</td>
                <td>{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Where" width="reading">
        <p>
          <strong>{site.venue.name}</strong>
          <br />
          {site.venue.address}
          <br />
          {site.venue.area}
        </p>
        <ButtonRow>
          <ButtonLink to={site.venue.mapUrl}>Get directions</ButtonLink>
          <ButtonLink to="/new-here" variant="secondary">
            What to expect
          </ButtonLink>
        </ButtonRow>
        <Callout title="No partner needed">
          <p>We rotate partners in class, so you can come on your own.</p>
        </Callout>
      </Section>
    </>
  );
}
