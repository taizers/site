import { FC } from 'react';
import { Box, Button } from '@mui/material';

const Main: FC = () => {
  return (
    <Box sx={{
      height: '100%',
      backgroundImage: 'url(/static/Volkovysk.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '20px'
    }} className={'container'}>
      <Button variant="contained" href="/lections">
        Лекции
      </Button>
      <Button variant="contained" href="/quize">
        Тест
      </Button>
    </Box>
  );
};

export default Main;
