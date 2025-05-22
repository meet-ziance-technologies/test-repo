import { Box, Button, Divider, Stack } from '@mui/material';
import { SITE_CONFIG } from '../../config/site.config';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Box m={2} p={2} bgcolor={'Highlight'} borderRadius={1}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Box>{SITE_CONFIG.appName}</Box>
        <Box>
          <Stack direction={'row'} gap={2} divider={<Divider flexItem orientation="vertical" />}>
            <Link to={''}>Home</Link>
            <Link to={'listing'}>Listing</Link>
            <Link to={'owned-property'}>Owned Property</Link>
          </Stack>
        </Box>
        <Box>
          <Button variant="contained" color="error">
            Connect To Wallet
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
