import { useTheme } from "@emotion/react";
import { Calculate } from "@mui/icons-material";
import { Box, Paper, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { ColorModeContext, tokens } from "../../theme";


export const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navState = useSelector(state => state.navState);

  return (
    <Box
      sx={{
        display: "flex",
        ml: { sm: `${navState.drawerWidth}px` },
        position: "fixed",
        bottom: "0px",
        height: "50px",
        width: { sm: `calc(100% - ${navState.drawerWidth}px)`, xs: "100%" },
        justifyContent: "space-between",
        backgroundColor: colors.blueAccent[600],
        p: 2,
      }}
    >
      <Box>
        <Typography>It's a footer</Typography>
      </Box>
      <Box>
        <Typography>It's a footer</Typography>
      </Box>
    </Box>
  );
}