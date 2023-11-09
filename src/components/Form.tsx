import React, { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { textColor } from '../constants';

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
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <TextField
        label="Введите имя"
        value={name}
        InputLabelProps={{
          style: { color: textColor },
        }}
        sx={{input: { color: textColor }}}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <Button variant="contained" onClick={handleClick}>Далее</Button>
    </Box>
  );
};

export default Form;
