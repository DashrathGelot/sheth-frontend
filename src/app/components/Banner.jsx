import React from "react";

const Banner = () => {
  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-auto"
        style={{ width: "100%", height: "85vh", objectFit: "cover" }}
      >
        <source src="https://shorturl.at/HQR14" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center" style={{ marginTop: "25%" }}>
          <h1 className="text-4xl font-bold font-hind text-white">
            Your Text Here
          </h1>
          <p className="text-white">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
