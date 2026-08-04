import { generateStory } from "./storyAgent.js";
import { generateSceneImage } from "./imageAgent.js";
import { generateSceneVoice } from "./voiceAgent.js";

import { downloadImage } from "../services/imageDownloadService.js";
import { createStoryWorkspace } from "../services/workspaceService.js";
import { saveStory } from "../services/storyService.js";

export const generateVideoPipeline = async (topic) => {

    try {

        console.log("🚀 Pipeline Started");

        // 1. Create Workspace
        const workspace = await createStoryWorkspace();

        console.log(`📂 Workspace Created : ${workspace.storyId}`);

        // 2. Generate Story
        const story = await generateStory(topic);

        const storyData = JSON.parse(
            story.replace(/```json|```/g, "").trim()
        );

        // 3. Save Story
        await saveStory(storyData, workspace);

        console.log("📄 Story Saved");

        // 4. Generate Assets
        for (const scene of storyData.scenes) {

            console.log(`\n🎬 Scene ${scene.scene}`);

            // Image URL
            const imageUrl = await generateSceneImage(scene.imagePrompt);

            // Voice (Currently Fake Provider)
            const voice = await generateSceneVoice(scene);

            // Save Image
            const imagePath = `${workspace.basePath}/images/scene-${scene.scene}.png`;

            await downloadImage(imageUrl, imagePath);

            console.log(`✅ Image Saved : ${imagePath}`);

            console.log("🎤 Voice :", voice);

        }

        console.log("\n🎉 Pipeline Finished Successfully");

        return workspace;

    } catch (error) {

        console.error("❌ Pipeline Error");

        console.error(error);

    }

};