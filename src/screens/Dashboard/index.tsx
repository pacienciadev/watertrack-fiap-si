import { Box, Grid, Typography } from "@mui/material";
import HorizontalCard from "../../components/Cards/Horizontal";
import { MainLayout } from "../../components/Layouts/MainLayout";
import clima_vector from "../../assets/images/clima-vector.png";
import marc_vector from "../../assets/images/marc-vetor.png";
import precip_vector from "../../assets/images/precip-vetor.png";
import temp_vector from "../../assets/images/previ-vetor.png";

export function Dashboard() {
  const cards = [
    { title: "Clima", image: clima_vector },
    { title: "Maré", image: marc_vector },
    { title: "Precipitação", image: precip_vector },
    { title: "Temperatura", image: temp_vector },
  ];

  return (
    <MainLayout>
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
          <HorizontalCard key={index} title={card.title} image={card.image} />
        ))}
      </Box>
    </MainLayout>
  );
}
