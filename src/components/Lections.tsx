import React, { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useAppSelector } from '../hooks';
import LectionItem from './LectionItem';
import { startPage, textColor } from '../constants';
import Pagination from './Pagination';

const Lections: FC = () => {
  const { lections } = useAppSelector((state) => state.info);
  const [page, setPage] = useState<number>(startPage);

  return (
    <Box sx={{
      display: 'flex',
      height: '100%',
      color: textColor,
      alignItems: 'center',
      flexDirection: 'column',
      background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(28,171,217,1) 100%)'
    }} className={'container'}>
      <Button sx={{mb: '50px', mt: '20px'}} variant="contained" href="/">
        На главную
      </Button>
      {lections?.length && <LectionItem lection={lections[page]} />}
      {lections?.length && <Pagination setPage={setPage} page={page} totalPages={lections.length} />}
    </Box>
  );
};

export default Lections;
