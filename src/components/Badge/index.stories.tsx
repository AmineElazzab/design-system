import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {
    variant: "light",
    children: "BADGE",
  },
};
export const Filled: Story = {
  args: {
    variant: "filled",
    children: "BADGE",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "BADGE",
  },
};
export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "BADGE",
  },
};
export const Gradient: Story = {
  args: {
    variant: "filled",
    gradient: true,
    children: "BADGE",
  },
};
export const FullWidth: Story = {
  args: {
    variant: "filled",
    fullWidth: true,
    children: "BADGE",
  },
};
