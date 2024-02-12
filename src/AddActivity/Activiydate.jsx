import React from "react";

const Activiydate = ({handleInputChange}) => {

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();

    // ตรวจสอบว่าวันที่ที่ผู้ใช้เลือกมามีค่ามากกว่าหรือเท่ากับวันปัจจุบันหรือไม่
    if (selectedDate >= currentDate) {
      // ถ้าเป็นเช่นนั้นให้เรียกฟังก์ชัน handleInputChange เพื่อปรับปรุงข้อมูลตามต้องการ
      handleInputChange(event);
    } else {
      // ถ้าวันที่เลือกน้อยกว่าวันปัจจุบัน ให้กำหนดค่าให้กับ input เป็นวันปัจจุบัน
      event.target.valueAsDate = currentDate;
    }
  };

  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">Date* :</span>
        </label>
        <input
          type="date"
          id="date"
          name="trip-start"
          min="2024-01-01"
          className="input input-bordered"
          onChange={handleDateChange}
          required
        />
      </div>
    </>
  );
};

export default Activiydate;
