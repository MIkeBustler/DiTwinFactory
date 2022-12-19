import { useTheme } from "@emotion/react";
import { MailLockOutlined, MailLockRounded } from "@mui/icons-material";
import { Box, Divider, IconButton, List, ListItem, Paper, Toolbar, Typography } from "@mui/material";
import { Drawer, useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { tokens } from "../../theme";
import { navStateChange } from "../redux/actions";


export const Sidebar = () =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const navState = useSelector(state => state.navState);
  const dispath = useDispatch();
  
  const toggleDrawerOpen = () => {
    if(isSmUp) return;
    const nns = {
      ...navState, drawerOpen : !navState.drawerOpen,
    };
      dispath(navStateChange(nns));
    }
    
  return (
    <Drawer
      variant={isSmUp ? "permanent" : "temporary"}
      anchor="left"
      open={navState.drawerOpen}
      onClose={toggleDrawerOpen}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: navState.drawerWidth,
          height:`calc(100% - 50px)`,
        },
      }}
    >
      <Toolbar >
      <Typography variant="h3" color={colors.greenAccent[400]} >
          DiTwinFactory
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem>
          <IconButton onClick={toggleDrawerOpen}>
            <MailLockOutlined />
          </IconButton>
        </ListItem>
      </List>
{/* drawer footer */}
      <Box
      sx={{
        display: "flex",
        position: "fixed",
        bottom: "0px",
        height: "50px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.blueAccent[600],
        width: navState.drawerWidth
      }}
    >
      <Box className="drawerFooter">
        <Typography variant="h5">SLK.Automation&Drives</Typography>
      </Box>
    </Box>
    </Drawer>
  );
}