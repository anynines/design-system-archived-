import React from 'react';
import { action } from "@storybook/addon-actions";

import { BackButton, BackButtonProps } from '../BackButton';

export default {
  title: 'Atoms/BackButton',
  component: BackButton,
  argTypes: {
    onClick: {
      control: { type: 'disabled' },
    },
  }
}

export const Basic = (args: BackButtonProps) => (
  <BackButton onClick={action('BackButton-click')}>
    <>BackButton default</>
  </BackButton>
);
