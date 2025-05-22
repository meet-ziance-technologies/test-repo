import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/route';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
