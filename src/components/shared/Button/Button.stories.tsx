import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Components/Shared/S001 - Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Cadastrar",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Sair",
  },
};
