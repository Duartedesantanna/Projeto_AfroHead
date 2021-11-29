import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const menu = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Quem Somos',
    link: '/sobre'
  },
  {
    title: 'Sou Profissional',
    link: '/Cadastro'
  },
  {
    title: 'Ache o seu barbeiro',
    link: '/ache-seu-barbeiro'
  },
  {
    title: 'Contato',
    link: '/Contact'
  },
]


const TopMenu = () => (
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    {menu.map((m, index) => {
      const key = index + 1;
      return <Menu.Item key={key}><Link to={m.link}>{m.title}</Link></Menu.Item>;
    })}
  </Menu>
)

export default TopMenu;