import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

export type MainLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function MainLayout({ children, title }: MainLayoutProps) {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => navigate(-1)}
            >
              <IoMdArrowBack />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title || "WATERTRACK"}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>{children}</Box>
    </>
  );
}
