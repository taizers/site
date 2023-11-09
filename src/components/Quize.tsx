import React, { FC, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { maxBallsForQuestion, minModalDelayInSec, startPage, textColor, endModalDelayСoef, quizeBgColor, bgImageLink } from '../constants';
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
  const [currentRightAnswer, setCurrentRightAnswer] = useState<string>('');

  const arriveName = (name: string) => {
    dispatch(setName(name));
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      color: textColor,
      background: bgImageLink ? `url(/static/${bgImageLink})` : quizeBgColor,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className={'container'}>
      <Button sx={{mb: '20px', mt: '10px'}} variant="contained" href="/">
        На главную
      </Button>
      {isFormOpen && <Typography sx={{textIndent: '40px', textAlign: 'justify'}} component="h2" variant="h6">
          {`Для начала теста введите своё имя. Для ответа на каждый вопрос максимум будет дано ${maxBallsForQuestion} секунд, каждую секунду отнимается по 1 баллу, максимум баллов который можно получить за один вопрос - ${maxBallsForQuestion}. Перейти к следующему вопросу можно нажав на пространство вне высветившейся таблички с правильным ответом/таблички с полученными баллами за задание. Задержка после каждого ответа ${minModalDelayInSec} секунда, задержка после ответа на все вопросы ${minModalDelayInSec * endModalDelayСoef} секунды.`}
        </Typography>}
      {isFormOpen && <Form arriveName={arriveName} setFormOpen={setFormOpen} />}

      {!isFormOpen &&quize?.length && <QuizeItem setCurrentRightAnswer={setCurrentRightAnswer} setModalOpen={setModalOpen}  setCurrentBalls={setCurrentBalls} setRightAnswer={setRightAnswer} quizeItem={quize[page]} />}
   
      {isModalOpen && <ModalWindow 
        isOpen={isModalOpen} 
        page={page} 
        setPage={setPage} 
        totalPages={quize?.length} 
        setOpen={setModalOpen} 
        currentBalls={currentBalls} 
        isRight={isRightAnswer} 
        currentRightAnswer={currentRightAnswer} 
      />}
    </Box>
  );
};

export default Quize;
