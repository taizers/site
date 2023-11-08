import React, { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useAppSelector } from '../hooks';
import LectionItem from './LectionItem';
import { bgImageLink, lectionsBgColor, startPage, textColor } from '../constants';
import Pagination from './Pagination';

const Lections: FC = () => {
  const { lections } = useAppSelector((state) => state.info);
  const [ page, setPage ] = useState<number>(startPage);

  return (
    <Box sx={{
      display: 'flex',
      height: '100%',
      color: textColor,
      alignItems: 'center',
      flexDirection: 'column',
      background: bgImageLink ? `url(/static/${bgImageLink})` : lectionsBgColor,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className={'container'}>
      <Button sx={{mb: '20px', mt: '10px'}} variant="contained" href="/">
        На главную
      </Button>
      {lections?.length && <LectionItem lection={lections[page]} />}
      {lections?.length && <Pagination setPage={setPage} page={page} totalPages={lections.length} />}
    </Box>
  );
};

export default Lections;
