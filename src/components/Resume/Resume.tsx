import { ArrowUpRight } from "lucide-react";
import { Flex, Heading, Link, Text } from "pietra-ui";

import { RESUME_PATH } from "@/consts";
import { FormattedMessage, useIntl } from "@/i18n";

export function Resume() {
  const intl = useIntl();

  return (
    <section className="section-frame" id="resume">
      <Flex className="section-frame-inner" direction="column" gap="6" justify="center" px="5">
        <Flex className="section-frame-content" direction="column" gap="4">
          <Heading as="h2" size={{ initial: "8", sm: "9" }}>
            <FormattedMessage id="nav.resume" />
          </Heading>
          <Text as="p" color="gray" size={{ initial: "4", sm: "5" }}>
            <FormattedMessage
              id="resume.body"
              values={{
                a: (chunks) => (
                  <Link
                    aria-label={intl.formatMessage({ id: "resume.linkLabel" })}
                    href={RESUME_PATH}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {chunks} <ArrowUpRight aria-hidden size={14} />
                  </Link>
                ),
              }}
            />
          </Text>
        </Flex>
      </Flex>
    </section>
  );
}
