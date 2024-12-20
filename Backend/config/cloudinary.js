import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// (async function () {
    // Configuration
    cloudinary.config({
        cloud_name: 'djc3gcjhb',
        api_key:655122329665885,
        api_secret: '6rheWZkNrD5EXDAHL4k75rem8xM', 
    });
// }
// );

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        //file has been uploaded successfully
        // console.log("file uploaded successfully", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally save temporary file as the upload operation got failed
        return null;
    }
};

export { uploadOnCloudinary };
