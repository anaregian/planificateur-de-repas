import React from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemIcon,
  makeStyles,
  createStyles,
  Theme,
  TextField,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState, store } from "@app/context/store";
import { useForm } from "@app/hooks/useForm";
import { Add } from "@material-ui/icons";
import { ingredientActions } from "@app/context/ingredient/store";
import { groceryListActions } from "@app/context/grocery-list/store";

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
  const dispatch = useDispatch();

  const { handleChange, values } = useForm({ name: "" });

  const addIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(ingredientActions.create({ name: values.name }));
    const createdIngredient = store.getState().ingredientContext.ingredients.find(i => i.name === values.name);
    dispatch(groceryListActions.addIngredient({ ingredient: createdIngredient }));
  };

  const { ingredients, recipeIngredients, inventory, groceryListIngredients } = useSelector((state: RootState) => ({
    ingredients: state.ingredientContext.ingredients,
    recipeIngredients: state.recipeContext.recipes.flatMap(r => r.ingredients),
    inventory: state.storageUnitContext.storageUnits.flatMap(su => su.ingredients),
    groceryListIngredients: state.groceryListContext.items
  }));

  const recipeIngredientsToBuy = ingredients
    .filter(ingredients => recipeIngredients.includes(ingredients))
    .filter(ingredients => !inventory.includes(ingredients));

  const extraIngredientsToBuy = groceryListIngredients.filter(gli => !recipeIngredientsToBuy.includes(gli));

  const ingredientsToBuy = [...recipeIngredientsToBuy, ...extraIngredientsToBuy];

  return (
    <List className={classes.root}>
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
      {ingredientsToBuy.map(ingredient => (
        <ListItem key={ingredient.id} dense button>
          <ListItemIcon>
            <Checkbox edge="start" />
          </ListItemIcon>
          <ListItemText>{ingredient.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
