import React, { useState } from "react";
import { makeStyles, Theme, createStyles, Grid, Typography, IconButton } from "@material-ui/core";
import { StorageUnit } from "./components/StorageUnit";
import { AddCircleOutline } from "@material-ui/icons";
import { StorageUnitForm } from "./components/StorageUnitForm";
import { useSelector } from "react-redux";
import { RootState } from "@app/context/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacer: {
      marginBottom: theme.spacing(4)
    }
  })
);

export const Inventory: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const { storageUnits } = useSelector((state: RootState) => ({
    storageUnits: state.storageUnitContext.storageUnits
  }));

  const handleAddIconClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StorageUnitForm isOpen={isOpen} handleClose={handleClose} />
      <Grid container spacing={2} className={classes.spacer}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Inventaire
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleAddIconClick}>
              <AddCircleOutline fontSize="large" />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacer}>
        <Grid item xs={12}>
          {storageUnits.map(unit => (
            <StorageUnit key={unit.name} storageUnit={unit} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
