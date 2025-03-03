import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontFamily: 'Comic Neue, sans-serif',
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: '3px',
          paddingBottom: '3px',
          fontFamily: 'Comic Neue, sans-serif',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Comic Neue, sans-serif',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          paddingTop: 10, // Removes top padding
          paddingBottom: 10, // Removes bottom padding
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#181c23', // Set custom background color for AppBar
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Comic Neue, sans-serif',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            fontFamily: 'Comic Neue, sans-serif',
          },
        },
      },
    },
  },
  typography: {
    button: {
      fontFamily: 'Comic Neue, sans-serif',
      fontWeight: 500
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
