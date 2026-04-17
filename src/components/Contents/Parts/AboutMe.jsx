import Avatar from '@mui/material/Avatar'
import { Paper, Typography, Box, Link, Stack } from '@mui/material'
import LabelIcon from '@mui/icons-material/Label'
import MapIcon from '@mui/icons-material/Map'
import { SiReact, SiNodedotjs } from 'react-icons/si'
import { IoMdMail } from 'react-icons/io'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'


function AboutMe() {
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#008b8b', // Màu xanh đặc trưng của trang mẫu
    textDecoration: 'none',
    fontSize: '1rem',
    marginBottom: '8px',
    '&:hover': { color: '#fd7e14' }
  }

  const socialIconStyle = {
    width: 36,
    height: 36,
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: '0.3s'
  }

  return (
    <Box component="section" id="about" sx={{ height: '100vh', position: 'relative', bgcolor: '#fff' }}>
      <Box sx= {{
        position: 'absolute',
        top: 160,
        left: 50
      }}>
        <Typography variant="h1" sx={{
          fontSize: '3.5rem',
          fontWeight: 700,
          color: '#343a40'
        }} >
            Duong Hoang
          <Typography variant='h1' component="span" sx={{
            ml: '15px',
            color: '#079992',
            fontSize: '3.5rem',
            fontWeight: 700,
            '&:hover': { color: '#fd7e14' }
          }}>
            Duc
          </Typography>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LabelIcon sx={{ mr: 1, fontWeight: 500, color: '#34495e' }} />
          <Typography sx={{ fontWeight: 500, fontSize: '1.25rem', color: '#34495e' }}>Fresher NodeJS And React</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MapIcon sx={{ mr: 1, fontWeight: 500, color: '#34495e' }} />
          <Typography sx={{ fontWeight: 500, fontSize: '1.25rem', color: '#34495e' }}>21/20 Dung Si Thanh Khe, Da Nang</Typography>
        </Box>
        <Box>
          <Paper
            elevation={0}
            sx={{
              color: '#0c5460',
              padding: '20px',
              maxWidth: '1100px',
              backgroundColor: '#d1ecf1',
              borderRadius: '8px',
              border: '1px solid #bee5eb',
              mt: '20px'
            }}
          >
            <Typography variant="body1">
                    Hi there, welcome to look at my profile!  <br/>
                    In 6+ years of JavaScript experience. m passionate about creating seamless user experiences and believe <br/>
                    that simplifying code leads to more agile applications. <br/>
                    I am good at teamwork, friendly, and easy to approach.
            </Typography>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', mt: '20px', maxWidth: '1100px' }}>
          <SiReact style={{ color: '#47CEF6', fontSize: '20px', marginTop: '3px' }} />
          <Typography sx={{ fontWeight: 400, fontSize: '1rem', color: '#000000de', lineHeight: 1.6 }}>
            <b style={{ fontWeight: 700 }}>Front-end:</b> I have experience working with{' '}
            <b style={{ fontWeight: 600 }}>ReactJS (NextJS, Hook, Redux Toolkit) & VueJS (NuxtJS, Vuex), Material UI, TailwindCSS, Shadcn/ui, Bootstrap, Axios</b>
                  , and other technologies.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', maxWidth: '1100px'}}>
          <SiNodedotjs style={{ color: '#339933', fontSize: '20px', marginTop: '3px' }} />
          <Typography sx={{ fontWeight: 400, fontSize: '1.1rem', color: '#000000de', lineHeight: 1.6 }}>
            <b style={{ fontWeight: 700 }}>Back-end:</b> I have experience working with{' '}
            <b style={{ fontWeight: 600 }}>Node.JS, TypeScript, ExpressJS, NestJS, MongoDB, MySQL, DynamoDB</b>
                  , and other technologies.
          </Typography>
        </Box>
        <Box sx={{ mt: '20px' }}>
          <Link href="mailto:duonghoangduc1325@gmail.com" sx={linkStyle}>
            <IoMdMail color="#ff4d4d" size={22} /> duonghoangduc1325@gmail.com
          </Link>
        </Box >
        <Box sx={{ mt: '15px' }}>
          <Stack direction="row" spacing={1.5} sx={{ mb: 4 }}>
            <Link sx={{ '&:hover .MuiAvatar-root': { bgcolor: '#fd7e14' } }} href="https://github.com/" target="_blank" rel="noopener">
              <Avatar sx={{ ...socialIconStyle, bgcolor: '#000' }}>
                <FaGithub />
              </Avatar>
            </Link>
            <Link sx={{ '&:hover .MuiAvatar-root': { bgcolor: '#fd7e14' } }} href="https://www.linkedin.com/in/duc-duong-hoang-694260241/" target="_blank" rel="noopener">
              <Avatar sx={{ ...socialIconStyle, bgcolor: '#0077b5' }}>
                <FaLinkedinIn />
              </Avatar>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutMe
