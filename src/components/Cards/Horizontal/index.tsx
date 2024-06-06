import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Avatar, Button, Chip, IconButton } from '@mui/material'
import { IoIosHeartEmpty, IoMdPin } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'
import { FaRegSquarePlus } from 'react-icons/fa6'

export type HorizontalCardProps = {
  title: string
  category: string
  description: string
  image: string
  distance: string
  score: string
}

export default function HorizontalCard({
  title,
  category,
  description,
  image,
  distance,
  score,
}: HorizontalCardProps) {
  const theme = useTheme()

  return (
    <Box display="flex" gap={1}>
      <Avatar
        alt={title}
        src={image}
        variant="rounded"
        sx={{ width: 56, height: 56 }}
      />

      <Card sx={{ display: 'flex', flex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Box
              mb={1}
              display="flex"
              gap={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Chip label={category} size="small" />

              <IconButton
                aria-label="add to favorite"
                size="small"
                sx={{ pt: 1 }}
              >
                <IoIosHeartEmpty />
              </IconButton>
            </Box>

            <Typography component="div" variant="h6">
              {title}
            </Typography>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {description}
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              mt={1}
              alignItems="center"
            >
              <Box display="flex" gap={1}>
                <Chip
                  icon={
                    <Box mt={0.25} pl={0.25}>
                      <IoMdPin size={14} />
                    </Box>
                  }
                  label={distance + ' km'}
                  size="small"
                  variant="outlined"
                />

                <Chip
                  icon={
                    <Box mt={0.25} pl={0.25}>
                      <FaStar size={14} />
                    </Box>
                  }
                  label={score}
                  size="small"
                  variant="outlined"
                />
              </Box>

              <Box>
                <Button
                  variant="text"
                  size="small"
                  endIcon={<FaRegSquarePlus />}
                  sx={{ alignItems: 'start', lineHeight: 1.55 }}
                >
                  Detalhes
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  )
}
