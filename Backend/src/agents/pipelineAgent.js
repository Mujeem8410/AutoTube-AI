import { generateStory } from "./storyAgent.js";
import { generateSceneImage } from "./imageAgent.js";
import { generateSceneVoice } from "./voiceAgent.js";
import { downloadImage } from "../services/imageDownloadService.js";

export const generateVideoPipeline = async (topic) => {

    console.log("🚀 Pipeline Started");

    const story = await generateStory(topic);

    const storyData = JSON.parse(
        story.replace(/```json|```/g, "").trim()
    );

    for (const scene of storyData.scenes) {

        console.log(`Generating Scene ${scene.scene}`);

        const image = await generateSceneImage(scene.imagePrompt);

        const voice = await generateSceneVoice(scene);

        const imagePath = `uploads/story-001/scene-${scene.scene}.png`;

        await downloadImage(image, imagePath);

        console.log(`Saved : ${imagePath}`);

        console.log(voice);

    }

    console.log("✅ Pipeline Finished");

};