import { baseUrl, checkResponse } from "./api";

const register = (email, name, password, avatar) => {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        avatar,
        email,
        password,
      }),
    }).then(checkResponse);
  };

  const login = (email, password) => {
    return fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(checkResponse);
  };

  const auth = {
    register,
    login,
  };
  
  export default auth;