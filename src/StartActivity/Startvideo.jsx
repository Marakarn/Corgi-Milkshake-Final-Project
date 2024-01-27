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
            class="w-full aspect-video ..."
            src="https://youtu.be/f3zOrYCwquE?si=-aBXLYmytVMtjGt9"
          ></iframe>
          {/* <video
              className="aspect-video"
              src="https://youtu.be/f3zOrYCwquE?si=-aBXLYmytVMtjGt9"
            ></video> */}
        </div>
      </form>
    </div>
  );
};

export default Startvideo;
