import React from 'react';

import { Spinner, SpinnerProps } from '../Spinner';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
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
    hidden: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'text' },
    },
  }
}

export const Basic = (args: SpinnerProps) => (
  <Spinner {...args} />
);

export const Small = (args: SpinnerProps) => (
  <Spinner {...args} size={'sm'} />
);
export const Medium = (args: SpinnerProps) => (
  <Spinner {...args} />
);
export const Large = (args: SpinnerProps) => (
  <Spinner {...args} size={'lg'} />
);
export const Hidden = (args: SpinnerProps) => (
  <Spinner {...args} hidden={true} />
);
export const Colorised = (args: SpinnerProps) => (
  <Spinner {...args} color={'#ff1e4c'} />
);
