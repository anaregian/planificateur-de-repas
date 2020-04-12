import React from "react";
import { makeStyles, Theme, createStyles, Grid, Typography } from "@material-ui/core";
import { GroceryList as GroceryListContent } from "./components/GroceryList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacer: {
      marginBottom: theme.spacing(4)
    }
  })
);

export const GroceryList: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} className={classes.spacer}>
        <Grid item xs={12}>
          <Typography variant="h3">Liste d'épicerie</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacer}>
        <Grid item xs={12}>
          <GroceryListContent />
        </Grid>
      </Grid>
    </>
  );
};
