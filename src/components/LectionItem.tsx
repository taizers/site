import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import MasonryImageList from './ImageList';

interface ILectionItem {
    lection: {
        title: string;
        text: Array<string>;
        photos?: Array<string>;
    };
};

const LectionItem: FC<ILectionItem> = ({lection}) => {
    return (
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        m: '20px',
        mt: 0,
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
            {lection?.photos && <MasonryImageList images={lection.photos} />}
        </Box>
    );
};

export default LectionItem;
