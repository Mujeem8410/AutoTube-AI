import Character from "../models/Character.js";

export const getCharacter = async (name)=>{

    const character = await Character.findOne({name});

    if(!character){

        throw new Error("Character Not Found");

    }

    return character;

}