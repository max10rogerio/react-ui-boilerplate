import React from "react";

import { Typography, Container, Button, DialogContent } from "@material-ui/core";

import { useMobile } from "hooks/useMobile";
import { useDialog } from "hooks/useDialog";
import { useConfirmDialog } from "hooks/useDialogConfirm";

export const Home = () => {
  const isMobile = useMobile();
  const { show: showDialog, RenderDialog: Dialog } = useDialog({
    title: "Confirm dialog Example",
  });
  const { show: showConfirmDialog, RenderDialog: ConfirmDialog } = useConfirmDialog({
    defaults: {
      title: "Confirm action",
    },
    onConfirmed: (payload, hide) => {
      setTimeout(() => {
        hide();
      }, 3000);
    },
  });

  return (
    <>
      <ConfirmDialog />
      <Dialog>
        <DialogContent>
          <Typography>This is a confirm a confirm dialog</Typography>
        </DialogContent>
      </Dialog>
      <Container>
        <Typography>Screen size mobile? {isMobile ? "Yes" : "No"}</Typography>
        <Button onClick={showDialog}>Normal Dialog</Button>
        <br />
        <Button onClick={showConfirmDialog}>Confirm Dialog</Button>
      </Container>
    </>
  );
};
