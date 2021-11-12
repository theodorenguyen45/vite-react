import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './routes/routes';

const App: React.FunctionComponent<any> = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, exact, ...route }, index) => (
            <Route key={index} path={path} element={<route.element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
