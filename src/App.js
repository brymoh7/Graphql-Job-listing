import Container from "@material-ui/core/Container";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";

import Router from "./router";
import NavBar from "./components/NavBar";
import Theme from "./config/style";

function App() {
  const applyTheme = createMuiTheme(Theme);

  return (
    <MuiThemeProvider theme={applyTheme}>
      <NavBar title="Graphql Jobs" />
      <Container maxWidth="md">
        <Router />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
