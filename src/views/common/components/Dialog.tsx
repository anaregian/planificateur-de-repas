import React from "react";
import {
  Dialog as DialogBase,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      "& .MuiTextField-root": {
        marginBottom: theme.spacing(1)
      }
    }
  })
);

type OwnProps = {
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onConfirm: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: React.ReactNode;
};

type Props = OwnProps;

export const Dialog: React.FC<Props> = ({ isOpen, onClose, onConfirm, title, children }) => {
  const classes = useStyles();

  const confirmAndClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    onConfirm(e);
    onClose(e);
  };

  return (
    <DialogBase open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent className={classes.content}>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Annuler
        </Button>
        <Button onClick={confirmAndClose} color="primary">
          Confirmer
        </Button>
      </DialogActions>
    </DialogBase>
  );
};
