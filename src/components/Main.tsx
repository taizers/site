import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { bgMainImageLink } from '../constants';

const Main: FC = () => {
  return (
    <Box sx={{
      height: '100%',
      backgroundImage: `url(/static/${bgMainImageLink})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '20px',
    }} className={'container'}>
      <Typography sx={{textShadow: '2px 2px 2px #000', color: 'white', textAlign: 'center'}} component="h2" variant="h4">
          {'Героическое прошлое белорусского народа'}
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px'
      }}>
        <Button variant="contained" href="/lections">
          Лекции
        </Button>
        <Button variant="contained" href="/quize">
          Тест
        </Button>
      </Box>
    </Box>
  );
};

export default Main;
