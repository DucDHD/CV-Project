import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import avatar from '~/assets/ACE.jpg'
import { Typography, Box, Link } from '@mui/material'


function Navbar() {

  const [active, setActive] = useState('about')
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )
    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  const LIST_MENU = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'interests', label: 'Interests' },
    { id: 'end', label: 'The End' }
  ]

  return (
    <Box sx={{
      bgcolor: '#38ada9',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '272px',
      height: '100vh',
      pt: 26,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }}>
      <Box>
        <Avatar
          sx={{
            width: 176,
            height: 176,
            border: '0.5rem solid rgba(255, 255, 255, 0.4)',
            '&:hover': {
              opacity: 0.6
            }
          }}
          alt="DucDH"
          src={avatar}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '8px',
        gap: 2,
        alignItems:'center',
        '& .Link' : { textDecoration: 'none', color: '#fff', cursor: 'pointer' }
      }}>
        {
          LIST_MENU.map((menu) => (
            <Typography key={menu.id}>
              <Link
                underline="none"
                onClick={() =>
                  document.getElementById(menu.id)
                    .scrollIntoView({ behavior: 'smooth' })
                }
                sx={{
                  cursor: 'pointer',
                  opacity: active === menu.id ? 1 : 0.6,
                  fontSize: '1rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: active === menu.id ? '#fff' : '#ffffffb3',
                  '&:hover': { color: '#fffffffc', opacity: 0.7 }
                }}
              >
                {menu.label}
              </Link>
            </Typography>
          ))
        }
      </Box>
    </Box>
  )
}

export default Navbar
