import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Password } from "./Password";

describe("Components", () => {
  describe("Password", () => {
    it("should be able to render an input", () => {
      const { getByPlaceholderText } = render(<Password placeholder="password" />);

      expect(getByPlaceholderText("password")).toBeTruthy();
    });

    it("should be able change input type", () => {
      const { getByPlaceholderText, container } = render(<Password placeholder="password" />);
      const input = getByPlaceholderText("password") as HTMLInputElement;
      const button = container.querySelector<HTMLButtonElement>("button");

      if (!button) {
        throw new Error("Button not found");
      }

      expect(input.type).toBe("password");

      fireEvent.click(button);

      expect(input.type).toBe("text");
    });
  });
});
