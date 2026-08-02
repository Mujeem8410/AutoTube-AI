import ai from "../config/gemini.js";

export const generateStory = async (topic) => {
    const prompt = `
You are a professional YouTube Shorts writer.

Create a JSON response only.

Rules:

Language: Hindi

Audience: Kids (5-10 years)

Duration: 30 Seconds

Total Scenes: 8

Character: Baby Dino

Topic: ${topic}

Return ONLY JSON.

Example Format:

{
"title":"",
"description":"",
"moral":"",
"characters":[],
"scenes":[
{
"scene":1,
"text":"",
 "voice": "",
"imagePrompt":"",
"duration": 4
}
]
}
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text;
};