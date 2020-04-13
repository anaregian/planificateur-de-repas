import React from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemIcon,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360
    }
  })
);

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
