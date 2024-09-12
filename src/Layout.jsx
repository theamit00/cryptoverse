import React from "react";
import { Navbar } from "./components";
import { Link, Outlet } from "react-router-dom";
import { Space, Typography } from "antd";

const Layout = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar />
      </nav>
      <main className="main">
        <div className="routes">
          <Outlet />
        </div>
        <footer className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/exchanges">Exchanges</Link>
          </Space>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
