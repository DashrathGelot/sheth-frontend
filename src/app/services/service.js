import { COLOR, PRODUCT_CODE } from "../constant/staticResources"

const generateProductCode = (code, id, generateBy) => {
    const codes = code.split(PRODUCT_CODE);
    console.log(codes);
    if (COLOR === generateBy) {
        return [codes[0], id, codes[2]].join(PRODUCT_CODE);
    }
    return [codes[0], codes[1], id].join(PRODUCT_CODE);
}

export {
    generateProductCode
}