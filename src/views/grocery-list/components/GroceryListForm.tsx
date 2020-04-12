import React from "react";
import { TextField } from "@material-ui/core";
import { Dialog } from "@app/views/common/components/Dialog";

type OwnProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type Props = OwnProps;

export const GroceryListForm: React.FC<Props> = ({ isOpen, handleClose }) => {
  return (
    <Dialog title="Nouveau item" isOpen={isOpen} onClose={handleClose}>
      <TextField autoFocus variant="outlined" label="Nom" type="text" fullWidth />
    </Dialog>
  );
};
