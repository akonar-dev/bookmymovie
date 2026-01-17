import axios from "axios";

export const registerUser = async (values) => {
  try {
    const response = await axios.post("http://localhost:8001/api/auth/register",
      values);
    return response
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (values) => {
  try {
    const response = await axios.post("http://localhost:8001/api/auth/login",
      values, {withCredentials: true});
    console.log(response,"resp")
    const data = response.data;
    return data
  } catch (error) {
    console.error(error);
  }
};

export const getUserData = async(values) => {
  try {
    const response = await axios.get("http://localhost:8001/api/auth/current-user", {
      withCredentials: true
    })
    return response
  } catch (error) {
    console.error("Current user error", error.message)
  }
}

export const logoutUser = async () => {
  try {
  const response = await axios.post("http://localhost:8001/api/auth/logout",{}, {withCredentials: true});
    console.log(response,"resp logout")
    const data = response.data;
    return data
  } catch (error) {
    console.error(error);
  }
}
