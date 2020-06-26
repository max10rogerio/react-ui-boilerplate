import React from "react";
import { render } from "@testing-library/react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { ContextMenu } from "./ContextMenu";
import { ContextMenuItem } from "./ContextMenuItem";

const RenderItem = (props: any = {}) => (
  <ContextMenuItem title="Test Item" icon={AddIcon} onClick={() => null} {...props} />
);

describe("Components", () => {
  it("should be able to render ContextMenu", () => {
    const { container } = render(
      <ThemeProvider theme={createMuiTheme()}>
        <ContextMenu>
          <RenderItem />
        </ContextMenu>
      </ThemeProvider>,
    );

    expect(container).toBeTruthy();
  });
});
