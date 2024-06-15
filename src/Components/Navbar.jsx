import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import MoreIcon from "@mui/icons-material/MoreVert";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { RiLoginCircleLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../feature/Auth/authSlice";
import { Button } from "@mui/material";

const Navbar = () => {
  // Navigate Code

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(logOutUser());
    window.location.reload();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        {user ? (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={LogOut}
            >
              <BiLogOutCircle />
            </IconButton>
            <Button color="warning">LogOut</Button>
          </>
        ) : (
          <>
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Link to="/register">
                  <HowToRegIcon />
                </Link>
                {/* </Badge> */}
              </IconButton>
              <Link to="/register">
                <p>Register</p>
              </Link>
            </MenuItem>
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Link to="/login">
                  {" "}
                  <RiLoginCircleLine />
                </Link>
              </IconButton>
              <Link to="/login">
                <p>Login</p>
              </Link>
            </MenuItem>
          </>
        )}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="warning">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "", sm: "block", marginRight: "2rem" } }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="text-light"
            >
              <Typography variant="h5">Document Management</Typography>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {user ? (
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={LogOut}
              >
                <BiLogOutCircle />
              </IconButton>
            ) : (
              <>
                {/* Register User */}
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Link to="/register" className="text-light">
                    <HowToRegIcon fontSize="large" />
                  </Link>
                </IconButton>

                {/* Login User */}
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Link to="/login" className="text-light">
                    <RiLoginCircleLine />
                  </Link>
                </IconButton>
              </>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
