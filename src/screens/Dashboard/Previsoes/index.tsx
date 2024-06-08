import { Box } from "@mui/material";

import MainLayout from "../../../components/Layouts/MainLayout";

import feat_previsoes from "../../../assets/images/previsoes_screen/feat_previsoes.svg";

export function Previsoes() {
  const screens_features = [{ alt: "previsões", image: feat_previsoes }];

  return (
    <MainLayout title="Previsões">
      <Box display="flex" flexDirection="column" px="22px" py={4} gap={3}>
        {screens_features.map((screen, index) => (
          <img src={screen.image} alt={screen.alt} key={index} />
        ))}
      </Box>
    </MainLayout>
  );
}
