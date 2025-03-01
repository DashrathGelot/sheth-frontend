import { COLOR, LocalStorage, PRODUCT_CODE } from "../constant/staticResources"
import { get, remove } from "./storage";

const generateProductCode = (code, id, generateBy) => {
    const codes = code.split(PRODUCT_CODE);
    if (COLOR === generateBy) {
        return [codes[0], id, codes[2]].join(PRODUCT_CODE);
    }
    return [codes[0], codes[1], id].join(PRODUCT_CODE);
}

const isLoggedIn = () => {
    return get(LocalStorage.TOKEN) && get(LocalStorage.USER_NAME);
}

const clearStorage = () => {
    remove(LocalStorage.TOKEN);
    remove(LocalStorage.USER_NAME);
}

export {
    generateProductCode,
    isLoggedIn,
    clearStorage
}