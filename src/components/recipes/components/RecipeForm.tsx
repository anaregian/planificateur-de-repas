import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, TextField, DialogActions } from "@material-ui/core";
import { useStyles } from "./RecipeForm.style";

type OwnProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type Props = OwnProps;

export const RecipeForm: React.FC<Props> = ({ isOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Nouvelle recette</DialogTitle>
      <DialogContent className={classes.content}>
        <div className={classes.flex}>
          <TextField autoFocus variant="outlined" label="Nom" type="text" className="name-field" />
          <TextField autoFocus variant="outlined" label="Durée (min)" type="number" />
        </div>
        <TextField multiline rows={4} variant="outlined" label="Description" type="text" fullWidth />
        <TextField multiline rows={10} variant="outlined" label="Démarche" type="text" fullWidth />
        <TextField autoFocus variant="outlined" label="Tags (séparés avec des espaces)" type="text" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Annuller
        </Button>
        <Button onClick={handleClose} color="primary">
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
};
