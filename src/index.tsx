import React from "react";
import ReactDOM from "react-dom";

import { Button } from "@material-ui/core";
import SyncIcon from "@material-ui/icons/Sync";

import { showSnack } from "components/GlobalSnackbar";

import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register({
  onUpdate: () => {
    setTimeout(() => {
      showSnack("A new version is available!!!", {
        variant: "info",
        action: () => (
          <Button
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<SyncIcon />}
            onClick={() => window.location.reload()}
          >
            Update
          </Button>
        ),
      });
    }, 1500);
  },
});
