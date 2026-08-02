import dotenv from "dotenv";
import mongoose from "mongoose";

import {getCharacter} from "./services/characterService.js";

import {buildPrompt} from "./utils/promptBuilder.js";

import {generateSceneImage} from "./agents/imageAgent.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

const character = await getCharacter("Baby Dino");

const scene={

text:"Baby Dino happily walking through colorful forest."

};

const prompt=buildPrompt(character,scene);

const image=await generateSceneImage(prompt);

console.log(image);

process.exit();