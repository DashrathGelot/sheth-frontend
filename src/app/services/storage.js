const set = (key, value) => {
    localStorage.setItem(key, value);
}

const get = (key) => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(key) || "";
    }
}

const remove = (key) => {
    localStorage.removeItem(key);
}

export {
    set,
    get,
    remove
}