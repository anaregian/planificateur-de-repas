import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      "& .MuiTextField-root": {
        marginBottom: theme.spacing(1)
      }
    },
    flex: {
      display: "grid",
      gridTemplateColumns: "3fr 1fr",
      gridGap: "10px"
    }
  })
);
