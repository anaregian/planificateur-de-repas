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
  TextField,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { ExpandMore, Delete, Add } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { storageUnitActions } from "@app/context/storage-unit/store";
import { useForm } from "@app/hooks/useForm";
import { ingredientActions } from "@app/context/ingredient/store";
import { store } from "@app/context/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

type OwnProps = {
  storageUnit: StorageUnit;
};

type Props = OwnProps;

export const StorageUnit: React.FC<Props> = ({ storageUnit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { handleChange, values } = useForm({ name: "" });

  const addIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(ingredientActions.create({ name: values.name }));
    const createdIngredient = store.getState().ingredientContext.ingredients.find(i => i.name === values.name);
    dispatch(storageUnitActions.addIngredient({ id: storageUnit.id, ingredient: createdIngredient }));
  };

  const deleteStorageUnit = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(storageUnitActions.delete({ id: storageUnit.id }));
  };

  const deleteIngredient = (ingredientId: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(storageUnitActions.removeIngredient({ id: storageUnit.id, ingredientId }));
  };

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography className={classes.heading}>
          {storageUnit.name}
          <IconButton onClick={deleteStorageUnit} edge="end">
            <Delete />
          </IconButton>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List dense>
          <ListItem>
            <ListItemText>
              <TextField
                autoFocus
                onChange={handleChange}
                value={values.name}
                name="name"
                size="small"
                variant="outlined"
                type="text"
                fullWidth
              />
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={addIngredient} edge="end">
                <Add />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {storageUnit.ingredients.map(ingredient => (
            <ListItem key={ingredient.id}>
              <ListItemText>{ingredient.name}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={deleteIngredient(ingredient.id)} edge="end">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
