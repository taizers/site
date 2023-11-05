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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        }}>
            <Typography fontWeight={'600'} component="h3" variant="h4">
                {lection?.title}
            </Typography>
            <Box>

                {
                    lection?.text.map((item, index) => {
                    return <Typography key={index} component="p" variant="h6">
                            {item}
                        </Typography>
                    })
                }
            </Box>
        </Box>
    );
};

export default LectionItem;
