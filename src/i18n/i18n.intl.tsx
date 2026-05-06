import type { ComponentProps } from "react";
import { FormattedMessage as IntlFormattedMessage, useIntl as useIntlBase } from "react-intl";

import type { MessageId } from "./i18n.messages";

interface TypedMessageDescriptor {
  id: MessageId;
  defaultMessage?: string;
}

type TypedFormattedMessageProps = Omit<ComponentProps<typeof IntlFormattedMessage>, "id"> & {
  id: MessageId;
};

export function FormattedMessage(props: TypedFormattedMessageProps) {
  return <IntlFormattedMessage {...props} />;
}

export function useIntl() {
  const intl = useIntlBase();

  return {
    formatMessage: (descriptor: TypedMessageDescriptor): string => intl.formatMessage(descriptor),
  };
}
