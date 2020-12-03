import React from "react";
import "./App.css";
import MenuLayout from "./componets/layouts/MenuLayout";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MenuLayout />
    </ThemeProvider>
  );
}

export default App;
