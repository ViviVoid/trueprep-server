import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link, Outlet } from "react-router-dom";
import { navData } from "../../lib/data";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#1a237e", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: isMobile ? "center" : "space-between",
            alignItems: "center",
            padding: isMobile ? "10px" : "0 20px",
          }}
        >
          {/* Logo and Company Name */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: isMobile ? "10px" : "0",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white", textAlign: "center" }}
            >
              TruePrep.ai
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            {navData.links.map((link, index) => (
              <Button
                key={index}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  margin: isMobile ? "5px 0" : "0 15px",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
                component={Link}
                to={link.path}
              >
                {link.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/*<Toolbar /> /!* Commenting this out, Spacer for fixed AppBar *!/*/}
      <Outlet />
    </>
  );
};

export default Header;
