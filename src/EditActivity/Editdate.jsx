import React from "react";
import { useState, useEffect } from "react";

const Editdate = ({handleInputChange, setFormData, formData, dateMsg, dateMsgColor }) => {

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const todayDate = new Date().toISOString().split('T')[0];
    setFormData(prevFormData => ({ ...prevFormData, editDate: todayDate }));
  }, []);

  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">Date* :</span>
        </label>
        <input
          type="date"
          id="editDate"
          name="editDate"
          min={today}
          value={formData.editDate}
          className="input input-bordered"
          onChange={handleInputChange}
        />
        <p className={`${dateMsgColor} mt-1`}>{dateMsg}</p>
      </div>
    </div>
  );
};

export default Editdate;
