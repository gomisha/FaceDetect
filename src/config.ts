//end points

const baseURL = "http://localhost:3000"

export const ENDPOINT_GET_HOME = baseURL + "/";

export const ENDPOINT_GET_PROFILE = baseURL + "/profile/:id";

export const ENDPOINT_GET_USERS = baseURL + "/users";

export const ENDPOINT_POST_SIGNIN = baseURL + "/signin";

export const ENDPOINT_POST_REGISTER = baseURL + "/register";

export const ENDPOINT_PUT_IMAGE = baseURL + "/image";

//JSON requests

export const JSON_POST_REQUEST = { 
    method: "post",
    headers: { "Content-Type": "application/json"},
    body: ""
}

export const JSON_PUT_REQUEST = {
    method: "put",
    headers: { "Content-Type": "application/json"},
    body: ""
}

//Clarifai

export const CLARIFAI_KEY = "d8356d92cf6c41f3a7e2b499e23baa20"

//Particles background

export const particlesOptions = {
    particles: {
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 30
        }
    }
}

// routes

export const ROUTE_HOME = "home";
export const ROUTE_SIGNIN = "signIn";
export const ROUTE_REGISTER = "register";