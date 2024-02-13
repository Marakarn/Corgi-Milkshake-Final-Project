import React from "react";
import { useState, useEffect } from "react";

const Editdate = ({handleInputChange, setFormData, formData }) => {

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
          value={formData.editDate}
          className="input input-bordered"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Editdate;
