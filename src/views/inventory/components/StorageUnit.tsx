import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField
} from "@material-ui/core";
import { ExpandMore, Delete, Add } from "@material-ui/icons";
import { useStyles } from "./StorageUnit.style";

export const StorageUnit: React.FC = () => {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography className={classes.heading}>Frigo cuisine</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List dense>
          <ListItem>
            <ListItemText>
              <TextField autoFocus size="small" variant="outlined" type="text" fullWidth />
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <Add />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText>Hello</ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
