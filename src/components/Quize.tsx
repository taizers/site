import React, { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { startPage } from '../constants';
import QuizeItem from './QuizeItem';
import ModalWindow from './Modal';
import Form from './Form';
import { setName } from '../store/redusers/infoSlice';

const Quize: FC = () => {
  const dispatch = useAppDispatch();
  const { quize } = useAppSelector((state) => state.info);
  const [page, setPage] = useState<number>(startPage);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isRightAnswer, setRightAnswer] = useState<boolean>(false);
  const [currentBalls, setCurrentBalls] = useState<number>(0);
  const [isFormOpen, setFormOpen] = useState<boolean>(true);

  const arriveName = (name: string) => {
    dispatch(setName(name));
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      color: 'white',
      background: 'linear-gradient(360deg, #191477 0%, rgba(9,9,121,0.8519782913165266) 37%, rgba(0,212,255,1) 100%)',
    }} className={'container'}>
      <Button sx={{mb: '50px', mt: '20px'}} variant="contained" href="/">
        На главную
      </Button>
      {isFormOpen && <Form arriveName={arriveName} setFormOpen={setFormOpen} />}

         {!isFormOpen &&quize?.length && <QuizeItem setModalOpen={setModalOpen}  setCurrentBalls={setCurrentBalls} setRightAnswer={setRightAnswer} quizeItem={quize[page]} />}
   
      {isModalOpen && <ModalWindow 
        isOpen={isModalOpen} 
        page={page} 
        setPage={setPage} 
        totalPages={quize?.length} 
        setOpen={setModalOpen} 
        currentBalls={currentBalls} 
        isRight={isRightAnswer} 
      />}
    </Box>
  );
};

export default Quize;
