import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { minModalDelayInSec, textColor, endModalDelayСoef, bgImageLink, quizeBgColor } from '../constants';
import { clearBalls, clearName } from '../store/redusers/infoSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '3px solid #8f7749',
  boxShadow: 24,
  p: 4,
  color: textColor,
  background: bgImageLink ? `url(/static/${bgImageLink})` : quizeBgColor,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

interface IModalWindow {
    setOpen: (value: boolean) => void;
    setPage: (value: number) => void;
    isOpen: boolean;
    isRight: boolean;
    currentBalls: number;
    page: number;
    currentRightAnswer: string;
    totalPages: number | undefined;
};

const ModalWindow: FC<IModalWindow> = ({setOpen, currentRightAnswer, isOpen, isRight, currentBalls, setPage, page, totalPages}) => {
    const [isTheEnd, setTheEnd] = useState<boolean>(false);
    const [time, setTime] = useState(Date.now());
    const { balls, name } = useAppSelector((state) => state.info);
    const dispatch = useAppDispatch();
    
    let history = useNavigate();

    const handleClose = () => {
        const countTime = Math.floor((Date.now() - time)/1000);

        if (countTime < minModalDelayInSec) {
            return;
        }

        if (isTheEnd && countTime < minModalDelayInSec * endModalDelayСoef) {
            return;
        }

        setOpen(false);
        
        if (totalPages && page !== totalPages-1) {
            setPage(page+1);
        } 
        
        if (isTheEnd) {
            dispatch(clearBalls());
            dispatch(clearName());
            history('/');
        }
    };

    useEffect(() => {
        if (isOpen) {
            setTime(Date.now());
        };

        if (isOpen && totalPages && page === totalPages-1) {
            setTheEnd(true);
        };
    }, [isOpen])

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <Box>
                {!isTheEnd && <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {isRight? "Правильный ответ" : "Неправильный ответ"}
                    </Typography>
                    {isRight &&<Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {`Вы получили +${currentBalls} баллов`}
                    </Typography>}
                    {!isRight &&<Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {`Правильный вариант ответа - ${currentRightAnswer}` }
                    </Typography>}
                </Box>}
                {isTheEnd && <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {"Поздравляем!"}
                    </Typography>
                    {!isRight &&<Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {`Правильный вариант ответа - ${currentRightAnswer}` }
                    </Typography>}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {`${name} Вы заработали за игру ${balls} баллов` }
                    </Typography>
                </Box>}
            </Box>
        </Modal>
    );
};

export default ModalWindow