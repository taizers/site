import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const LayOut: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LayOut;
