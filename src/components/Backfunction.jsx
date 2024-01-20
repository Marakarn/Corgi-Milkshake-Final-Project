import { useNavigate } from "react-router-dom";

function Backfunction({ path }) {

    const navigate = useNavigate();

    return (
    <button
        className="btn bg-[#D2FE71] text-xl font-normal text-[#000000] hidden md:flex"
        onClick={() => {
            navigate(path);
    }}
    >
        <span className="material-symbols-outlined text-[#000000]">
            arrow_back
            </span>
            Back
    </button>
    );
}

export default Backfunction;