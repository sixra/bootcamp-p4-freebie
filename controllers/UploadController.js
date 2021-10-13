import cloudinary from "cloudinary"
import fs from "fs"

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

export const uploadController = (req, res) => {
 try {
   const file = req.files.file

   cloudinary.v2.uploader.upload(file.tempFilePath, {
     folder: "brah-avatar", width: 200, height: 200, crop: "fill"
   }, async(error, outcome) => {
     if(error) throw error

     removeTmp(file.tempFilePath)

     res.json({url: outcome.secure_url})
   })

 } catch (error) {
   return res.status(500).json({msg: error.message})
 }
}

const removeTmp = (path) => {
  fs.unlink(path, error => {
    if(error) throw error
  })
}