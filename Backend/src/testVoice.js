import {generateSceneVoice} from "./agents/voiceAgent.js";

const scene={

voice:"छोटा डिनो खुशी-खुशी जंगल में चल रहा था।"

};

const audio=await generateSceneVoice(scene);

console.log(audio);