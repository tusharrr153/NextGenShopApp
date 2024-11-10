import { Products } from "../Models/Product.js";

// add product
export const addProduct = async (req, res) => {
  const { title, description, price, category, qty, imgSrc } = req.body
  try {
    let product = await Products.create({
      title,
      description,
      price,
      category,
      qty,
      imgSrc,
    });
    res.json({ message: 'Product added successfully...!', product })

  } catch (error) {
    res.json(error.message)
  }
}




