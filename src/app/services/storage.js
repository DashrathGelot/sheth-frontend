const set = (key, value) => {
    localStorage.setItem(key, value);
}

const get = (key) => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(key) || "";
    }
}

export {
    set,
    get
}