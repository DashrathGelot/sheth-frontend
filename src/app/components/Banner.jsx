import React from "react";

const Banner = ({banner  }) => {
  const  { videoUrl, imageUrl, bannerHeading, tagLine } = banner;
  return (
    <div className="relative w-screen h-screen">
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-auto"
          style={{ width: "100%", height: "90vh", objectFit: "cover" }}
        >
          <source src={videoUrl} type="video/mp4" />
          <img
            src={imageUrl}
            alt="Banner"
            className="absolute inset-0 w-full h-auto"
            style={{ width: "100%", height: "90vh", objectFit: "cover" }}
          />
        </video>
      ) : (
        <img
          src={imageUrl}
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
