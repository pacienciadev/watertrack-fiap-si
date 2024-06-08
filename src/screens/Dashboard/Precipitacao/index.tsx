import { Box } from "@mui/material";

import MainLayout from "../../../components/Layouts/MainLayout";

import feat_precipitacao from "../../../assets/images/precipitacao_screen/feat_precipitacao.svg";

export function Precipitacao() {
  const screens_features = [{ alt: "precipitação", image: feat_precipitacao }];

  return (
    <MainLayout title="Precipitação">
      <Box display="flex" flexDirection="column" px="22px" py={4} gap={3}>
        {screens_features.map((screen, index) => (
          <img src={screen.image} alt={screen.alt} key={index} />
        ))}
      </Box>
    </MainLayout>
  );
}
