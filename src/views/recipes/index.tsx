import React, { useState } from "react";
import { Typography, Grid, makeStyles, Theme, createStyles, IconButton } from "@material-ui/core";
import { Search } from "./components/Search";
import { Recipe } from "./components/Recipe";
import { AddCircleOutline } from "@material-ui/icons";
import { RecipeForm } from "./components/RecipeForm";
import { useSelector } from "react-redux";
import { RootState } from "@app/context/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacer: {
      marginBottom: theme.spacing(4)
    }
  })
);

export const Recipes: React.FC = () => {
  const classes = useStyles();

  const { recipes } = useSelector((state: RootState) => ({
    recipes: state.recipeContext.recipes
  }));

  const [isOpen, setOpen] = useState(false);

  const handleAddIconClick = () => {
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(false);
  };

  return (
    <>
      <RecipeForm actionType="create" isOpen={isOpen} handleClose={handleClose} />
      <Grid container spacing={2} className={classes.spacer}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Recettes
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleAddIconClick}>
              <AddCircleOutline fontSize="large" />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacer}>
        <Grid item xs={6}>
          <Search />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.spacer}>
        {recipes.map(recipe => (
          <Grid key={recipe.id} item xs={12} sm={6} md={4} lg={3}>
            <Recipe recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
