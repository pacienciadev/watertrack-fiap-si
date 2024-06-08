import { Box, Typography } from "@mui/material";

import HorizontalCard from "../../components/Cards/Horizontal";

import clima_vector from "../../assets/images/clima-vector.png";
import marc_vector from "../../assets/images/marc-vetor.png";
import precip_vector from "../../assets/images/precip-vetor.png";
import temp_vector from "../../assets/images/previ-vetor.png";
import waterTracklogo from "../../assets/images/WaterTracklogo.svg";

import { NavLink } from "react-router-dom";

export function Dashboard() {
  const cards = [
    { title: "Clima", image: clima_vector, link: "/dashboard/clima" },
    {
      title: "Precipitação",
      image: precip_vector,
      link: "/dashboard/precipitacao",
    },
    { title: "Marcadores", image: marc_vector, link: "/dashboard/marcadores" },
    { title: "Previsões", image: temp_vector, link: "/dashboard/previsoes" },
  ];

  return (
    <>
      <Box mt="44px" textAlign="center">
        <img src={waterTracklogo} alt="Logo" style={{ width: "176px" }} />
      </Box>

      <Box display="flex" flexDirection="column" px={2} gap={2}>
        <Typography variant="h5" mt={4}>
          Praia & Zona Costeira
        </Typography>

        <Typography variant="subtitle1" mt={-2} mb={4}>
          Online
        </Typography>
      </Box>

      <Box display="flex" flexDirection="row" flexWrap={"wrap"} px={2} gap={2}>
        {cards.map((card, index) => (
          <NavLink to={card.link} style={{ textDecoration: "none" }}>
            <HorizontalCard key={index} title={card.title} image={card.image} />
          </NavLink>
        ))}
      </Box>
    </>
  );
}
