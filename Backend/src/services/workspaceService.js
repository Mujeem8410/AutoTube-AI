import fs from "fs";
import path from "path";

export const createStoryWorkspace = async () => {

    const storyId = `story_${Date.now()}`;

    const basePath = path.join("uploads", "stories", storyId);

    const folders = [
        "",
        "images",
        "voice",
        "video",
        "thumbnail"
    ];

    for (const folder of folders) {

        await fs.promises.mkdir(
            path.join(basePath, folder),
            { recursive: true }
        );

    }

    return {

        storyId,

        basePath

    };

};