import { Box, Card, Stack } from '@mui/material';
import PropertyCard from '.';
import { Property } from '../../../util/types/property.types';

interface PropertyCardV1Props {
  item: Property;
}
export const PropertyCardV1 = (props: PropertyCardV1Props) => {
  const handleBuyNow = (id: string) => {
    console.log('>>', id);
  };

  return (
    <Card>
      <PropertyCard item={props.item}>
        <Box position={'relative'}>
          <Box position={'absolute'} right={10} top={10}>
            {props.item.soldOut ? <PropertyCard.soldOut /> : ''}
          </Box>
          <Box width={'100%'} height={'400px'}>
            <PropertyCard.image />
          </Box>
          <Box
            position={'absolute'}
            bottom={'0px'}
            width={'100%'}
            p={2}
            sx={{ bgcolor: 'Highlight', backdropFilter: 'blur(2px)' }}
          >
            <PropertyCard.price />
          </Box>
        </Box>
        <Stack direction={'row'} alignItems={'end'} justifyContent={'space-between'}>
          <Box p={2}>
            <Box mb={2}>
              <PropertyCard.title />
              <PropertyCard.description />
            </Box>
            <Box>
              <PropertyCard.features />
            </Box>
          </Box>
          {!props.item.soldOut ? (
            <Box p={2}>
              <PropertyCard.buyNow onBuyNow={handleBuyNow} />
            </Box>
          ) : (
            ''
          )}
        </Stack>
      </PropertyCard>
    </Card>
  );
};
