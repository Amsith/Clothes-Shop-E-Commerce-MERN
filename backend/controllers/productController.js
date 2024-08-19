const productModel = require("../Models/productModel")
const multer = require('multer');
const path = require('path')
const fs = require('fs');


// Multer setup ///////////// = images (folder directory)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Error: Images Only! (jpeg, jpg, png, gif)');
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
    fileFilter: fileFilter
});




// Create product
const createProduct = async (req, res) => {

    try {
        const newProduct = new productModel({
            title: req.body.title,
            price: req.body.price,
            discountprice: req.body.discountprice,
            about: req.body.about,
            category: req.body.category,
            image: req.file.path,
        })
        const saveProduct = await newProduct.save()
        res.status(201).json(saveProduct)
    } catch (error) {
        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
        res.status(500).json({ message: error.message })
    }

}

// Get the Products
const getProducts = async (req, res) => {
    try {
        const allProducts = await productModel.find();
        //shuffle product
        const popularInWomen = await productModel.aggregate([
            { $match: { category: "Womens" } },
            { $sample: { size: 5 } }
          ]);
        const latestproducts = await productModel.find().sort({ createdAt: -1 }).limit(10)
        const mensProduct = await productModel.find({category:"Mens"}).sort({createdAt:-1})
        const womensProduct = await productModel.find({category:"Womens"}).sort({createdAt:-1})
        const kidsProduct = await productModel.find({category:"Kids"}).sort({createdAt:-1})


        res.status(200).json({ allProducts,popularInWomen,latestproducts,mensProduct ,kidsProduct, womensProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

//GetbyID product
const getProductId = async (req, res) => {
    try {
        const getbyid = await productModel.findById(req.params.id)
        if (!getbyid) { return res.status(500).json({ message: "Product not found" }) }
        res.status(201).json(getbyid)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

//Put product
const updateProduct = async (req, res) => {
    try {

        const update = await productModel.findById(req.params.id)
        if (!update) { return res.status(500).json({ message: "Product not found" }) }

        // If a new image is uploaded, delete the old image
        // ==  update.image
        if (req.file && update.image) {
            fs.unlink(update.image, (err) => {
                if (err) console.error('Failed to delete old image:', err);
            });
            update.image = req.file.path; // Update image path
        }

        // Update other fields - update.name
        if (req.body.title) update.title = req.body.title;
        if (req.body.price) update.price = req.body.price;
        if (req.body.discountprice) update.discountprice = req.body.discountprice;
        if (req.body.about) update.about = req.body.about;
        if (req.body.category) update.category = req.body.category;

        const updatedProduct = await update.save();
        res.status(200).json(updatedProduct);

    } catch (error) {
        console.log(error)
        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
        res.status(500).json({ message: error.message })
    }
}


//Delete Product

const deleteProduct = async (req,res) =>{
    try {
        const deleteProduct = await productModel.findByIdAndDelete(req.params.id)
        if(!deleteProduct) {return res.status(500).json({message:"Cant able to find the product"})}
        res.status(201).json({message:"Student Deleted Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}




module.exports = { upload, createProduct, getProducts, getProductId,updateProduct,deleteProduct };