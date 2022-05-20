import React, { useContext } from "react";
import {Routes, Route} from 'react-router-dom';
import { Context } from "..";
import {authRoutes, publicRoutes} from '../routes';

const AppRouter = () => {
  const {user} = useContext(Context)

  console.log(user);
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
    </Routes>
  )
}

export default AppRouter;
