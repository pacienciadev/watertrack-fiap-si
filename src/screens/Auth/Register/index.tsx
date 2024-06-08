import { Box, Button, TextField, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

import waterTrackVerticallogo from "../../../assets/images/WaterTrackVerticalLogo.svg";

export function Register() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        px={2}
        gap={2}
      >
        <Box mt="44px">
          <img
            src={waterTrackVerticallogo}
            alt="Logo"
            style={{ width: "120px" }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          flexWrap={"wrap"}
          px={2}
          gap={4}
          mt={2}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="NOME"
            variant="outlined"
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="USUÁRIO"
            variant="outlined"
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="SENHA"
            variant="outlined"
            type="password"
          />
        </Box>

        <Box mt={4} px="64px" width="100%">
          <NavLink to="/dashboard">
            <Button fullWidth variant="contained">
              <span style={{ color: "white" }}>CADASTRAR</span>
            </Button>
          </NavLink>
        </Box>

        <Box mt={4}>
          <Typography variant="subtitle2">
            Já possuí um cadastro? Faça seu {" "}
            <NavLink to={"/login"}>login aqui</NavLink>.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
