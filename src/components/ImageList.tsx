import React, { FC } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface IMasonryImageList {
    images: Array<string>;
};

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
    return {
      src: `/static/${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `/static/${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const MasonryImageList:FC<IMasonryImageList> = ({images}) => {
  return (
    <Box sx={{ maxWidth: '100%', }}>
      <ImageList
        gap={8}
        sx={{ 
            width: '100%', 
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }}
        variant="quilted"
      >
        {images.map((item, index) => (
          <ImageListItem sx={{flexGrow: 1, flexBasis: 400}} key={index} cols={1} rows={1}>
            <img
                {...srcset(item, 121,  1, 1)}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
export default MasonryImageList;
