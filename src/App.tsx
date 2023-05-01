import { Suspense, lazy } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavbarProduct from "./layout/NavbarProduct/NavbarProduct";
import MainHeader from "./layout/MainHeader/MainHeader";
//

let theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#FFFFFF",
  //     contrastText: "#1C1F23",
  //   },
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 12px",
          fontSize: 12,
          lineHeight: 1,
          fontWeight: 600,
          textTransform: "none",
          letterSpacing: 0,
          // "&:hover": {
          //   backgroundColor: "rgba(0, 0, 0, 0.08)",
          // },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Suspense>
            <MainHeader />
            <NavbarProduct />
            <Outlet />
          </Suspense>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
