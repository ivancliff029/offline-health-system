"use client";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Box, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle"; // User icon
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/" passHref>
          HealthSMS
        </Link>
      </Typography>
      <List>
        {navItems.map(({ label, path }) => (
          <ListItem button key={label}>
            <Link href={path} passHref>
              <ListItemText primary={label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMounted && (
        <>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { sm: "none" } }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                HealthSMS
              </Typography>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map(({ label, path }) => (
                  <Link href={path} key={label} passHref>
                    <Button color="inherit">{label}</Button>
                  </Link>
                ))}
              </Box>

              {/* User Icon with Dropdown Menu */}
              <div>
                <IconButton color="inherit" onClick={handleMenuClick}>
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  PaperProps={{
                    elevation: 1,
                    sx: {
                      mt: 1,
                      "& .MuiMenuItem-root": {
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.08)",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem onClick={handleCloseMenu}>
                    <Link href="/login" passHref>
                      Sign In
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMenu}>
                    <Link href="/signup" passHref>
                      Sign Up
                    </Link>
                  </MenuItem>
                  {/* You can add more items here, e.g., Sign Up, Profile, etc. */}
                </Menu>
              </div>
            </Toolbar>
          </AppBar>

          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </>
      )}
    </>
  );
};

export default Navbar;
