import { Flex, Heading, IconButton, Text } from "pietra-ui";

import "./About.css";

import { SOCIAL_HANDLE, SOCIAL_LINKS } from "@/consts";
import { FormattedMessage } from "@/i18n";

export function About() {
  return (
    <section className="about" id="about">
      <Flex className="about-inner" direction="column" gap="6" justify="center" px="5">
        <Flex className="about-text" direction="column" gap="4">
          <Heading as="h2" size={{ initial: "8", sm: "9" }}>
            <FormattedMessage id="nav.about" />
          </Heading>
          <Text as="p" color="gray" mb="4" size={{ initial: "4", sm: "5" }}>
            <FormattedMessage id="about.body" />
          </Text>
          <Flex className="about-socials" gap="3" align="center">
            <Text color="gray" highContrast size={{ initial: "3", sm: "4" }}>
              <FormattedMessage id="about.reachMe" />
            </Text>
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <IconButton
                  aria-label={social.label}
                  asChild
                  color="gray"
                  highContrast
                  key={social.label}
                  variant="ghost"
                >
                  <a href={social.href} rel="noreferrer" target="_blank">
                    <Icon size={20} />
                  </a>
                </IconButton>
              );
            })}
            <Text
              className="about-handle"
              color="gray"
              highContrast
              size={{ initial: "1", sm: "2" }}
              weight="bold"
            >
              /{SOCIAL_HANDLE}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}
