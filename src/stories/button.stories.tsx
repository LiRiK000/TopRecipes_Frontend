import { action } from '@storybook/addon-actions'

import { Button } from '../components/ui/button'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: { onClick: action('on-click') },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
}
export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
}
export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}
export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}
export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}
export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
}

export const DefaultSize: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
}
export const SmSize: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'sm',
  },
}
export const LgSize: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'lg',
  },
}
export const IconSize: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'icon',
  },
}
export const DefaultIconSize: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'lg',
  },
}
