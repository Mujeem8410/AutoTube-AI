import { createStoryWorkspace } from "./services/workspaceService.js";

const workspace = await createStoryWorkspace();

console.log(workspace);