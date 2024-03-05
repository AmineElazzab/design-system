import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    color: "primary",
    // children: "Checkbox",
  },
};
export const Secondary: Story = {
  args: {
    color: "secondary",
    // children: "Checkbox",
  },
};
export const Danger: Story = {
  args: {
    color: "danger",
    // children: "Checkbox",
  },
};
export const Warning: Story = {
  args: {
    color: "warning",
    // children: "Checkbox",
  },
};
export const Success: Story = {
  args: {
    color: "success",
    // children: "Checkbox",
  },
};
export const Info: Story = {
  args: {
    color: "info",
    // children: "Checkbox",
  },
};
export const Light: Story = {
  args: {
    color: "light",
    // children: "Checkbox",
  },
};
export const Dark: Story = {
  args: {
    color: "dark",
    // children: "Checkbox",
  },
};
export const Small: Story = {
  args: {
    size: "sm",
    // children: "Checkbox",
  },
};
export const Medium: Story = {
  args: {
    size: "md",
    // children: "Checkbox",
  },
};
export const Large: Story = {
  args: {
    size: "lg",
    // children: "Checkbox",
  },
};
export const Loading: Story = {
  args: {
    isLoading: true,
    // children: "Checkbox",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    // children: "Checkbox",
  },
};
export const Checked: Story = {
  args: {
    checked: true,
    // children: "Checkbox",
  },
};
export const Label: Story = {
  args: {
    label: "Checkbox",
  },
};
export const All: Story = {
  args: {
    color: "primary",
    size: "md",
    isLoading: true,
    disabled: true,
    checked: true,
    label: "Checkbox",
  },
};
export const Default: Story = {
  args: {
    // children: "Checkbox",
  },
};
export const NoLabel: Story = {
  args: {
    // children: "Checkbox",
  },
};

export const Empty: Story = {
  args: {},
};
