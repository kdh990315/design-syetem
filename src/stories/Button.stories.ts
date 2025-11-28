import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/Button";
import { fn } from "storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "버튼 내용",
    size: "md",
    className: "",
    onClick: fn(),
  },
  argTypes: {
    children: {
      control: "text",
      description: "버튼에 들어갈 내용을 작성합니다",
    },
    size: {
      control: "radio",
      description: "버튼 크기를 선택합니다",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "radio",
      description: "버튼 스타일을 선택합니다",
      options: ["primary", "secondary", "outline"],
    },
    className: {
      control: "text",
      description: "버튼에 추가할 클래스를 작성합니다",
    },
    onClick: {
      description: "버튼 클릭 시 실행할 함수를 작성합니다",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
