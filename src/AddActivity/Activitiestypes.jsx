import React from "react";

const Activitiestypes = ({handleInputChange, setFormData}) => {
  
  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    handleInputChange(e); // เรียกใช้ handleInputChange เพื่ออัพเดตข้อมูลใน formData
    // เซ็ตค่า icon ตาม type ที่ถูกเลือก
    switch (selectedType) {
      case "walking":
        setFormData((prevFormData) => ({
          ...prevFormData,
          activityIcon: "directions_walk"
        }));
        break;
      case "Running":
        setFormData((prevFormData) => ({
          ...prevFormData,
          activityIcon: "directions_run"
        }));
        break;
      case "Weight-lifting":
        setFormData((prevFormData) => ({
          ...prevFormData,
          activityIcon: "exercise"
        }));
        break;
      case "Swimming":
        setFormData((prevFormData) => ({
          ...prevFormData,
          activityIcon: "pool"
        }));
        break;
      case "Cycling":
        setFormData((prevFormData) => ({
          ...prevFormData,
          activityIcon: "directions_bike"
        }));
        break;
      case "Aerobics":
        setFormData((prevFormData) => ({
          ...prevFormData,
          activityIcon: "sports_gymnastics"
        }));
        break;
      default:
        setFormData((prevFormData) => ({
          ...prevFormData,
          activityIcon: "" // หรือให้เป็นค่าว่างหากไม่ตรงกับเงื่อนไขใดๆ
        }));
    }
  };
  
  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-base font-medium">
            Activity Types* :
          </span>
        </label>
        <select className="select select-bordered w-full text-base font-normal" id="activityType" onChange={handleTypeChange} required>
          <option value="" disabled selected>Choose</option>
          <option value="walking">Walking</option>
          <option value="Running">Running</option>
          <option value="Weight-lifting">Weight-lifting</option>
          <option value="Swimming">Swimming</option>
          <option value="Cycling">Cycling</option>
          <option value="Aerobics">Aerobics</option>
        </select>
      </div>
    </>
  );
};

export default Activitiestypes;
