import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "../components";

const meta = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    required: {
      control: "boolean",
      description: "필수 항목 표시 여부",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "이름",
    required: false,
  },
};

export const Required: Story = {
  args: {
    children: "이메일",
    required: true,
  },
};
