import React from "react";
import { render } from "@testing-library/react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import { GlobalSnackbarProvider, showSnack, GlobalSnackbar, snack, getGlobalSnack } from "./GlobalSnackbar";

const InstanceSnackbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <GlobalSnackbarProvider>
        <GlobalSnackbar />
        {children || null}
      </GlobalSnackbarProvider>
    </ThemeProvider>
  );
};

describe("Components", () => {
  describe("GlobalSnackbar", () => {
    it("should be able to get an invalid instance of snackbar", async () => {
      const snackInstance = getGlobalSnack();
      expect(snackInstance).toBeFalsy();
    });

    it("should be able to get an invaid executation of showSnack", () => {
      const show = showSnack();

      expect(show).toBeFalsy();
    });

    it("should be able to get a valid executation of showSnack", () => {
      render(<InstanceSnackbar />);
      const show = showSnack();

      expect(show).toBeTruthy();
    });

    it("should be able to call generic snacks", () => {
      render(<InstanceSnackbar />);

      expect(typeof snack.error()).toBe("number");
      expect(typeof snack.warning()).toBe("number");
      expect(typeof snack.success()).toBe("number");
      expect(typeof snack.info()).toBe("number");
    });

    it("should be able to get instance of snackbar", () => {
      render(<InstanceSnackbar />);

      const snackInstance = getGlobalSnack();
      expect(snackInstance).toBeTruthy();
    });

    it("should be able render GlobalSnackbarProvider", () => {
      const { container } = render(<InstanceSnackbar />);

      expect(container).toBeTruthy();
    });

    it("should be able check instance of snackbar", () => {
      render(<InstanceSnackbar />);

      const instance = getGlobalSnack();

      expect(instance).toBeTruthy();
    });
  });
});
