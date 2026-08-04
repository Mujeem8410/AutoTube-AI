import fs from "fs";
import path from "path";

export const saveStory = async (story, workspace) => {

    const file = path.join(workspace.basePath, "story.json");

    await fs.promises.writeFile(
        file,
        JSON.stringify(story, null, 2)
    );

};