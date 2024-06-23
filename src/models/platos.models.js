import mongoose from "mongoose";

const platoSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  nameProduct: {
    type: String,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
  },
  desc: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

const modelo = mongoose.model("platos", platoSchema);
export default modelo 

