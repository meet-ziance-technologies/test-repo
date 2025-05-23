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
export const OwnedPropertyPage = () => {
  const [OwnedState, setOwnedState] = useState<Pagination>({
    page: 0,
    rawsPerPage: 10,
    data: [],
    isLoading: false,
    isError: false,
  });

  const handlePageChange = (_: any, page: number) => {
    setOwnedState({ ...OwnedState, page });
  };

  const handleRowPerPageChange = (row: any) => {
    setOwnedState({ ...OwnedState, rawsPerPage: row.target.value });
  };

  const getPropertyData = async () => {
    setOwnedState({ ...OwnedState, isLoading: true, isError: false });

    try {
      const data = await new Promise<Property[]>((resolve) => {
        setTimeout(() => {
          resolve(
            Array(5)
              .fill(PropertyData)
              .map((v) => ({ ...v, soldOut: true }))
          );
        }, 2000);
      });

      setOwnedState({ ...OwnedState, data: data, isLoading: false });
    } catch (e) {
      setOwnedState({ ...OwnedState, isError: true, data: [], isLoading: false });
    }
  };

  const startIndex = useMemo(() => OwnedState.page * OwnedState.rawsPerPage, [OwnedState.page, OwnedState.rawsPerPage]);

  useEffect(() => {
    getPropertyData();
  }, []);

  if (OwnedState.isLoading) {
    return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'100%'}>
        <CircularProgress />
      </Box>
    );
  }

  if (OwnedState.isError) {
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
        {OwnedState.data.slice(startIndex, startIndex + OwnedState.rawsPerPage).map((d, i) => {
          return (
            <Grid size={{ md: 3, lg: 3, sm: 6, xs: 12 }} key={i}>
              <PropertyCardV1 item={d} />
            </Grid>
          );
        })}
      </Grid>
      <TablePagination
        component="div"
        count={OwnedState.data.length}
        page={OwnedState.page}
        rowsPerPage={OwnedState.rawsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowPerPageChange}
      />
    </Box>
  );
};
