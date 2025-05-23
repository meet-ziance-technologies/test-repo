import { Box, CircularProgress, Grid, TablePagination, Typography } from '@mui/material';
import { PropertyCardV1 } from '../components/templates/propertyCard/baseVariant';
import { PropertyData } from '../util/propData/property.data';
import { useEffect, useMemo, useState } from 'react';
import { Property } from '../util/types/property.types';

interface Pagination {
  page: number;
  rawsPerPage: number;
  data: Property[];
  isLoading: boolean;
  isError: boolean;
}
export const ListingPage = () => {
  const [listingState, setListingState] = useState<Pagination>({
    page: 0,
    rawsPerPage: 10,
    data: [],
    isLoading: false,
    isError: false,
  });

  const handlePageChange = (_: any, page: number) => {
    setListingState({ ...listingState, page });
  };

  const handleRowPerPageChange = (row: any) => {
    setListingState({ ...listingState, rawsPerPage: row.target.value });
  };

  const getPropertyData = async () => {
    setListingState({ ...listingState, isLoading: true, isError: false });

    try {
      const data = await new Promise<Property[]>((resolve) => {
        setTimeout(() => {
          resolve(Array(13).fill(PropertyData));
        }, 2000);
      });

      setListingState({ ...listingState, data: data, isLoading: false });
    } catch (e) {
      setListingState({ ...listingState, isError: true, data: [], isLoading: false });
    }
  };

  const startIndex = useMemo(
    () => listingState.page * listingState.rawsPerPage,
    [listingState.page, listingState.rawsPerPage]
  );

  useEffect(() => {
    getPropertyData();
  }, []);

  if (listingState.isLoading) {
    return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'100%'}>
        <CircularProgress />
      </Box>
    );
  }

  if (listingState.isError) {
    return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography color="error" variant="h5">
          Something Went Wrong!
        </Typography>
      </Box>
    );
  }

  return (
    <Box height={'100%'}>
      <Grid container spacing={2}>
        {listingState.data.slice(startIndex, startIndex + listingState.rawsPerPage).map((d, i) => {
          return (
            <Grid size={{ md: 3, lg: 3, sm: 6, xs: 12 }} key={i}>
              <PropertyCardV1 item={d} />
            </Grid>
          );
        })}
      </Grid>
      <TablePagination
        component="div"
        count={listingState.data.length}
        page={listingState.page}
        rowsPerPage={listingState.rawsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowPerPageChange}
      />
    </Box>
  );
};
