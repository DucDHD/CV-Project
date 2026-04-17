import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import Navbar from '~/components/Navbar/Navbar'
import Contents from '~/components/Contents/Contents'

function Pages() {

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', bgcolor: 'primary.main' }}>
      <Box sx= {{
        width: '100%',
        height: '100%',
        display: 'flex'
      }} >
        <Navbar />
        <Contents />
      </Box>
    </Container>
  )
}

export default Pages
