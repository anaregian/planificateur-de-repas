import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacer: {
      marginBottom: theme.spacing(4)
    }
  })
);
