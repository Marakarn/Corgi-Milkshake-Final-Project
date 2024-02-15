import AWS from 'aws-sdk';
import dotenv from "dotenv";


dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const bucketName = 'jsd6greensculpt';
const fileName = 'images/my-image.jpg'; // แทนที่ด้วยชื่อไฟล์ที่อัปโหลดแล้ว
const region = 'ap-southeast-1'; // แทนที่ด้วยรหัสภูมิภาคของ AWS region
const imageURL = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;

const uploadToS3 = async (file) => {
  const params = {
    Bucket: 'jsd6greensculpt',
    Key: 'YOUR_FILE_KEY', // เช่น images/my-image.jpg
    Body: file.data,
    ContentType: file.mimetype,
    ACL: 'public-read' // ถ้าคุณต้องการให้ไฟล์สามารถเข้าถึงได้โดยไม่ต้องรับรองตัวตน
  };

  try {
    const data = await s3.upload(params).promise();
    console.log('Upload successful:', data.Location);
    return data.Location; // นี่คือ URL ของไฟล์ที่อัปโหลด
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

export default s3;
