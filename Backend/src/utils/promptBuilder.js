export const buildPrompt = (character, scene) => {

    return `

Character Name:
${character.name}

Species:
${character.species}

Age:
${character.age}

Appearance:

${character.color}

${character.eyes}

${character.clothes}

${character.shoes}

Accessories:
${character.accessories.join(",")}

Personality:
${character.personality.join(",")}

Image Style:

${character.imageStyle}

Scene:

${scene.text}

Extra Instruction:

Keep the character design EXACTLY SAME as previous scenes.

Ultra detailed.

Pixar Style.

3D Cartoon.

High Quality.

`;

}