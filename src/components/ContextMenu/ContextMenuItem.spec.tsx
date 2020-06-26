import React from "react";
import { render } from "@testing-library/react";

import AddIcon from "@material-ui/icons/Add";

import { ContextMenuItem } from "./ContextMenuItem";

const RenderItem = (props: any = {}) => (
  <ContextMenuItem title="Test Item" icon={AddIcon} onClick={() => null} {...props} />
);

describe("Components", () => {
  describe("ContextMenuItem", () => {
    it("should be able to render ContextMenuItem", () => {
      const { container } = render(<RenderItem />);

      expect(container).toBeTruthy();
    });

    it("should be able to render ContextMenuItem with fixed false", () => {
      const { container } = render(<RenderItem fixed={false} />);
      expect(container.querySelector("[role='menuitem']")).toBeTruthy();
    });
  });
});
