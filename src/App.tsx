import { Container, Heading, Section } from "pietra-ui";

import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SECTIONS } from "@/consts";
import { FormattedMessage } from "@/i18n";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        {SECTIONS.filter((section) => !["about", "projects"].includes(section.id)).map(
          (section) => (
            <Section key={section.id} size="4" id={section.id} style={{ minHeight: "100vh" }}>
              <Container size="3">
                <Heading size="6">
                  <FormattedMessage id={`nav.${section.id}`} defaultMessage={section.label} />
                </Heading>
              </Container>
            </Section>
          ),
        )}
      </main>
    </>
  );
}
