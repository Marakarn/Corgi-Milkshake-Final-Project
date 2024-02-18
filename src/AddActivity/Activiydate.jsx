import React from "react";
import { useState, useEffect } from "react";

const Activiydate = ({ handleInputChange, setFormData, formData, dateMsg, dateMsgColor }) => {

  const today = new Date().toISOString().split("T")[0];
  // console.log(today)

  useEffect(() => {
    const todayDate = new Date().toISOString().split('T')[0];
    setFormData(prevFormData => ({ ...prevFormData, date: todayDate }));
  }, []);

  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">Date* :</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          min={today}
          value={formData.date}
          className="input input-bordered"
          onChange={handleInputChange}
        />
        <p className={`${dateMsgColor} mt-1`}>{dateMsg}</p>
      </div>
    </>
  );
};

export default Activiydate;
