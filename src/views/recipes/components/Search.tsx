import React from "react";
import { useStyles } from "./Search.style";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import { Search as SeachIcon } from "@material-ui/icons";

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
