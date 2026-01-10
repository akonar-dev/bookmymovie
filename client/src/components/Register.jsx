import { Form, Input, Button, Card, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import { registerUser } from "../api/auth_api";

const Register = () => {
  const onFinish = (values) => {
    registerUser(values);
  };

  return (
    <div style={styles.container}>
      <Card title="Create Account" style={styles.card}>
        <Form layout="vertical" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[{ required: true, message: "Firstname is required" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Firstname" />
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[{ required: true, message: "Lastname is required" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Lastname" />
          </Form.Item>

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
            rules={[
              { required: true, message: "Password is required" },
              { min: 6, message: "Minimum 6 characters" },
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
        <p>
          Already have an account?
          <Link to="/login" style={{ color: "#1677ff" }}>
            Login here
          </Link>
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
    width: 380,
  },
};

export default Register;
