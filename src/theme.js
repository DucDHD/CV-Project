/* eslint-disable quotes */
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  typography: {
    fontFamily:  "'Poppins', sans-serif"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "'Poppins', sans-serif"
        }
      }
    }
  }
})

export default theme