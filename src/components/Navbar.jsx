import { Avatar, Button, Menu, Typography } from 'antd'
import React from 'react'

import icon from '../assets/images/cryptocurrency.png';
import { Link } from 'react-router-dom';
import { BuildOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className='logo' >
                <Link to="/">
                    Cryptoverse
                </Link>
            </Typography.Title>
            {/* <Button className='menu-control-container' >

            </Button> */}
        </div>

        <Menu theme='dark' defaultSelectedKeys={['1']} >
                <Menu.Item icon={<HomeOutlined />} key='1' >
                    <Link to='/' >
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />} >
                    <Link to='/cryptocurrencies' >
                        Cryptocurrencies
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />} >
                    <Link to='/exchanges' >
                        Exchanges
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<BuildOutlined />} >
                    <Link to='/news' >
                        News
                    </Link>
                </Menu.Item>
        </Menu>

    </div>
  )
}

export default Navbar