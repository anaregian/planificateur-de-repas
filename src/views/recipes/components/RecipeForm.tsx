import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./RecipeForm.style";
import { Dialog } from "@app/views/common/components/Dialog";

type OwnProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type Props = OwnProps;

export const RecipeForm: React.FC<Props> = ({ isOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog title="Nouvelle recette" isOpen={isOpen} onClose={handleClose}>
      <div className={classes.flex}>
        <TextField autoFocus variant="outlined" label="Nom" type="text" className="name-field" />
        <TextField autoFocus variant="outlined" label="Durée (min)" type="number" />
      </div>
      <TextField multiline rows={4} variant="outlined" label="Description" type="text" fullWidth />
      <TextField multiline rows={10} variant="outlined" label="Démarche" type="text" fullWidth />
      <TextField autoFocus variant="outlined" label="Tags (séparés avec des espaces)" type="text" fullWidth />
    </Dialog>
  );
};
