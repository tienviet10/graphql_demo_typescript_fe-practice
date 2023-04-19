import Layout, { Content, Header } from "antd/es/layout/layout";
import "./App.css";
import Home from "./pages/Home";
import "./styles/dashboard.css";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { HiOutlineHome } from "react-icons/hi";
import { GrOrganization } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="container">
      <Header className="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <GiHamburgerMenu
            onClick={() => setCollapsed(!collapsed)}
            size={28}
            style={{ marginRight: 20 }}
          />
          <div className="brand">Cool Dashboard</div>
        </div>
      </Header>
      {/* <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HiOutlineHome />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<GrOrganization />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BsPerson />}>
            Logout
          </Menu.Item>
        </Menu>
      </Header> */}
      <Layout>
        <Sider collapsed={collapsed} theme="light">
          <Menu
            mode="inline"
            items={[
              {
                key: "Home",
                label: "Home",
                icon: <HiOutlineHome />,
                children: [
                  {
                    key: "add_profile",
                    label: "Add Profile",
                    icon: <BsPerson />,
                  },
                  {
                    key: "all_users",
                    label: "All Users",
                    icon: <BsPerson />,
                  },
                ],
              },
              {
                key: "about_us",
                label: "About",
                icon: <GrOrganization />,
              },
            ]}
          ></Menu>
        </Sider>
        <Content className="content">
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
