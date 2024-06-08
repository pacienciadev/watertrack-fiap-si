import { Box } from "@mui/material";

import MainLayout from "../../../components/Layouts/MainLayout";

import feat_marcadores from "../../../assets/images/marcadores_screen/marcadores_screen.svg";

export function Marcadores() {
  const screens_features = [{ alt: "marcadores", image: feat_marcadores }];

  return (
    <MainLayout title="Marcadores">
      <Box display="flex" flexDirection="column" px="22px" py={4} gap={3}>
        {screens_features.map((screen, index) => (
          <img src={screen.image} alt={screen.alt} key={index} />
        ))}
      </Box>
    </MainLayout>
  );
}
