import { Plus } from "lucide-react";
import { Avatar, Card, Flex, Grid, Heading, Text } from "pietra-ui";

import "./Projects.css";

import { useAppearance } from "@/appearance";
import { PROJECTS } from "@/consts";
import { FormattedMessage, useIntl } from "@/i18n";

export function Projects() {
  const { appearance } = useAppearance();
  const intl = useIntl();

  return (
    <section className="section-frame" id="projects">
      <Flex className="section-frame-inner" direction="column" gap="6" justify="center" px="5">
        <Heading as="h2" className="section-frame-content" size={{ initial: "8", sm: "9" }}>
          <FormattedMessage id="nav.projects" />
        </Heading>
        <Grid className="section-frame-content projects-list" columns="2" gap="3">
          {PROJECTS.map((project) => (
            <Card asChild key={project.name} size="1" variant="classic">
              <a
                aria-label={intl.formatMessage({ id: `projects.${project.name}.label` })}
                href={project.href}
                rel="noreferrer"
                target="_blank"
              >
                <Flex align="center" gap="3">
                  <Avatar
                    fallback={project.fallback}
                    radius="full"
                    size={{ initial: "3", sm: "4" }}
                    src={project.image?.[appearance] ?? undefined}
                  />
                  <Flex direction="column">
                    <Text size={{ initial: "2", sm: "3" }} weight="bold">
                      {project.name}
                    </Text>
                    <Text color="gray" size={{ initial: "1", sm: "2" }}>
                      <FormattedMessage id={`projects.${project.name}.description`} />
                    </Text>
                  </Flex>
                </Flex>
              </a>
            </Card>
          ))}
          <Card size="1" variant="classic">
            <Flex align="center" gap="3">
              <Avatar
                fallback={<Plus size={20} />}
                radius="full"
                size={{ initial: "3", sm: "4" }}
              />
              <Flex direction="column">
                <Text size={{ initial: "2", sm: "3" }} weight="bold">
                  <FormattedMessage id="projects.comingSoon.title" />
                </Text>
                <Text color="gray" size={{ initial: "1", sm: "2" }}>
                  <FormattedMessage id="projects.comingSoon.subtitle" />
                </Text>
              </Flex>
            </Flex>
          </Card>
        </Grid>
      </Flex>
    </section>
  );
}
