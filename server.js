import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express';
import userRouter from './Routes/user.js';
import productRouter from './Routes/product.js';
import cartRouter from './Routes/cart.js';
import addressRouter from './Routes/address.js';
const app = express();

app.use(bodyParser.json())

//home testing route
app.get('/', (req, res) => res.json({ message: "this is home route" }))

//user router
app.use('/api/user', userRouter)

//product router
app.use('/api/product', productRouter)

//cart router
app.use('/api/cart', cartRouter)

//adrees router
app.use('/api/address', addressRouter)

//mongodb connection
mongoose.connect("mongodb+srv://tusharjadhav2134:xCsC7Xuxyk39EAul@cluster0.whaur.mongodb.net/",

  {
    dbName: "Mern-nextgenshop"
  }
).then(() => console.log("MongoDB Connected successfully...")).catch((err) => console.log(err));


//port
const port = 1000;

app.listen(port, () => console.log(`server is running on ${port}`)
)