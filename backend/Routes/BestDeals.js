const express = require('express')
const router = express.Router()
const Items = require("../models/BestDeals") 
var cloudinary = require('cloudinary');
const uploadFile = require('express-fileupload')
cloudinary.config({
    cloud_name: 'biswajit1o1',
    api_key: '474874553212227',
    api_secret: 'hoHOD16UDa_xuBGgxtVI4gJcagY',
    secure: true
});


router.get("/fetchallitems", async (req, res) => {
    const items = await Items.find({});
    res.json({ items })
    
})


// item posting
router.post('/postitems', async(req, res)=>{
    const {discount, price } = req.body;

    try {
        const item = new Items({
            discount, price
        })
        const result = await item.save();
        res.json(result._id)
    } catch (error) {
        // console.error(error.message);store it to mongo
        res.status(500).send("Some error occured");
    }
})

// photoposting
router.post('/postphoto', async(req, res)=>{
    // const {discount, price } = req.body;
    const file = req.body.data;
    console.log(req.body);

    try {
        const uploadedResponse = await cloudinary.uploader.upload(file, {
            upload_preset: 'Best_Deals'
        });
        console.log(uploadedResponse.secure_url);
        res.json('success')
    } catch (error) {
        // console.error(error.message);store it to mongo
        res.status(500).send("Some error occured");
    }
})

export default router