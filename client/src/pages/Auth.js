import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Card, Container, Form, Button, Row} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { registration, login } from "../http/userAPI";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/consts'

const Auth = observer(() => {
  const {user} = useContext(Context);
  const location = useLocation();
  const navigation = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
        console.log(data);
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigation(SHOP_ROUTE)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  
  return (
    <Container className="d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
          <h2 className={"m-auto"}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className={"d-flex flex-column"}>
          <Form.Control 
          className={"mt-3"}
          placeholder="Введите ваш email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          <Form.Control 
          className={"mt-3"}
          placeholder="Введите ваш пароль..."
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          />
          <div className={"d-flex justify-content-between mt-3 pl-3 pr-3"}>
            {isLogin ? 
            <div>
              <span className={"p-2"}>
              Нет аккаунта? 
              </span>
              <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
            </div> 
            :
            <div>
              <span className={"p-2"}>
              Есть аккаунт? 
              </span>
              <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            </div> 
             }
          <Button 
          variant={"outline-warning"}
          onClick={click}
          >
            {isLogin ? 'Войти' : 'Регистрация'}
          </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth;
