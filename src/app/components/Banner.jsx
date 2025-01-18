import { isVideo } from "../lib/utils";
import Image from "./common/Image";

const Banner = ({ banner }) => {
  const { attires, title, tagLine } = banner;
  const media = attires[0].media;
  return (
    <div className="w-screen">
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
          style={{ width: "100%", height: "90vh", objectFit: "cover" }}
        />
        // <Image 
        //   src={media}
        //   alt="Banner"
        // />
      )}
      {(title || tagLine) && <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center" style={{ marginTop: "25%" }}>
          <h1 className="text-4xl font-bold font-hind text-white">{title}</h1>
          <p className="text-white">{tagLine}</p>
        </div>
      </div>}
    </div>
  );
};

export default Banner;
