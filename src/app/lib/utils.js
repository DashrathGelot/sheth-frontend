const clsn = (condition, accept, rest) => {
    return condition ? accept : rest;
}

export {
    getClassName
}