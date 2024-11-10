import { Address } from "../Models/Address.js";

//add address 
export const addAddress = async (req, res) => {
  let { fullname, address, city, state, country, pincode, phoneNumber } = req.body
  let userId = req.user
  let userAddress = await Address.create({
    userId, fullname, address, city, state, country, pincode, phoneNumber
  });

  res.json({ message: "Address added", userAddress })
}

//get address
export const getAddress = async (req, res) => {
  let address = await Address.find({ userId: req.user }).sort({ createdAt: -1 })
  res.json({ message: "Address", userAddress: address[0] })
}