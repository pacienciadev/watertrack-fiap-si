import { Box, Button, Typography } from "@mui/material";

import waterTracklogo from "../../assets/images/WaterTracklogo.svg";
import welcomeBkg from "../../assets/images/welcome-bkg.png";

import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: `center`,
          backgroundImage: `url(${welcomeBkg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#00000090",
          backgroundBlendMode: "multiply",
          minHeight: "100vh",
        }}
      >
        <Box px="26px">
          <Typography
            variant="h1"
            fontSize={22}
            fontWeight={400}
            color="white"
            ml={1}
          >
            BEM-VINDO AO
          </Typography>

          <Box>
            <img src={waterTracklogo} alt="Logo" style={{ width: "100%" }} />
          </Box>
        </Box>

        <Box px="32px" mt="76px">
          <Typography
            variant="subtitle1"
            color="white"
            fontSize={18}
            sx={{ maxWidth: "204px", lineHeight: "24px" }}
          >
            Cultivando um oceano sustentável para todos.
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" px="32px" pt={4}>
          <Typography
            variant="overline"
            color="white"
            sx={{
              display: "flex",
              lineHeight: "24px",
              gap: "12px",

              "::before": {
                content: '""',
                display: "block",
                width: "44px",
                height: "1px",
                backgroundColor: "white",
                marginTop: "10px",
              },

              "::after": {
                content: '""',
                display: "block",
                width: "44px",
                height: "1px",
                backgroundColor: "white",
                marginTop: "10px",
              },
            }}
          >
            comece aqui
          </Typography>
        </Box>

        <Box mt={4} px="32px">
          <NavLink to="/login">
            <Button fullWidth variant="outlined">
              <span style={{ color: "white" }}>Entre com seu Email</span>
            </Button>
          </NavLink>
        </Box>

        <Box mt={3} px="32px">
          <NavLink to="/register">
            <Button fullWidth variant="outlined">
              <span style={{ color: "white" }}>Cadastre seu Email.</span>
            </Button>
          </NavLink>
        </Box>
      </Box>
    </>
  );
}
