import { Rectangle } from "./types/Rectangle";
import {parseRectanglesJson} from "./helpers/jsonRectanglesParser";

export const checkOneCoordinateAxisIntersection = (
  [firstStart, firstEnd]: [number, number],
  [secondStart, secondEnd]: [number, number]
): boolean => {
  if (firstStart <= secondStart && firstEnd >= secondStart) {
    return true;
  }
  if (secondStart <= firstStart && secondEnd >= firstStart) {
    return true;
  }
  return false;
};

export const checkRectangleIntersection = (rectangles: Rectangle[]): boolean => {
  const [firstRectangle, secondRectangle] = rectangles;

  const firstRectangleXCoordinates: [number, number] = [
    firstRectangle.topLeftCoordinate.x,
    firstRectangle.bottomRightCoordinate.x,
  ];
  const secondRectangleXCoordinates: [number, number] = [
    secondRectangle.topLeftCoordinate.x,
    secondRectangle.bottomRightCoordinate.x,
  ];
  const doesXAxisIntersect = checkOneCoordinateAxisIntersection(firstRectangleXCoordinates, secondRectangleXCoordinates);

  const firstRectangleYCoordinates: [number, number] = [
    firstRectangle.topLeftCoordinate.y,
    firstRectangle.bottomRightCoordinate.y,
  ];
  const secondRectangleYCoordinates: [number, number] = [
    secondRectangle.topLeftCoordinate.y,
    secondRectangle.bottomRightCoordinate.y,
  ];
  const doesYAxisIntersect = checkOneCoordinateAxisIntersection(firstRectangleYCoordinates,secondRectangleYCoordinates);

  return doesXAxisIntersect && doesYAxisIntersect;
};


const filePath = process.argv[2] || './src/mocks/rectangles/intersectingRectangles.json';
const rectangles: Rectangle[] = parseRectanglesJson(filePath);
if (rectangles) {
  console.log('Rectangles intersect:', checkRectangleIntersection(rectangles));
} else {
  console.log('No valid data for rectangles')
}

