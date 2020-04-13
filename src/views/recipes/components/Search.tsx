import React from "react";
import { Paper, IconButton, InputBase, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Search as SeachIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    }
  })
);

export const Search: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase className={classes.input} placeholder="Recherche" inputProps={{ "aria-label": "Recherche" }} />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SeachIcon />
      </IconButton>
    </Paper>
  );
};
