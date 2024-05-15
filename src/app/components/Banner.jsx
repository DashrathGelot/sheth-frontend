import React from "react";

const Banner = ({ videoUrl, imageUrl, heading, paragraph }) => {
  return (
    <div className="relative w-screen h-screen">
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-auto"
          style={{ width: "100%", height: "85vh", objectFit: "cover" }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={imageUrl}
          alt="Banner"
          className="absolute inset-0 w-full h-auto"
          style={{ width: "100%", height: "85vh", objectFit: "cover" }}
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center" style={{ marginTop: "25%" }}>
          <h1 className="text-4xl font-bold font-hind text-white">{heading}</h1>
          <p className="text-white">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;