import React from "react";
import { List, ListItem, Checkbox, ListItemText, ListItemIcon } from "@material-ui/core";
import { useStyles } from "./GroceryList.style";

export const GroceryList: React.FC = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem dense button>
        <ListItemIcon>
          <Checkbox edge="start" />
        </ListItemIcon>
        <ListItemText>Boulet</ListItemText>
      </ListItem>
    </List>
  );
};
