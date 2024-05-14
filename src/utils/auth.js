import { baseUrl, checkResponse } from "./api";

const register = ({name, email, password, avatar}) => {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        avatar,
      }),
    }).then(checkResponse);
  };

  export const login = ({ email, password }) => {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(checkResponse);
  };
  

  const auth = {
    register,
    login,
  };
  
  export default auth;