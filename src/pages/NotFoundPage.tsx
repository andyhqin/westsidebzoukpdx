import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { ButtonLink, ButtonRow } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <>
      <PageHeader title="Page not found" intro="That page may have moved." />
      <Section width="reading">
        <ButtonRow>
          <ButtonLink to="/">Go to the home page</ButtonLink>
        </ButtonRow>
      </Section>
    </>
  );
}
