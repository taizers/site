import React, { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

interface IForm {
  setFormOpen: (value: boolean) => void;
  arriveName: (value: string) => void;
};

const Form: FC<IForm> = ({setFormOpen, arriveName}) => {
  const [name, setName] = React.useState<string>('');

  const handleClick = () => {
    if (name) {
      arriveName(name);
      setFormOpen(false);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Имя"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <Button variant="contained" onClick={handleClick}>Сохранить</Button>
    </Box>
  );
};

export default Form;
