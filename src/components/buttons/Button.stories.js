import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Components | Buttons',
  parameters: {
    component: Button,
    componentSubtitle: 'Buttons are used to initialize an action. Their labels express what action will occur when the user interacts with it.', //  Introduction under doc title
  },
};

export const primary = () => (
  <div>
    <Button onClick={action('Button clicked')}>Button</Button>
    <Button onClick={action('Button clicked')} disabled>Button Disabled</Button>
  </div>
)
