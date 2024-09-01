import { HttpMethod, host } from "../constant/urlResource";

const rest = async (method, uri, payload) => {
    try {
        let res;
        const fullUrl = host + uri;
        
        console.log("Method: ", method, " URL: ", fullUrl);

        if (payload !== undefined) {
            console.log("Payload: ", payload);
        }

        switch (method) {
            case HttpMethod.POST:
                res = await post(fullUrl, payload);
                break;
            case HttpMethod.PUT:
                res = await put(fullUrl, payload);
                break;
            case HttpMethod.DELETE:
                res = await deleteRest(fullUrl, payload);
                break;
            default:
                res = await get(fullUrl);
        }

        if (res.ok) {
            try {
                const response = await res.json();
                console.log("response: ", response);
                return response;
            } catch (e) {
                console.log(e);
                return res;
            }
        }
        return undefined;
    } catch(err) {
        console.log(err);
    }
}

const post = async (uri, payload) => {
    return await fetch(uri, {
        method: HttpMethod.POST,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
}

const get = async (uri) => {
    return await fetch(uri);
}

const put = async (uri, payload) => {
    return await fetch(uri, {
        method: HttpMethod.PUT,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
}

const deleteRest = async (uri, payload) => {
    return await fetch(uri, {
        method: HttpMethod.DELETE,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
}

const createURI = (paths) => {
    return createCaseURI(paths).toLowerCase();
}

const createCaseURI = (paths) => {
    if (paths.filter(path => path === null || path === undefined).length > 0) return "/";
    return "/"+ paths.map(path => path.toString().replace(/ /g, "-")).join("/");
}

export default rest;

export {
    post,
    get,
    put,
    deleteRest,
    createURI,
    createCaseURI
}