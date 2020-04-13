import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { Calendar } from "./views/calendar";
import { Inventory } from "./views/inventory";
import { Recipes } from "./views/recipes";
import { GroceryList } from "./views/grocery-list";
import { Container } from "./views/common";
import { LoginPage } from "./views/user";
import { RootState } from "./context/store";

export const App: React.FC = () => {
  const { currentUser } = useSelector((state: RootState) => ({
    currentUser: state.userContext.currentUser
  }));

  const routesWithAuth = (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/calendrier" />
        </Route>
        <Route path="/calendrier" exact>
          <Calendar />
        </Route>
        <Route path="/inventaire" exact>
          <Inventory />
        </Route>
        <Route path="/recettes" exact>
          <Recipes />
        </Route>
        <Route path="/epicerie" exact>
          <GroceryList />
        </Route>
      </Switch>
    </Container>
  );

  const routesWithoutAuth = (
    <Switch>
      <Route path="/connexion" exact>
        <LoginPage />
      </Route>
      <Route path="/*">
        <Redirect to="/connexion" />
      </Route>
    </Switch>
  );

  return (
    <BrowserRouter>
      <CssBaseline />
      {currentUser ? routesWithAuth : routesWithoutAuth}
    </BrowserRouter>
  );
};
