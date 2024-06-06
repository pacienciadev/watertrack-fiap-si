import { Box } from '@mui/material'
import HorizontalCard from '../../components/Cards/Horizontal'
import { MainLayout } from '../../components/Layouts/MainLayout'

export function Home() {
  return (
    <MainLayout>
      <Box display="flex" flexDirection="column" px={2} gap={2}>
        <h3>Cards</h3>
        <HorizontalCard
          title="Título do card"
          category="categoria"
          description="descrição"
          image="https://picsum.photos/100"
          distance="1.2"
          score="4.2"
        ></HorizontalCard>
      </Box>
    </MainLayout>
  )
}
