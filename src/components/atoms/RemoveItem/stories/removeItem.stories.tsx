import React from 'react';
import { action } from "@storybook/addon-actions";

import { RemoveItem, RemoveItemProps } from '../RemoveItem';

export default {
  title: 'Atoms/RemoveItem',
  component: RemoveItem,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: {
          small: "sm",
          medium: "md",
          large: "lg",
        }
      },
    },
    onClick: {
      control: { type: 'disabled' },
    }
  }
}

export const Basic = (args: RemoveItemProps) => (
  <RemoveItem {...args} onClick={action('RemoveItem-click')} />
);

export const Small = () => (
  <RemoveItem size={'sm'} />
);

export const Medium = () => (
  <RemoveItem size={'md'} />
);

export const Large = () => (
  <RemoveItem size={'lg'} />
);

export const OnClick = () => (
  <RemoveItem onClick={action('RemoveItem-click - I can do something in case you want)')} />
);
