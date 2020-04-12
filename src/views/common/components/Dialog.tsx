import React from "react";
import { Dialog as DialogBase, DialogTitle, DialogContent, Button, DialogActions } from "@material-ui/core";
import { useStyles } from "./Dialog.style";

type OwnProps = {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
};

type Props = OwnProps;

export const Dialog: React.FC<Props> = ({ isOpen, onClose, title, children }) => {
  const classes = useStyles();

  return (
    <DialogBase open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent className={classes.content}>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Annuller
        </Button>
        <Button onClick={onClose} color="primary">
          Ajouter
        </Button>
      </DialogActions>
    </DialogBase>
  );
};
