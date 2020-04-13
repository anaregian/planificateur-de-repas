import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@app/context/store";
import { Dialog } from "@app/views/common/components/Dialog";
import { TextField, MenuItem } from "@material-ui/core";

type OwnProps = {
  isOpen: boolean;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleConfirm: (recipeId: string) => (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type Props = OwnProps;

export const RecipeDropdown: React.FC<Props> = ({ isOpen, handleClose, handleConfirm }) => {
  const { recipes } = useSelector((state: RootState) => ({
    recipes: state.recipeContext.recipes
  }));
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>("");

  useEffect(() => {
    if (recipes.length > 0) {
      setSelectedRecipeId(recipes[0].id);
    }
  }, [recipes]);

  const onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleConfirm(selectedRecipeId)(e);
  };

  const handleSetSelectedRecipeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRecipeId(e.target.value);
  };

  return (
    <Dialog title="Les recettes" isOpen={isOpen} onClose={handleClose} onConfirm={onConfirm}>
      <TextField
        fullWidth
        select
        onChange={handleSetSelectedRecipeId}
        value={selectedRecipeId}
        label="Choisissez une recette"
        variant="outlined"
      >
        {recipes.map(recipe => (
          <MenuItem key={recipe.id} value={recipe.id}>
            {recipe.title}
          </MenuItem>
        ))}
      </TextField>
    </Dialog>
  );
};
