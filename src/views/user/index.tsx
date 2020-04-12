import React from "react";
import { Paper, makeStyles, Theme, createStyles, Typography, FormControl, TextField, Button } from "@material-ui/core";
import { useForm } from "@app/hooks/useForm";
import { userActions } from "@app/context/user/store";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100vh",
      position: "relative"
    },
    title: {
      marginBottom: "1em"
    },
    content: {
      position: "absolute",
      width: "30%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "1.5em",
      "& .MuiTextField-root": {
        marginBottom: theme.spacing(1)
      }
    }
  })
);

export const LoginPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { handleChange, values } = useForm({
    username: "",
    password: ""
  });

  const handleClick = () => {
    dispatch(userActions.login({ username: values.username }));
    history.push("/");
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.content}>
        <Typography variant="h5" className={classes.title}>
          Connexion
        </Typography>
        <FormControl fullWidth>
          <TextField
            autoFocus
            name="username"
            onChange={handleChange}
            value={values.username}
            variant="outlined"
            label="Nom d'utilisateur"
            type="text"
            fullWidth
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={values.password}
            variant="outlined"
            label="Mot de passe"
            type="password"
            fullWidth
          />
          <Button variant="contained" color="primary" size="large" onClick={handleClick}>
            Connexion
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
};
