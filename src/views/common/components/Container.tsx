import React from "react";
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
  ListItemText,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import { Today, Assignment, ShoppingCart, FormatListNumbered } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "@app/context/user/store";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    title: {
      flexGrow: 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

export const Container: React.FC = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

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

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(userActions.logout());
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Planificateur de repas
          </Typography>
          <Button onClick={handleLogout} color="inherit">
            Déconnexion
          </Button>
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
