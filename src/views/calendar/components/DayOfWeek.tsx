import React from "react";
import { Typography, Grid, IconButton } from "@material-ui/core";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Recipe } from "@app/views/recipes/components/Recipe";
import { useStyles } from "./DayOfWeek.style";
import { AddCircleOutline } from "@material-ui/icons";

type OwnProps = {
  currentDay: string;
};

type Props = OwnProps;

export const DayOfWeek: React.FC<Props> = ({ currentDay }) => {
  const classes = useStyles();
  const getDate = () => new Date(currentDay);

  return (
    <div className={classes.spacer}>
      <Grid container>
        <Grid item xs={12}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6">
              {format(getDate(), "'Le' EEEE d MMMM", { locale: fr })}
              <IconButton color="primary" aria-label="upload picture" component="span">
                <AddCircleOutline />
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Recipe />
      </Grid>
    </div>
  );
};
