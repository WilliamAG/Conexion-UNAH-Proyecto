const { request } = require('express')
const { v2 } = require('cloudinary')
const cloudinary = v2

cloudinary.config({
    cloud_name: 'dwze7fq4u',
    api_key: '727758864851128',
    api_secret: 'FFe7eb8gy6uieFvE853ZxhQExts',
})

const saveImg = async (req = request) => {
    const pathImg = req.file.path
    const originalName = req.file.originalname

    try {
        const result = await cloudinary.uploader.upload(pathImg)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { saveImg }
