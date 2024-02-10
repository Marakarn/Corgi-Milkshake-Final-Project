import React from "react";

const Edittypes = ({setType, setIcon}) => {

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType); // เซ็ตค่า type
    // เซ็ตค่า icon ตาม type ที่ถูกเลือก
    switch(selectedType) {
      case "walking":
        setIcon("directions_walk");
        break;
      case "Running":
        setIcon("directions_run");
        break;
      case "Weight-lifting":
        setIcon("exercise");
        break;
      case "Swimming":
        setIcon("pool");
        break;
      case "Cycling":
        setIcon("directions_bike");
        break;
      case "Aerobics":
        setIcon("sports_gymnastics");
        break;
      default:
        setIcon(""); // หรือให้เป็นค่าว่างหากไม่ตรงกับเงื่อนไขใดๆ
    }
  };

  return (
    <div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-base font-medium">
            Activity Types* :
          </span>
        </label>
        <select className="select select-bordered w-full text-base font-normal" id="editActivityType" onChange={handleTypeChange}>
          <option disabled selected>
            Choose
          </option>
          <option>Walking</option>
          <option>Running</option>
          <option>Weight-lifting</option>
          <option>Swimming</option>
          <option>Cycling</option>
          <option>Aerobics</option>
        </select>
      </div>
    </div>
  );
};

export default Edittypes;
