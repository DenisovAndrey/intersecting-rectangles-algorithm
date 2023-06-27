import { parseRectanglesJson } from "./jsonRectanglesParser";

describe('parseRectanglesJson', () => {
  test('parses valid JSON with two rectangles', () => {
    const parsedExpectedResult = [
      {
        "topLeftCoordinate": { "x": 2, "y": 2 },
        "bottomRightCoordinate": { "x": 8, "y": 6 }
      },
      {
        "topLeftCoordinate": { "x": 5, "y": 4 },
        "bottomRightCoordinate": { "x": 10, "y": 9 }
      }
    ];
    expect(parseRectanglesJson('./src/mocks/rectangles/intersectingRectangles.json')).toEqual(parsedExpectedResult);
  });

  test('throws an Error for JSON with more than two rectangles', () => {
    expect(() => {
      parseRectanglesJson('./src/mocks/rectangles/wrongRectanglesData.json');
    }).toThrow('Two rectangles are required for intersection check. Exiting program.');
  });
});
