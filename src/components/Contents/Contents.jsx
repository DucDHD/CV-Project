import { Box } from '@mui/material'
import { Divider } from '@mui/material'
import AboutMe from './Parts/AboutMe'
import Experience from './Parts/Experience'
import Project from './Parts/Project'
import Skill from './Parts/Skill'
import Education from './Parts/Education'
import Interest from './Parts/Interest'
import TheEnd from './Parts/TheEnd'
function Contents() {

  const DivideStyle = {
    my: 3,
    borderColor: '#EBEBEB'
  }

  return (
    <Box sx={{
      bgcolor: 'secondary.light',
      minHeight: '100vh',
      ml: '272px',
      width: 'calc(100% - 272px)'
    }} >
      <AboutMe />
      <Divider sx={DivideStyle} />
      <Experience />
      <Divider sx={DivideStyle} />
      <Project />
      <Divider sx={DivideStyle} />
      <Skill />
      <Divider sx={DivideStyle} />
      <Education />
      <Divider sx={DivideStyle} />
      <Interest />
      <Divider sx={DivideStyle} />
      <TheEnd />
    </Box>
  )
}

export default Contents
