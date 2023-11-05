import React, { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import LayOut from './components/Layout';
import NotFound from './components/NotFound';
import Lections from './components/Lections';
import Main from './components/Main';
import Quize from './components/Quize';

import info from './info.json';
import { useAppDispatch } from './hooks';
import { setLections, setQuize } from './store/redusers/infoSlice';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLections(info.lections));
    dispatch(setQuize(info.quize));
  }, []);

  return (
    <Routes>
      <Route path={'/'} element={<LayOut />}>
        <Route
          index
          element={<Main />}
        />
        <Route path={'lections'} element={<Lections />} />
        <Route path={'quize'} element={<Quize />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};


export default App;
