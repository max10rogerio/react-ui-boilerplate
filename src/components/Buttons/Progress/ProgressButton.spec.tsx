import React from "react";
import { render } from "@testing-library/react";
import { ProgressButton } from "./ProgressButton";

describe("Components", () => {
  describe("ProgressButton", () => {
    it("should be able to display circular progress", () => {
      const { container, rerender } = render(<ProgressButton loading={false} />);

      expect(container.querySelector("[role='progressbar']")).toBeFalsy();

      rerender(<ProgressButton loading={true} />);

      expect(container.querySelector("[role='progressbar']")).toBeTruthy();
    });
  });
});
