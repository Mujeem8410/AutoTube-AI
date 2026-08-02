export const buildPrompt = (character, scene) => {

    return `
Create a high quality 3D Pixar style cartoon image.

Character Details

Name : ${character.name}

Species : ${character.species}

Age : ${character.age}

Color : ${character.color}

Eyes : ${character.eyes}

Clothes : ${character.clothes}

Shoes : ${character.shoes}

Accessories : ${character.accessories.join(", ")}

Personality : ${character.personality.join(", ")}

Image Style : ${character.imageStyle}

Scene

${scene.text}

Rules

- Keep character exactly same.
- Same clothes.
- Same face.
- Same colors.
- Bright lighting.
- Cute kids animation.
- Ultra detailed.
- 16:9 composition.
`;
};