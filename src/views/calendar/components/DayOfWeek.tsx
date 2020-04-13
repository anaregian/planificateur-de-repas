import React, { useState } from "react";
import { Typography, Grid, IconButton, makeStyles, Theme, createStyles } from "@material-ui/core";
import { format, isEqual } from "date-fns";
import { fr } from "date-fns/locale";
import { Recipe } from "@app/views/recipes/components/Recipe";
import { AddCircleOutline } from "@material-ui/icons";
import { RecipeDropdown } from "./RecipesDropdown";
import { useDispatch, useSelector } from "react-redux";
import { plannerActions } from "@app/context/planner/store";
import { RootState } from "@app/context/store";
import { AssignedRecipe } from "./AssignedRecipe";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacer: {
      marginBottom: theme.spacing(4)
    }
  })
);

type OwnProps = {
  currentDay: string;
};

type Props = OwnProps;

export const DayOfWeek: React.FC<Props> = ({ currentDay }) => {
  const classes = useStyles();
  const getDate = () => new Date(currentDay);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const { currentDayPlan, recipes } = useSelector((state: RootState) => ({
    currentDayPlan: state.plannerContext.planner.find(planner => isEqual(new Date(planner.date), getDate())),
    recipes: state.recipeContext.recipes
  }));

  const openRecipesDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
  };

  const closeRecipesDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(false);
  };

  const addRecipe = (recipeId: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(plannerActions.assignRecipe({ date: getDate().toString(), recipeId }));
  };

  const recipesForCurrentDay = recipes.filter(recipe => currentDayPlan?.recipeIds.includes(recipe.id));

  return (
    <>
      <RecipeDropdown isOpen={isOpen} handleClose={closeRecipesDropdown} handleConfirm={addRecipe} />
      <div className={classes.spacer}>
        <Grid container>
          <Grid item xs={12}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h6">
                {format(getDate(), "'Le' EEEE d MMMM", { locale: fr })}
                <IconButton color="primary" component="span" onClick={openRecipesDropdown}>
                  <AddCircleOutline />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {recipesForCurrentDay.map(recipe => (
            <Grid key={recipe.id} item xs={12} sm={6} md={4} lg={3}>
              <AssignedRecipe currentDay={currentDay} recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
