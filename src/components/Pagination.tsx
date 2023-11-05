import React, { FC } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface IPagination {
    page: number;
    totalPages: number;
    setPage: (value: number) => void;
};

function createArray(N: number) {
    let newArr = [];
    for (let i = 0; i <= N-1; i++) {
        newArr.push(i);
    }
    return newArr;
}

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

        if (value !== '>' && value !== '<') {
            setPage(+value);
        }
    };

    const arr = createArray(totalPages);

    return (
        <ToggleButtonGroup
            color="primary"
            value={page.toString()}
            exclusive
            onChange={handleChange}
            sx={{m: '15px'}}
        >
            <ToggleButton value="<">{'<'}</ToggleButton>
            {
                arr.map(item => {
                    return <ToggleButton key={item} value={`${item}`}>{item+1}</ToggleButton>
                })
            }
            <ToggleButton value=">">{'>'}</ToggleButton>
        </ToggleButtonGroup>
    );
};

export default Pagination;
