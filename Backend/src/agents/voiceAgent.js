import {generateVoice} from "../providers/ttsProvider.js";

export const generateSceneVoice = async(scene)=>{

    return await generateVoice(scene.voice);

}