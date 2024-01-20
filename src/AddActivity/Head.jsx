import Backfunction from "../components/Backfunction";

const Head = () => {
    return (
        <>
        {/* part 1 */}
        <div className="w-full">
        <div className="">
            {/* <button className="btn bg-[#D2FE71] font-poppins text-xl font-normal text-[#000000] hidden md:flex">
                <span className="material-symbols-outlined text-[#000000]">
                    arrow_back
                </span>
                Back
            </button> */}
            <Backfunction path="/home"/>
        </div>
        <h1 className="text-6xl font-semibold text-[#8BCA00] text-center">
            Add Activity
        </h1>
        <hr className="border-y-[#8BCA00] w-full mt-[75px]" ></hr>
    </div>
    {/* part 1 */}
    </>
    );
};

export default Head