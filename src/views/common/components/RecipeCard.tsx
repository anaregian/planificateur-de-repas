import React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  Collapse,
  CardActions,
  Menu,
  Chip,
  Theme,
  makeStyles,
  createStyles,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { MoreVert, ExpandMore, Alarm } from "@material-ui/icons";
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: "56.25%"
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    tag: {
      margin: theme.spacing(0.5)
    }
  })
);

type OwnProps = {
  recipe: Recipe;
  menuActions: React.ReactNode | React.ReactNode[];
};

type Props = OwnProps;

export const RecipeCard: React.FC<Props> = ({ recipe, menuActions }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" aria-controls="settings" aria-haspopup="true" onClick={handleClick}>
              <MoreVert />
            </IconButton>
          }
          title={recipe.title}
        />
        <CardMedia className={classes.media} image={recipe.image} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.description}
          </Typography>
          {recipe.tags.map(tag => (
            <Chip key={tag} label={tag} className={classes.tag} />
          ))}
        </CardContent>
        <CardActions disableSpacing>
          <Alarm />
          <Typography>{recipe.timeToCook} min.</Typography>
          <IconButton
            className={classNames(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6">Ingrédients:</Typography>
            <List dense>
              {recipe.ingredients.map(ingredient => (
                <ListItem key={ingredient.id}>
                  <ListItemText>{ingredient.name}</ListItemText>
                </ListItem>
              ))}
            </List>
            <Typography variant="h6">Préparation:</Typography>
            <Typography paragraph>{recipe.directions}</Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Menu id="settings" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {menuActions}
      </Menu>
    </>
  );
};
