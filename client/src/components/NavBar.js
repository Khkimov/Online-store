import React, { useContext } from "react";
import { Context } from "../index";
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import { NavLink, useNavigate } from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {observer} from 'mobx-react-lite';


const NavBar = observer(() => {
  const {user} = useContext(Context);
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <NavLink style={{color:'#fff'}} to={SHOP_ROUTE}>Тех Фундамент</NavLink>
    {user.isAuth ? 
    <Nav className="ml-auto" style={{color: '#fff'}}>
      <Button variant="outline-light" 
      onClick={() => navigate(ADMIN_ROUTE)}
      >
        Админь панель
        </Button>
      <Button variant="outline-light" 
      onClick={() => navigate(LOGIN_ROUTE)} 
      style={{marginLeft: 10}}
      >
        Выйти
        </Button>
    </Nav>
    :
    <Nav className="ml-auto" style={{color: '#fff'}}>
      <Button variant="outline-ligth" onClick={() => user.setIsAuth(true)}
      style={{color: '#fff'}}
      >Авторизация</Button>
    </Nav>
  }
    </Container>
  </Navbar>
  )
});

export default NavBar;
