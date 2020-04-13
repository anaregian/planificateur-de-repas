import React from "react";
import { MenuItem } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { RecipeCard } from "@app/views/common/components/RecipeCard";
import { plannerActions } from "@app/context/planner/store";

type OwnProps = {
  recipe: Recipe;
  currentDay: string;
};

type Props = OwnProps;

export const AssignedRecipe: React.FC<Props> = ({ currentDay, recipe }) => {
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(plannerActions.removeRecipe({ date: currentDay, recipeId: recipe.id }));
  };

  return (
    <RecipeCard
      recipe={recipe}
      menuActions={
        <MenuItem key="delete" onClick={handleDelete}>
          Supprimer
        </MenuItem>
      }
    />
  );
};
