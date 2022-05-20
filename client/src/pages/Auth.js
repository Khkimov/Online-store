import React from "react";
import { Card, Container, Form, FormControl, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container className="d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <FormControl 
          className="mt-3"
          placeholder="Введите ваш email..."
          />
          <FormControl 
          className="mt-3"
          placeholder="Введите ваш пароль..."
          />
          <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? 
            <div>
              <span className="p-2">
              Нет аккаунта? 
              </span>
              <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
            </div> 
            :
            <div>
              <span className="p-2">
              Есть аккаунт? 
              </span>
              <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            </div> 
             }
          <Button variant="outline-warning"
          >
            {isLogin ? 'Войти' : 'Регистрация'}
          </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth;
