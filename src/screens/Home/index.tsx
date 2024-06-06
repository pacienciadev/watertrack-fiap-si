import { Box, Grid } from '@mui/material'
import HorizontalCard from '../../components/Cards/Horizontal'
import { MainLayout } from '../../components/Layouts/MainLayout'
import clima_vector from '../../assets/images/clima-vector.png';
import marc_vector from '../../assets/images/marc-vetor.png';
import precip_vector from '../../assets/images/precip-vetor.png';
import temp_vector from '../../assets/images/previ-vetor.png';

export function Home() {

  const cards = [
    { title: 'Clima', image: clima_vector },
    { title: 'Maré', image: marc_vector },
    { title: 'Precipitação', image: precip_vector },
    { title: 'Temperatura', image: temp_vector },
  ]

  return (
    <MainLayout>
      <Box display="flex" flexDirection="column">
        <h3>Praia & Zona Costeira</h3>
        <p>Online</p>
      </Box>
      <Box style={{ display: 'flex', width: '100%', alignItems: 'center', margin: '20px' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, m: 3 }}>
          {
            cards.map((card, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <HorizontalCard title={card.title} image={card.image} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </MainLayout>
  )
}
