import React from "react";

const Edittypes = ({handleInputChange, setFormData}) => {

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    handleInputChange(e); // เรียกใช้ handleInputChange เพื่ออัพเดตข้อมูลใน formData
    // เซ็ตค่า icon ตาม type ที่ถูกเลือก
    switch (selectedType) {
      case "walking":
        setFormData((prevFormData) => ({
          ...prevFormData,
          editActivityIcon: "directions_walk"
        }));
        break;
      case "Running":
        setFormData((prevFormData) => ({
          ...prevFormData,
          editActivityIcon: "directions_run"
        }));
        break;
      case "Weight-lifting":
        setFormData((prevFormData) => ({
          ...prevFormData,
          editActivityIcon: "exercise"
        }));
        break;
      case "Swimming":
        setFormData((prevFormData) => ({
          ...prevFormData,
          editActivityIcon: "pool"
        }));
        break;
      case "Cycling":
        setFormData((prevFormData) => ({
          ...prevFormData,
          editActivityIcon: "directions_bike"
        }));
        break;
      case "Aerobics":
        setFormData((prevFormData) => ({
          ...prevFormData,
          editActivityIcon: "sports_gymnastics"
        }));
        break;
      default:
        setFormData((prevFormData) => ({
          ...prevFormData,
          editActivityIcon: "" // หรือให้เป็นค่าว่างหากไม่ตรงกับเงื่อนไขใดๆ
        }));
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
        <select className="select select-bordered w-full text-base font-normal" id="editActivityType" onChange={handleTypeChange} required>
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
