import { Product } from "../models/product.model.js";
import { uploadOnCloudinary } from "../config/cloudinary.js";


const uploadProduct = async (req, res) => {
  const { title, description, price } = req.body;

  // Extract local file path
  const imageLocalPath = req.file?.path;

  if (!imageLocalPath) {
    return res.status(400).json({ message: "Image file is missing." });
  }

  try {
    // Upload image to Cloudinary
    const img = await uploadOnCloudinary(imageLocalPath);
    console.log("Cloudinary Upload Response:", img);

    // Validate Cloudinary upload response
    if (!img || !img.url) {
      return res.status(500).json({ message: "Failed to upload image to Cloudinary." });
    }

    // Save product to MongoDB
    const newProduct = new Product({
      title,
      description,
      price,
      img: img.url,
    });

    await newProduct.save();

    return res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error("Error saving product:", error);
    return res.status(500).json({ message: "Product creation failed", error: error.message });
  }
};

const getProducts = async (req, res) =>{
    try{
        const products = await Product.find(); 
        return res.status(200).json(products); 
    }
    catch(error){
        console.error("Error fetching products: ", error);
        return res.status(500).json(
            {
                message:"Failed to fetch products", error:error.message
            }
        )
    }
}

export { uploadProduct, getProducts };
