import React from "react";
import { useStyles } from "./Container.style";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  Drawer,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { Today, Assignment, ShoppingCart, FormatListNumbered } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

export const Container: React.FC = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();

  const menuItems: MenuItem[] = [
    {
      name: "Mon calendrier",
      link: "/calendrier",
      icon: <Today />,
      isSelected: pathname == "/calendrier"
    },
    {
      name: "Mon inventaire",
      link: "/inventaire",
      icon: <Assignment />,
      isSelected: pathname == "/inventaire"
    },
    {
      name: "Mes recettes",
      link: "/recettes",
      icon: <FormatListNumbered />,
      isSelected: pathname == "/recettes"
    },
    {
      name: "Ma liste d'épicerie",
      link: "/epicerie",
      icon: <ShoppingCart />,
      isSelected: pathname == "/epicerie"
    }
  ];

  const navigateTo = (link: string) => (e: React.SyntheticEvent) => {
    history.push(link);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Planificateur de repas
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {menuItems.map(({ link, name, icon: Icon, isSelected }) => (
            <ListItem button onClick={navigateTo(link)} key={name} selected={isSelected}>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
