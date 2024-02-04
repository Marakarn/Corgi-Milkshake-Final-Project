// import React from 'react'
import Layout from "../components/Layout";
import ModalAddActivity from "../components/ModalAddActivity";
import Daisytop from "../components/Daisytop";
import Activityname from "./Activityname";
import Activitydescription from "./Activitydescription";
import Activitiestypes from "./Activitiestypes";
import Activityduration from "./Activityduration";
import Activiydate from "./Activiydate";
import Activityimage from "./Activityimage";

const AddActivity = () => {

  const [name,  setName]  = useState("")

  const createData = async (name) => {
    const requestData = {
      activityName: name,
      activityDescription: "",
      activityType: "",
      activityDuration: "",
      activityDate: "",
      activityImage: "",
    
    };

    const response = await axios.post(
      "https://greensculpt.onrender.com/add-activity",
      requestData
    );

    if (response.status === 200) {
      alert("Data successfully sent to the backend!");
      // ทำอย่างอื่นต่อ เช่น redirect หน้า, แสดงข้อความ, ฯลฯ
  } else {
      alert("Failed to send data to the backend.");
  }

  };

  return (
    <>
      <Layout>
        <div className="">
          <div className="flex flex-col justify-center min-h-[1080px] md:min-h-[800px]">
            <Daisytop text="Add Activity" path="/home" />
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <form className="card-body">
                  <Activityname setName = {setName}/>
                  <Activitydescription />
                  <Activitiestypes />
                </form>
              </div>

              <div className="w-full md:w-1/2">
                <form className="p-[32px] pt-0 md:pt-[32px]">
                  <Activityduration />
                  <Activiydate />
                  <Activityimage />
                </form>
              </div>
            </div>
            <ModalAddActivity getSave = {createData} name={name}/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddActivity;
