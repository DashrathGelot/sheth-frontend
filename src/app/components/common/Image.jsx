import Image from "next/image";

export default ({src, alt}) => {

    return <div className="w-full h-fit relative">
        <Image
            className="p-0 pb-0"
            src={src}
            alt={alt}
            sizes="100vw"
            fill
            style={{
                objectFit: 'contain'
            }}
        />
    </div>;
}