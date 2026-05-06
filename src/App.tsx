import { Container, Heading, Section } from "pietra-ui";

import { Header } from "@/components/Header";

const SECTIONS = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "resume", title: "Resume" },
];

export default function App() {
  return (
    <>
      <Header />
      <main>
        {SECTIONS.map((section) => (
          <Section key={section.id} size="4" id={section.id} style={{ minHeight: "100vh" }}>
            <Container size="3">
              <Heading size="6">{section.title}</Heading>
            </Container>
          </Section>
        ))}
      </main>
    </>
  );
}
