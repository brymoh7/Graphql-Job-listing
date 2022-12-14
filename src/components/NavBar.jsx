import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar({ title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              {title}
            </Typography>
            <Button color="inherit" component={Link} to="/job">
              Post your Job
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
