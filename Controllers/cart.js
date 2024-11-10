import { Cart } from "../Models/Cart.js";

//add to cart
export const addToCart = async (req, res) => {
  const { productId, title, price, qty, imgSrc } = req.body

  const userId = "672a372d905f594cc5c31a13";

  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }

  const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId)

  if (itemIndex > -1) {
    cart.items[itemIndex].qty += qty;
    cart.items[itemIndex].price += price * qty;
  }
  else {
    cart.items.push({ productId, title, price, qty, imgSrc });
  }

  await cart.save()
  res.json({ message: "Item added to cart", cart })
};

//get user cart
export const userCart = async (req, res) => {
  const userId = "672a372d905f594cc5c31a13";

  let cart = await Cart.findOne({ userId });

  if (!cart) return res.json({ message: "cart not found" })

  res.json({ message: "user cart", cart })
}

//remove product from cart
export const removeProductFromCart = async (req, res) => {
  const productId = req.params.productId;

  const userId = "672a372d905f594cc5c31a13";



  let cart = await Cart.findOne({ userId });

  if (!cart) return res.json({ message: "cart not found" })

  cart.items = cart.items.filter((item) => item.productId.toString() !== productId)

  await cart.save()

  res.json({ message: "product has been removed from cart" })
}

//clearing cart
export const clearCart = async (req, res) => {

  const userId = "672a372d905f594cc5c31a13";

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ items: [] })
  }
  else {
    cart.items = [];
  }

  await cart.save()

  res.json({ message: "cart has been cleared" })
}

//decrease qty from cart
export const decreseProductQty = async (req, res) => {
  const { productId, qty } = req.body

  const userId = "672a372d905f594cc5c31a13";

  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }

  const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId)

  if (itemIndex > -1) {
    const item = cart.items[itemIndex]
    if (item.qty > qty) {
      const pricePerUnit = item.price / item.qty

      item.qty -= qty
      item.price = pricePerUnit * qty
    }
    else {
      cart.items.splice(itemIndex, 1)
    }
  }
  else {
    return res.json({ message: "Invalid product id" })
  }

  await cart.save()
  res.json({ message: "Item qty decreased", cart })
};