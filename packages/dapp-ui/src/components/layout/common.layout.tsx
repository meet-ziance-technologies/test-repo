import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../common/header';
import { Footer } from '../common/footer';

export const CommonLayout = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} flexDirection={'column'} height={'100vh'} gap={2}>
      <Box>
        <Header />
      </Box>
      <main>
        <Box p={2} m={2}>
          <Outlet />
        </Box>
      </main>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
