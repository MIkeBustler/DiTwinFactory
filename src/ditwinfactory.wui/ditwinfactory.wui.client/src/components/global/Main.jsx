import { HomeRounded } from "@mui/icons-material";
import { Paper, Box, Toolbar, Typography, useMediaQuery, useTheme, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { tokens } from "../../theme";
import { Login } from "../userAccount/Login";
import { Home } from "./Home";

export const Main = ()=>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navState = useSelector(state => state.navState);
  
  return (
    <Box className="main"
      sx={{
        display : "flex",
        flexDirection: "column",
        ml: { sm: `${navState.drawerWidth + 5}px`, xs: "5px" },
        mt: "5px",
        mr: "5px",
        width: { sm: `calc(100% - ${navState.drawerWidth}px - 10px)`, xs: "100%" },
        alignItems: "center",
      }}
    >
      <Toolbar />
      <Box className="body" sx={{flex: 1, maxWidth: "1000px"}}>
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/login" element = {<Login />} />
        </Routes>
      </Box>
    </Box>
  );
}