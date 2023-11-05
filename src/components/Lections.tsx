import React, { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useAppSelector } from '../hooks';
import LectionItem from './LectionItem';
import { startPage } from '../constants';
import Pagination from './Pagination';

const Lections: FC = () => {
  const { lections } = useAppSelector((state) => state.info);
  const [page, setPage] = useState<number>(startPage);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }} className={'container'}>
      <Button sx={{mb: '50px', mt: '20px'}} variant="contained" href="/">
        На главную
      </Button>
      <Box sx={{      
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
         {lections?.length && <LectionItem lection={lections[page]} />}
         {lections?.length && <Pagination setPage={setPage} page={page} totalPages={lections.length} />}
      </Box>
    </Box>
  );
};

export default Lections;
