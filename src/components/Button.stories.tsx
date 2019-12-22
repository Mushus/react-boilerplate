import React from 'react';
import Button from '~/components/Button';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

export default {
  title: 'Button',
  decorators: [withKnobs, withInfo({ inline: true })],
};

export const withText = () => {
  const label = text('label', 'Hello Button');
  return <Button>{label}</Button>;
};
