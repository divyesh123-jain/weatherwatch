import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WeatherSearch from './components/Weather/WeatherSearch.tsx';
import { Lan } from '@mui/icons-material';
import LandingPage from './components/LandingPage.tsx';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
<LandingPage />
  </React.StrictMode>
  </ThemeProvider>
)
