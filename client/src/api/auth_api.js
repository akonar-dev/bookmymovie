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


// axios.get('localhost:8001/api/auth/register/')
//   .then(response => {
//     console.log('Axios is working:', response.data);
//   })
//   .catch(error => {
//     console.error('Error using Axios:', error);
//   });

// axios.post('https://jsonplaceholder.typicode.com/posts', {
//   title: 'New Post',
//   body: 'This is a new post.',
//   userId: 1
// })
// .then(response => console.log(response.data))
// .catch(error => console.error(error));
