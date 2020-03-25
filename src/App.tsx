import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { Calendar } from "./components/calendar";
import { Inventory } from "./components/inventory";
import { Recipes } from "./components/recipes";
import { GroceryList } from "./components/grocery-list";
import { Container } from "./components/common";

export const App: React.FC = () => (
  <BrowserRouter>
    <CssBaseline />
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
  </BrowserRouter>
);
