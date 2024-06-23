import mongoose from "mongoose";

export const connectDB = async () => {
try {
  await mongoose.connect("mongodb+srv://akmilo018:Ls9GOwwDaWYFADkR@restaurante.h6htwum.mongodb.net/menu?retryWrites=true&w=majority&appName=Restaurante");
  console.log(">>>> DB is connected")
} catch (error) {
    console.log(error)
}};
