import {Rectangle} from "../types/Rectangle";
import {readFileSync} from "fs";

export const parseRectanglesJson = (filePath: string): Rectangle[] => {
  try {
    const rectanglesJson = readFileSync(filePath, 'utf8');
    const rectangles = JSON.parse(rectanglesJson) as Rectangle[];

    if (rectangles.length !== 2) {
      throw new Error('Two rectangles are required for intersection check. Exiting program. Check the data');
    }

    return rectangles;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};
