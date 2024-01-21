
const Plan = () => {
  return (
    <>
        <div className="">
          <form className="card-body">
            <div className="form-control">
              <div className="card card-side bg-base-100 shadow-xl w-full mt-9 border-2 border-[#8BCA00]">
                <div className="card-body p-1">
                  <div className="hero-content">
                    <div className="flex">
                      <span class="material-symbols-outlined text-[#000000] text-4xl">
                        directions_walk
                      </span>
                      <div>
                        <h2 className="card-title text-2xl text-[#8BCA00]">
                          Walking alone
                        </h2>
                        <p className="text-base text-normal">
                          Walking for exercise
                        </p>
                        <p className="text-base text-normal">
                          24/1/2024 (2 hr)
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <button className="btn btn-circle bg-[#8BCA00]">
                        <span class="material-symbols-outlined text-[#FFFFFF]">
                          play_arrow
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    </>
  );
};

export default Plan;
