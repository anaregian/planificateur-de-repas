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
import { isWithinInterval, startOfWeek, endOfWeek } from "date-fns";
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

  const { ingredients, plannedRecipeIngredients, inventory, groceryListIngredients } = useSelector(
    (state: RootState) => ({
      ingredients: state.ingredientContext.ingredients,
      plannedRecipeIngredients: state.plannerContext.planner
        .filter(p => isWithinInterval(new Date(p.date), { start: startOfWeek(new Date()), end: endOfWeek(new Date()) }))
        .flatMap(p => p.recipeIds)
        .map(id => state.recipeContext.recipes.find(recipe => recipe.id === id))
        .flatMap(recipe => recipe.ingredients),
      inventory: state.storageUnitContext.storageUnits.flatMap(su => su.ingredients),
      groceryListIngredients: state.groceryListContext.items
    })
  );

  const recipeIngredientsToBuy = ingredients
    .filter(ingredients => plannedRecipeIngredients.includes(ingredients))
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
