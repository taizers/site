import { FC, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { maxBallsForQuestion } from '../constants';
import { useAppDispatch } from '../hooks';
import { setBalls } from '../store/redusers/infoSlice';

interface IQuizeItem {
    quizeItem: {
        question: string;
        variants: Array<string>;
        rightVariant: string;
    };
    setModalOpen: (value: boolean) => void;
    setRightAnswer: (value: boolean) => void;
    setCurrentBalls: (value: number) => void;
    setCurrentRightAnswer: (value: string) => void;
};

const QuizeItem: FC<IQuizeItem> = ({quizeItem, setModalOpen, setRightAnswer, setCurrentBalls, setCurrentRightAnswer}) => {
    const [time, setTime] = useState(Date.now());
    const dispatch = useAppDispatch();

    useEffect(()=> {
        setTime(Date.now());
    }, [quizeItem]);

    const handleClick = (index: number) => {
        if (index+1 === +quizeItem.rightVariant) {
            const answerTime = Math.floor((Date.now() - time)/1000);
            const countBalls = (maxBallsForQuestion - answerTime)
            const balls = countBalls > 0 ? countBalls : 0;

            dispatch(setBalls(balls));

            setRightAnswer(true);
            setCurrentBalls(balls);
        } else {    
            setRightAnswer(false);
            setCurrentRightAnswer(quizeItem?.variants[+quizeItem.rightVariant + 1]);
            setCurrentBalls(0);
        }

        setModalOpen(true);
    };

    return (
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: "auto",
        mt: 0,
        }}>
            <Typography fontWeight={'600'} component="h3" variant="h4">
                {quizeItem?.question}
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                m: '20px',
                flexWrap: 'wrap',
            }}>
                {
                    quizeItem.variants.map((item, index) => {
                        return <Button key={index} onClick={() => handleClick(index)} variant="contained">{item}</Button>
                    })
                }
            </Box>
        </Box>
    );
};

export default QuizeItem;
