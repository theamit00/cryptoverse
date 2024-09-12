import { Avatar, Button, Menu, Typography } from "antd";
import React from "react";

import icon from "../assets/images/cryptocurrency.png";
import { Link, useLocation } from "react-router-dom";
import {
  BuildOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "/cryptocurrencies",
    icon: <FundOutlined />,
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
  },
  {
    key: "/exchanges",
    icon: <MoneyCollectOutlined />,
    label: <Link to="/exchanges">Exchanges</Link>,
  },
  {
    key: "/news",
    icon: <BuildOutlined />,
    label: <Link to="/news">News</Link>,
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className='menu-control-container' >

            </Button> */}
      </div>

      <Menu
        theme="dark"
        defaultSelectedKeys={[`${location.pathname}`]}
        items={items}
      />
    </div>
  );
};

export default Navbar;
