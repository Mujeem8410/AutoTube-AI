import axios from "axios";
import fs from "fs";
import path from "path";

export const downloadImage = async (url, outputPath) => {

    const response = await axios({

        url,

        method: "GET",

        responseType: "stream"

    });

    await fs.promises.mkdir(path.dirname(outputPath), {
        recursive: true
    });

    const writer = fs.createWriteStream(outputPath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {

        writer.on("finish", () => resolve(outputPath));

        writer.on("error", reject);

    });

};