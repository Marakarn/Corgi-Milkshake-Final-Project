import React from "react";
import axios from "axios";

const Editinputimg = ({setFormData}) => {

  const handleInputChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("actImage", file);

    try {
      const response = await axios.post(
        // "https://greensculpt.onrender.com/api/upload"
        "http://localhost:3000/api/upload"
      , formData, 
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const imagePath = `https://jsd6greensculpt.s3.ap-southeast-1.amazonaws.com/${response.data.originalname}`;
        setFormData((prevData) => ({
          ...prevData,
          editActImage: imagePath,
        }));
        alert('Successfully upload image');
      }
    } catch (error) {
      alert('Error uploading image');
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">Image :</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-x"
          id="editActImage"
          accept=".jpg, .png, .jpeg"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Editinputimg;
