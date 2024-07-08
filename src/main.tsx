import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WeatherSearch from './components/WeatherSearch.tsx';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
 <WeatherSearch />
  </React.StrictMode>
  </ThemeProvider>
)
