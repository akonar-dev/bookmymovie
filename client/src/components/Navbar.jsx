import React from "react";
import { Layout, Menu, Button, Space, Typography } from "antd";
const { Header } = Layout;
const { Text } = Typography;
import {useNavigate} from "react-router"

const Navbar = ({currentUser}) => {
  const navigate = useNavigate();
  const onLogout = ()=>{
    navigate("/login")
  }
  return (
    <Header
      style={{
        backgroundColor: "#000",
        padding:"10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left: App Name / Logo */}
      <div style={{ color: "white", fontSize: 18, fontWeight: 600 }}>
        BookMyMovie
      </div>

      {/* Right: User Info */}
      {currentUser && (
        <Space>
          <Text style={{ color: "white" }}>
            Welcome , {currentUser}
          </Text>
          <Button type="primary" danger onClick={onLogout}>
            Logout
          </Button>
        </Space>
      )}
    </Header>
  );
};

export default Navbar;
