import { Box, Card, Grid, IconButton, Stack, Typography } from '@mui/material';
import { SITE_CONFIG } from '../../config/site.config';
import { Link } from 'react-router-dom';
import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Card sx={{ p: 6, m: 2, bgcolor: 'Highlight' }}>
      <Grid container spacing={{ md: 2, lg: 4 }}>
        <Grid size={{ sm: 12, md: 6, lg: 4 }}>
          <Typography variant="h5" mb={2} fontWeight={'bold'}>
            {SITE_CONFIG.appName}
          </Typography>
          <Typography variant="body2">
            Meta Real Estate is your digital resource for buying and selling homes in the Dubai, UAE area with real time
            updates of all properties for sale so you have direct access of everything you need to know including all
            current market statistics and listings.
          </Typography>
        </Grid>
        <Grid size={{ sm: 12, md: 6, lg: 4 }} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'} mb={2}>
            Quick Links
          </Typography>
          <Stack gap={1}>
            <Link to={''}>Home</Link>
            <Link to={'listing'}>Listing</Link>
            <Link to={'owned-property'}>Owned Property</Link>
          </Stack>
        </Grid>
        <Grid size={{ sm: 12, md: 6, lg: 4 }} textAlign={'center'}>
          <Typography>
            <Typography variant="h5" fontWeight={'bold'} mb={2}>
              Stay In Touch
            </Typography>
            <Stack direction={'row'} justifyContent={'center'}>
              <IconButton href="">
                <Instagram />
              </IconButton>
              <IconButton href="">
                <LinkedIn />
              </IconButton>
              <IconButton href="">
                <WhatsApp />
              </IconButton>
            </Stack>
            <Box></Box>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
