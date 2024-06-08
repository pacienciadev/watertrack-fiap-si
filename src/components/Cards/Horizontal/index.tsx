import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type HorizontalCardProps = {
  title: string;
  image: string;
};

export default function HorizontalCard({ title, image }: HorizontalCardProps) {
  const theme = useTheme();

  return (
    <Card sx={{ width: "156px", height: "207px" }}>
      <CardContent
        sx={{
          flex: "1 0 auto",
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={image}
          alt="Imagem"
          style={{ height: "80px", margin: "20px 0 20px 0" }}
        />
        <Typography variant="h6" color={"#4C7B00"}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
