import { useEffect } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import { loginUser, getUserData } from "../api/auth_api";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getUser } from "../redux-toolkit/userReducer";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
      const login = await loginUser(values)
      console.log(login,"login")
      const {loggedIn} = login
      if(loggedIn) {
        console.log("inside loggedin")
        navigate("/")
      }
  };
  const dispatch = useDispatch()
  useEffect(() => {
      const fetchUser = async () => {
        const user = await getUserData();
        dispatch(getUser(user.data.user.firstname))
      };
      fetchUser();
    }, []);

  return (
    <div style={styles.container}>
      <Card title="Login" style={styles.card}>
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter password" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
        <p>
          New User? <Link to="/register">Register Here</Link>
        </p>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
  },
  card: {
    width: 350,
  },
};

export default Login;
