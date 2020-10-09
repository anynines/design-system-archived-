import React from 'react';
import { action } from "@storybook/addon-actions";

import { Button, ButtonProps } from '../Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'options', options: ["dark", "darker", "default", "primary", "submit"] }
    },
    size: {
      control: { type: "options", options: { Default: "default", Sm: "sm" } }
    },
    onClick: {
      control: { type: 'disabled' },
    },
  }
}

export const Basic = (args: ButtonProps) => (
  <Button {...args} onClick={action('button-click')}>
    <>Button default</>
  </Button>
);

export const Primary = () => (
  <Button type="primary">
    <span>Button Primary</span>
  </Button>
);

export const Submit = () => (
  <Button type="submit" onClick={action('button-click - Use this one for forms since the button will be from type submit and get the styles from a primary button.')}>
    <span>Button Submit</span>
  </Button>
);

export const OnClick = () => (
  <Button type="default" onClick={action('button-click - I can do something in case you want)')}>
    <span>Button onClick</span>
  </Button>
);
