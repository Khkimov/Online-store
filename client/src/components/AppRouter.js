import React, { useContext } from "react";
import {Routes, Route} from 'react-router-dom';
import { Context } from "..";
import {authRoutes, publicRoutes} from '../routes';
// import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const {user} = useContext(Context)
  console.log(user.isAuth);
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
      {/* <Route path="*" element={<Shop/>}/> */}
    </Routes>
  )
}

export default AppRouter;
