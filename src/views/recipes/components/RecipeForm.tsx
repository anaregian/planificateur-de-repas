import React from "react";
import { TextField, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Dialog } from "@app/views/common/components/Dialog";
import { useForm } from "@app/hooks/useForm";
import { recipeActions } from "@app/context/recipe/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@app/context/store";
import { ingredientActions } from "@app/context/ingredient/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flex: {
      display: "grid",
      gridTemplateColumns: "3fr 1fr",
      gridGap: "10px"
    }
  })
);

type RecipeFormModel = {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string;
  directions: string;
  tags: string;
  timeToCook: number;
};

type OwnProps = {
  isOpen: boolean;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  recipe?: Recipe;
  actionType: "create" | "update";
};

type Props = OwnProps;

export const RecipeForm: React.FC<Props> = ({
  isOpen,
  handleClose,
  actionType,
  recipe = {
    title: "",
    description: "",
    image: "",
    ingredients: [],
    directions: "",
    tags: [],
    timeToCook: 0
  }
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { ingredients } = useSelector((state: RootState) => ({
    ingredients: state.ingredientContext.ingredients
  }));

  const recipeFormModel: RecipeFormModel = {
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    image: recipe.image,
    ingredients: recipe.ingredients.map(i => i.name).join(", "),
    directions: recipe.directions,
    tags: recipe.tags.join(", "),
    timeToCook: recipe.timeToCook
  };

  const { handleChange, values } = useForm(recipeFormModel);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const recipe: Recipe = {
      id: values.id,
      title: values.title,
      description: values.description,
      image: values.image,
      ingredients: values.ingredients.split(/[ , ]+/).map(name => {
        const exists = ingredients.find(i => i.name === name);

        if (exists) {
          return exists;
        }

        dispatch(ingredientActions.create({ name }));
        return store.getState().ingredientContext.ingredients.find(i => i.name === name);
      }),
      directions: values.directions,
      tags: values.tags.split(","),
      timeToCook: values.timeToCook
    };

    if (actionType === "create") {
      dispatch(recipeActions.create(recipe));
    } else {
      dispatch(recipeActions.update({ id: recipe.id, recipe }));
    }
  };

  return (
    <Dialog onConfirm={handleSubmit} title="Nouvelle recette" isOpen={isOpen} onClose={handleClose}>
      <div className={classes.flex}>
        <TextField
          name="title"
          onChange={handleChange}
          value={values.title}
          autoFocus
          variant="outlined"
          label="Titre"
          type="text"
        />
        <TextField
          name="timeToCook"
          onChange={handleChange}
          value={values.timeToCook}
          variant="outlined"
          label="Durée (min)"
          type="number"
        />
      </div>
      <TextField
        name="description"
        onChange={handleChange}
        value={values.description}
        multiline
        rows={3}
        variant="outlined"
        label="Description"
        type="text"
        fullWidth
      />
      <TextField
        name="ingredients"
        onChange={handleChange}
        value={values.ingredients}
        variant="outlined"
        label="ingrédients (séparés avec des virgules)"
        type="text"
        fullWidth
      />
      <TextField
        name="directions"
        onChange={handleChange}
        value={values.directions}
        multiline
        rows={8}
        variant="outlined"
        label="Démarche"
        type="text"
        fullWidth
      />
      <TextField
        name="tags"
        onChange={handleChange}
        value={values.tags}
        variant="outlined"
        label="Tags (séparés avec des virgules)"
        type="text"
        fullWidth
      />
    </Dialog>
  );
};
