import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export type HorizontalCardProps = {
  title: string
  image: string
}

export default function HorizontalCard({
  title,
  image,
}: HorizontalCardProps) {
  const theme = useTheme()

  return (

    <Card sx={{ display: 'flex', width: '160px', height: '207px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', alignContent: 'center', alignItems: 'center', textAlign: 'center' }}>

          <img src={image} alt="Imagem" style={{ width: '80px', height: '80px', margin: '20px 0 20px 0' }} />
          <Typography variant="h6" color={'#4C7B00'}>
            {title}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
