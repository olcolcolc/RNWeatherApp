import { screenWidth } from "../../utils/screenDimensions";

export const baseSize = screenWidth / 370;

// Define rem function
export const rem = (size: number) => baseSize * size;
