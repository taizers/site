import React, { FC } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { textColor } from '../constants';

interface IPagination {
    page: number;
    totalPages: number;
    setPage: (value: number) => void;
};

const Pagination: FC<IPagination> = ({page, setPage, totalPages}) => {
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        value: string,
    ) => {
        if (value === '<' && +page !== 0) {
            return setPage(+page-1);
        }

        if (value === '>' && +page !== totalPages-1) {
            return setPage(+page+1);
        }
    };

    return (
        <ToggleButtonGroup
            color="standard"
            value={page.toString()}
            exclusive
            size='medium'
            onChange={handleChange}
            sx={{mb: '10px', mt: 'auto'}}
        >
            <ToggleButton sx={{color: textColor}} value="<">{'<'}</ToggleButton>
            <ToggleButton sx={{color: textColor}} value={`${page}`}>{page+1}</ToggleButton>
            <ToggleButton sx={{color: textColor}} value=">">{'>'}</ToggleButton>
        </ToggleButtonGroup>
    );
};

export default Pagination;
