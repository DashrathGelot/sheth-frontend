const HttpMethod = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE"
}

// const host = "http://ec2-3-109-212-242.ap-south-1.compute.amazonaws.com:8080";
const host = "http://localhost:8080";

const paths = {
    HOME_RESOURCES: "/api/v1/home",
    OAUTH_LOGIN: "/api/v1/oauth/login",
    SIGN_UP: "/api/v1/signup",
    PRODUCTS: "/api/v1/products",
    PRODUCT: "/api/v1/product",
    ADD_TO_BAG: "/api/v1/bag/add",
    GET_BAG: "/api/v1/bag",
    REMOVE_ITEM: "/api/v1/bag/remove",
    GET_FILTERS_MENU: "/api/v1/menu/filters",
    FILTERED_PRODUCTS: "/api/v1/products/filter"
}

const UI_Paths = {
    PRODUCT: "product",
    PRODUCTS: "products"
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