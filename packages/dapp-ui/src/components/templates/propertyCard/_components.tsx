import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material';
import { propertyCardContext } from '.';
import { SITE_CONFIG } from '../../../config/site.config';

export const Image = () => {
  const { images } = propertyCardContext();
  return (
    <>
      <img height={'100%'} width={'auto'} src={images[0]}></img>
    </>
  );
};

export const Price = () => {
  const { price } = propertyCardContext();

  return (
    <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'}>
      <Box>
        <Typography variant="caption">{SITE_CONFIG.currency}</Typography>
      </Box>
      <Box>
        <Typography variant="h6" fontWeight={'bold'}>
          {price.toFixed(2)}
        </Typography>
      </Box>
    </Stack>
  );
};

export const Features = () => {
  const { features } = propertyCardContext();

  return (
    <Stack direction={'row'} gap={1} divider={<Divider flexItem orientation="vertical" />}>
      {features.map((v) => (
        <Typography variant="caption" fontWeight={500}>
          {v}
        </Typography>
      ))}
    </Stack>
  );
};

export const SoldOut = () => {
  return <Chip component={'div'} variant="filled" color="error" label="SOLD OUT" />;
};

export const Title = () => {
  const { title } = propertyCardContext();
  return <Typography variant="h5">{title}</Typography>;
};

export const Description = () => {
  const { description } = propertyCardContext();
  return (
    <Typography variant="caption" color="textSecondary">
      {description}
    </Typography>
  );
};

export const BuyNow = (props: { onBuyNow: (id: string) => void }) => {
  const { id } = propertyCardContext();

  return (
    <Button variant="outlined" color="primary" onClick={() => props.onBuyNow(id)}>
      Buy Now
    </Button>
  );
};
