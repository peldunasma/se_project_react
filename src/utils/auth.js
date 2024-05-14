import { baseUrl, checkResponse } from "./api";

const signUp = ({name, email, password, avatar}) => {
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

  export const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(checkResponse);
  };

  export const editProfile = ({ name, avatar }, token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, avatar }),
    }).then(checkResponse);
  };

  const auth = {
    signUp,
    login,
    checkToken,
    editProfile,
  };
  
  export default auth;