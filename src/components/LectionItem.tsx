import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface ILectionItem {
    lection: {
        title: string;
        text: Array<string>
    };
};

const LectionItem: FC<ILectionItem> = ({lection}) => {
    return (
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        m: '20px',
        overflow: "auto",
        height: '100%'
        }}>
            <Typography sx={{textAlign: 'justify'}} fontWeight={'600'} component="h3" variant="h4">
                {lection?.title}
            </Typography>
            <Box>

                {
                    lection?.text.map((item, index) => {
                    return <Typography sx={{textIndent: '40px', textAlign: 'justify'}} key={index} component="p" variant="h6">
                            {item}
                        </Typography>
                    })
                }
            </Box>
        </Box>
    );
};

export default LectionItem;
