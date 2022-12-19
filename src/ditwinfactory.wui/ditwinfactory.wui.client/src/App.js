import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Topbar } from "./components/global/Topbar";
import { Sidebar } from "./components/global/Sidebar";
import { Login } from "./components/userAccount/Login";
import { Main } from "./components/global/Main";
import { Footer } from "./components/global/Footer";



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <Sidebar />
        <Main />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
