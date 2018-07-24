//end points

const baseURL = "http://localhost:3000"

export const ENDPOINT_GET_HOME = baseURL + "/";

export const ENDPOINT_GET_PROFILE = baseURL + "/profile/:id";

export const ENDPOINT_GET_USERS = baseURL + "/users";

export const ENDPOINT_POST_SIGNIN = baseURL + "/signin";

export const ENDPOINT_POST_REGISTER = baseURL + "/register";

export const ENDPOINT_PUT_IMAGE = baseURL + "/image";

export const JSON_POST_REQUEST = { 
    method: "post",
    headers: { "Content-Type": "application/json"},
    body: ""
}