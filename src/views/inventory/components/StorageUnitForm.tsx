import React from "react";
import { TextField } from "@material-ui/core";
import { Dialog } from "@app/views/common/components/Dialog";

type OwnProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type Props = OwnProps;

export const StorageUnitForm: React.FC<Props> = ({ isOpen, handleClose }) => {
  return (
    <Dialog title="Nouvelle place rengement" isOpen={isOpen} onClose={handleClose}>
      <TextField autoFocus variant="outlined" label="Nom" type="text" fullWidth />
    </Dialog>
  );
};
