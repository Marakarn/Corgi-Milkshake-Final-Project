import React from "react";
import { useState, useEffect } from "react";

const Activiydate = ({ handleInputChange }) => {
  // เริ่มต้นเก็บค่าวันที่ปัจจุบัน
  const [selectedDate, setSelectedDate] = useState();

  // เมื่อมีการเปลี่ยนแปลงใน input จะเรียกฟังก์ชันนี้
  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const currentDate = new Date().toISOString().slice(0, 10); // วันที่ปัจจุบันในรูปแบบ YYYY-MM-DD

    // ตรวจสอบว่าวันที่ที่ผู้ใช้เลือกมามีค่ามากกว่าหรือเท่ากับวันปัจจุบันหรือไม่
    if (inputDate >= currentDate) {
      // ถ้าเป็นเช่นนั้นให้เรียกฟังก์ชัน handleInputChange เพื่อปรับปรุงข้อมูลตามต้องการ
      handleInputChange(event);
      setSelectedDate(inputDate); // เซ็ตค่าวันที่ใหม่
    } else {
      // ถ้าวันที่เลือกน้อยกว่าวันปัจจุบัน ให้กำหนดค่าให้กับ input เป็นวันปัจจุบัน
      setSelectedDate(currentDate); // เซ็ตค่าวันที่ปัจจุบัน
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
          className="input input-bordered"
          value={selectedDate}
          onChange={handleDateChange}
          key={selectedDate}
        />
      </div>
    </>
  );
};

export default Activiydate;
