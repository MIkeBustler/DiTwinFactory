import React, { useState } from "react";
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, 
  ListItemText, Menu, MenuItem, styled, Tooltip, Typography, useMediaQuery, useTheme} from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, PeopleOutline, MenuOutlined, ChevronLeft, ChevronRight, Inbox, Mail, LoginOutlined } from "@mui/icons-material";
import { ColorModeContext, tokens } from "../../theme";
import { LightModeOutlined, DarkModeOutlined,SettingsOutlined,PersonOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navStateChange, userLogout } from "../redux/actions";


export const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const navState = useSelector((state) => state.navState);
  const user = useSelector((state) => state.user);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const [anchorE1, setAnchorE1] = useState(null);
  const handleMenuClose = () => {
    setAnchorE1(null);
  };
  const handleUserMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const toggleDrawerOpen = () => {
    if (isSmUp) return;
    const nns = { ...navState, drawerOpen: !navState.drawerOpen };
    dispath(navStateChange(nns));
  };

  const navv = () => {
    navigate("/login");
  };

  const logout = () => {
    dispath(userLogout());
    navigate("/");
    setAnchorE1(null);
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      enableColorOnDark
      sx={{
        width: { sm: `calc(100% - ${navState.drawerWidth}px)` },
        ml: { sm: `${navState.drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex">
          <IconButton
            onClick={toggleDrawerOpen}
            sx={{ display: { sm: "none" } }}
          >
            <MenuOutlined />
          </IconButton>
          <Typography
            variant="h2"
            color={colors.greenAccent[400]}
            sx={{ display: { sm: "none" } }}
          >
            DiTwinFactory
          </Typography>
        </Box>
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>

          {!!!user.id ? (
            <IconButton onClick={navv}>
              <LoginOutlined />
            </IconButton>
          ) : (
            <div>
              <Tooltip title={user.id}>
                <IconButton onClick={handleUserMenu} aria-haspopup="true">
                  <PersonOutlined />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorE1}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorE1)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Профиль</MenuItem>
                <Divider />
                <MenuItem onClick={logout}>Выйти</MenuItem>
              </Menu>
            </div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};