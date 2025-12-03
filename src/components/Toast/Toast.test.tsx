import { render, screen } from "@testing-library/react";
import { Toast } from "./Toast";
import type { ToastType } from "./types";

const mockRemove = jest.fn();

describe("Toast", () => {
  test("Toast가 description과 함께 렌더링되어야 한다", () => {
    const toast: ToastType = {
      id: "1",
      description: "테스트 메시지",
      option: "default",
    };

    render(<Toast toast={toast} remove={mockRemove} />);
    expect(screen.getByText("테스트 메시지")).toBeInTheDocument();
  });

  test("다양한 option 타입의 Toast가 렌더링되어야 한다", () => {
    const successToast: ToastType = {
      id: "2",
      description: "성공 메시지",
      option: "success",
    };

    render(<Toast toast={successToast} remove={mockRemove} />);
    expect(screen.getByText("성공 메시지")).toBeInTheDocument();
  });
});
