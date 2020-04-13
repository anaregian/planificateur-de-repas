import React from "react";
import { TextField } from "@material-ui/core";
import { Dialog } from "@app/views/common/components/Dialog";
import { useForm } from "@app/hooks/useForm";
import { useDispatch } from "react-redux";
import { storageUnitActions } from "@app/context/storage-unit/store";

type OwnProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type Props = OwnProps;

export const StorageUnitForm: React.FC<Props> = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const { handleChange, values } = useForm({ name: "" });

  const addStorageUnit = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(storageUnitActions.create({ name: values.name }));
  };

  return (
    <Dialog onConfirm={addStorageUnit} title="Nouvelle place rengement" isOpen={isOpen} onClose={handleClose}>
      <TextField
        autoFocus
        onChange={handleChange}
        value={values.name}
        name="name"
        variant="outlined"
        label="Nom"
        type="text"
        fullWidth
      />
    </Dialog>
  );
};
