import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const textColor = 'black';
const title = '404';
const subTitle = 'Страницы, которую вы пытаетесь найти, не существует.';
const buttonText = 'Домой';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1" style={{ color: textColor }}>
        {title}
      </Typography>
      <Typography variant="h6" style={{ color: textColor }}>
        {subTitle}
      </Typography>
      <Button variant="contained" href={'/'}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default NotFound;
