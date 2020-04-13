import React from "react";
import { useState } from "react";
import { MenuItem } from "@material-ui/core";
import { recipeActions } from "@app/context/recipe/store";
import { useDispatch } from "react-redux";
import { RecipeForm } from "./RecipeForm";
import { RecipeCard } from "@app/views/common/components/RecipeCard";

type OwnProps = {
  recipe: Recipe;
};

type Props = OwnProps;

export const Recipe: React.FC<Props> = ({ recipe }) => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const handleDelete = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(recipeActions.delete({ id: recipe.id }));
  };

  const handleEditClick = () => {
    setOpen(true);
  };

  const handleModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(false);
  };

  return (
    <>
      <RecipeForm recipe={recipe} actionType="update" isOpen={isOpen} handleClose={handleModalClose} />
      <RecipeCard
        recipe={recipe}
        menuActions={[
          <MenuItem key="edit" onClick={handleEditClick}>
            Modifier
          </MenuItem>,
          <MenuItem key="delete" onClick={handleDelete}>
            Supprimer
          </MenuItem>
        ]}
      />
    </>
  );
};
