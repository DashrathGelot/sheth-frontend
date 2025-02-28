import { isVideo } from "../lib/utils";
import Image from "./common/Image";

const Banner = ({ banner }) => {
  const { attires, title, tagLine } = banner;
  const media = attires[0].media;
  return (
    <div className="w-screen relative">
      {isVideo(media) ? (
        <video
          autoPlay
          muted
          loop
          className="inset-0 w-full"
          style={{ width: "100vw", objectFit: "contain" }}
        >
          <source src={media} type={`video/${media.split('.').pop()}`} />
        </video>
      ) : (
        <img
          src={media}
          alt="Banner"
          className="inset-0 w-full h-auto"
          style={{ objectFit: "cover" }}
        />
        // <Image 
        //   src={media}
        //   alt="Banner"
        // />
      )}
      {(title || tagLine) && (
        <div className="absolute inset-0 flex flex-col items-center md:justify-center">
          <div className=" relative text-center mobile-margin-hero ">
            <h1 className="text-[30px] md:text-4xl font-bold font-hind text-white">
              {title}
            </h1>
            <p className="text-[15px] md:text-base text-white">{tagLine}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
