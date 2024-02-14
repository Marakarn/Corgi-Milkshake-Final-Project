import React from "react";
import { useState, useEffect } from "react";

const Activiydate = ({ handleInputChange, setFormData, formData }) => {

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
          value={formData.date}
          className="input input-bordered"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default Activiydate;
