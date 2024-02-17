import React from "react";

const Startvideo = () => {
  return (
    <div className="w-full md:w-1/2 ">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-3xl font-medium">Warm Up</span>
          </label>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/r-eCuqdZig8?si=PrOO5BF8SAGB3o3Z"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </form>
    </div>
  );
};

export default Startvideo;
