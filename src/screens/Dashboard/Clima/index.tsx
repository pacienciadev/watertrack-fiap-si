import { Box, Button } from "@mui/material";

import MainLayout from "../../../components/Layouts/MainLayout";

import feat_temperatura from "../../../assets/images/clima_screen/feat_temperatura.svg";
import feat_precipitacao from "../../../assets/images/clima_screen/feat_precipitacao.svg";
import feat_humidade from "../../../assets/images/clima_screen/feat_humidade.svg";
import feat_vento from "../../../assets/images/clima_screen/feat_vento.svg";

export function Clima() {
  const screens_features = [
    { alt: "temperatura", image: feat_temperatura },
    { alt: "precipitação", image: feat_precipitacao },
    { alt: "humidade", image: feat_humidade },
    { alt: "vento", image: feat_vento },
  ];

  return (
    <MainLayout title="Clima">
      <Box display="flex" flexDirection="column" px="36px" py={4} gap={3}>
        {screens_features.map((screen, index) => (
          <img src={screen.image} alt={screen.alt} key={index} />
        ))}
      </Box>

      <Box px="64px" width="100%">
        <Button fullWidth variant="contained" onClick={() => alert('Em desenvolvimento')}>
          <span style={{ color: "white" }}>ALTERAR TEMPERATURA</span>
        </Button>
      </Box>
    </MainLayout>
  );
}
