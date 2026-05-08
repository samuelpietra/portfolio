import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { Box, Flex, Heading, Text } from "pietra-ui";

import "./Hero.css";

import samuelImage from "@/assets/samuel-full-body-transparent.png";
import { FormattedMessage, useIntl } from "@/i18n";

const STAGES = ["challenge", "solution", "impact"] as const;

export function Hero() {
  const intl = useIntl();

  return (
    <>
      <Box className="section-frame">
        <Flex className="section-frame-inner" direction="column" gap="6" justify="center" px="5">
          <Flex className="section-frame-content" direction="column" gap="4">
            <Heading size={{ initial: "8", sm: "9" }}>
              <FormattedMessage id="hero.headline" />
            </Heading>
            <Text as="p" color="gray" mb="4" size={{ initial: "4", sm: "5" }}>
              <FormattedMessage id="hero.tagline" />
            </Text>
            <Flex className="hero-stages" gap="1" align="center">
              {STAGES.map((stage, index) => (
                <Fragment key={stage}>
                  {index > 0 && <ChevronRight size={12} color="var(--gray-11)" />}
                  <Text size={{ initial: "2", sm: "3" }} weight="bold">
                    <FormattedMessage id={`hero.${stage}`} />
                  </Text>
                </Fragment>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box className="hero-portrait">
        <img
          alt={intl.formatMessage({ id: "hero.imageAlt" })}
          className="hero-image"
          src={samuelImage}
        />
      </Box>
    </>
  );
}
