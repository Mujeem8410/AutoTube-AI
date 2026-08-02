import dotenv from "dotenv";
import mongoose from "mongoose";

import Character from "./models/Character.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

await Character.create({

    name:"Baby Dino",

    species:"Dinosaur",

    age:"5",

    color:"Green",

    eyes:"Blue",

    clothes:"Yellow T-Shirt",

    shoes:"Red Shoes",

    accessories:["Small Backpack"],

    personality:["Funny","Helpful","Brave"],

    imageStyle:"Pixar 3D"

});

console.log("Character Added");

process.exit();