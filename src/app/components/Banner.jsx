import React from "react";

const Banner = ({ banner }) => {
  const { media, bannerHeading, tagLine } = banner;

  const isVideo = (url) => {
    const videoExtensions = ["mp4", "webm", "ogg"];
    const extension = url.split('.').pop().toLowerCase();
    return videoExtensions.includes(extension);
  };

  return (
    <div className="relative w-screen h-screen">
      {isVideo(media) ? (
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-auto"
          style={{ width: "100%", height: "90vh", objectFit: "cover" }}
        >
          <source src={media} type={`video/${media.split('.').pop()}`} />
        </video>
      ) : (
        <img
          src={media}
          alt="Banner"
          className="absolute inset-0 w-full h-auto"
          style={{ width: "100%", height: "90vh", objectFit: "cover" }}
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center" style={{ marginTop: "25%" }}>
          <h1 className="text-4xl font-bold font-hind text-white">{bannerHeading}</h1>
          <p className="text-white">{tagLine}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
