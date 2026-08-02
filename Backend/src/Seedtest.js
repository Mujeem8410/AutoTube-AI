import dotenv from "dotenv";
import mongoose from "mongoose";

import { getCharacter } from "./services/characterService.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

const character = await getCharacter("Baby Dino");

console.log(character);