import type { Meta, StoryObj } from '@storybook/react';
import '@shoelace-style/shoelace/dist/components/button/button';
import '@shoelace-style/shoelace/dist/components/icon/icon';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import React from 'react';

// Update the base path to use the correct version
setBasePath(
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/dist/'
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sl-button': any;
      'sl-icon': any;
    }
  }
}

const meta: Meta = {
  title: 'Shoelace/Button',
  component: 'sl-button',
  tags: ['autodocs'],
  argTypes: {
    // Variants
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'neutral', 'warning', 'danger', 'text'],
      description: "The button's theme variant",
      defaultValue: 'default'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: "The button's size",
      defaultValue: 'medium'
    },
    // Boolean properties
    caret: {
      control: 'boolean',
      description: 'Draws the button with a caret',
      defaultValue: false
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
      defaultValue: false
    },
    loading: {
      control: 'boolean',
      description: 'Draws the button in a loading state',
      defaultValue: false
    },
    outline: {
      control: 'boolean',
      description: 'Draws an outlined button',
      defaultValue: false
    },
    pill: {
      control: 'boolean',
      description: 'Draws a pill-style button with rounded edges',
      defaultValue: false
    },
    // Form properties
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The type of button',
      defaultValue: 'button'
    },
    // Link properties
    href: {
      control: 'text',
      description: 'When set, the button will be rendered as an <a> element',
    },
    target: {
      control: 'select',
      options: ['_blank', '_parent', '_self', '_top'],
      description: 'Where to display linked URL',
    },
    rel: {
      control: 'text',
      description: 'The relationship of the linked URL',
      defaultValue: 'noreferrer noopener'
    },
    // Content
    children: {
      control: 'text',
      description: "The button's label",
    }
  }
};

export default meta;
type Story = StoryObj;

// Base button
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    children: 'Button',
  },
};

// Variants (add Text here with other variants)
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large',
  },
};

// States
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

// Styles
export const Outline: Story = {
  args: {
    outline: true,
    children: 'Outline',
  },
};

export const Pill: Story = {
  args: {
    pill: true,
    children: 'Pill',
  },
};

// Link button
export const Link: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    children: 'Link Button',
  },
};

// Icons Examples
export const PrefixAndSuffixIcons: Story = {
  render: () => React.createElement(
    'div',
    null,
    [
      // Small buttons
      React.createElement('sl-button', { variant: 'default', size: 'small', key: 'small1' }, [
        React.createElement('sl-icon', { slot: 'prefix', name: 'gear', key: 'prefix' }),
        'Settings'
      ]),
      ' ',
      React.createElement('sl-button', { variant: 'default', size: 'small', key: 'small2' }, [
        React.createElement('sl-icon', { slot: 'suffix', name: 'arrow-counterclockwise', key: 'suffix' }),
        'Refresh'
      ]),
      ' ',
      React.createElement('sl-button', { variant: 'default', size: 'small', key: 'small3' }, [
        React.createElement('sl-icon', { slot: 'prefix', name: 'link-45deg', key: 'prefix' }),
        React.createElement('sl-icon', { slot: 'suffix', name: 'box-arrow-up-right', key: 'suffix' }),
        'Open'
      ]),

      // Line breaks
      React.createElement('br', { key: 'br1' }),
      React.createElement('br', { key: 'br2' }),

      // Medium buttons
      React.createElement('sl-button', { variant: 'default', key: 'medium1' }, [
        React.createElement('sl-icon', { slot: 'prefix', name: 'gear', key: 'prefix' }),
        'Settings'
      ]),
      ' ',
      React.createElement('sl-button', { variant: 'default', key: 'medium2' }, [
        React.createElement('sl-icon', { slot: 'suffix', name: 'arrow-counterclockwise', key: 'suffix' }),
        'Refresh'
      ]),
      ' ',
      React.createElement('sl-button', { variant: 'default', key: 'medium3' }, [
        React.createElement('sl-icon', { slot: 'prefix', name: 'link-45deg', key: 'prefix' }),
        React.createElement('sl-icon', { slot: 'suffix', name: 'box-arrow-up-right', key: 'suffix' }),
        'Open'
      ]),

      // Line breaks
      React.createElement('br', { key: 'br3' }),
      React.createElement('br', { key: 'br4' }),

      // Large buttons
      React.createElement('sl-button', { variant: 'default', size: 'large', key: 'large1' }, [
        React.createElement('sl-icon', { slot: 'prefix', name: 'gear', key: 'prefix' }),
        'Settings'
      ]),
      ' ',
      React.createElement('sl-button', { variant: 'default', size: 'large', key: 'large2' }, [
        React.createElement('sl-icon', { slot: 'suffix', name: 'arrow-counterclockwise', key: 'suffix' }),
        'Refresh'
      ]),
      ' ',
      React.createElement('sl-button', { variant: 'default', size: 'large', key: 'large3' }, [
        React.createElement('sl-icon', { slot: 'prefix', name: 'link-45deg', key: 'prefix' }),
        React.createElement('sl-icon', { slot: 'suffix', name: 'box-arrow-up-right', key: 'suffix' }),
        'Open'
      ])
    ]
  )
}; 