import { VIDEO_EXTENSTIONS } from "../constant/staticResources";

const clsn = (condition, accept, rest) => {
    return condition ? accept : rest;
}

const isVideo = (url) => {
    const extension = url.split('.').pop().toLowerCase();
    return VIDEO_EXTENSTIONS.includes(extension);
};

export {
    clsn,
    isVideo
}