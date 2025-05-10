import React from 'react';
import { Layout, Typography } from 'antd';
import LOGO from '../assets/Logo Black.png';


const { Header } = Layout;
const { Text } = Typography;

function Navbar() {
  return (
    <Header className="custom-navbar">
        <img src={LOGO} alt="" className="logo"/>
    </Header>
  );
}

export default Navbar;
