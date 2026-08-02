import { generateStory } from "./agents/storyAgent.js";

const story = await generateStory("Helping Others");

console.log(story);