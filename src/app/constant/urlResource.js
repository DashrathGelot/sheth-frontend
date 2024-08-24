const HttpMethod = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE"
}

const host = "http://localhost:8080";

const paths = {
    HOME_RESOURCES: "/api/v1/home",
    OAUTH_LOGIN: "/api/v1/oauth/login",
    SIGN_UP: "/api/v1/signup",
    PRODUCTS: "api/v1/products",
    PRODUCT: "api/v1/product"
}

const UI_Paths = {
    PRODUCT: "products"
}

const GOOGLE_OAUTH = {
    ID: process.env.GOOGLE_CLIENT_ID,
    SECRET: process.env.GOOGLE_CLIENT_SECRET
}

export {
    HttpMethod,
    paths,
    host,
    GOOGLE_OAUTH,
    UI_Paths
}