import { Rectangle } from './types/Rectangle';
import { checkOneCoordinateAxisIntersection, checkRectangleIntersection } from './index';

describe('checkOneCoordinateAxisIntersection', () => {
  test('Overlapping range', () => {
    const range1: [number, number] = [2, 8];
    const range2: [number, number] = [5, 10];
    expect(checkOneCoordinateAxisIntersection(range1, range2)).toBe(true);
  });

  test('Non-overlapping range', () => {
    const range1: [number, number] = [2, 8];
    const range2: [number, number] = [10, 15];
    expect(checkOneCoordinateAxisIntersection(range1, range2)).toBe(false);
  });

  test('Adjacent range', () => {
    const range1: [number, number] = [2, 8];
    const range2: [number, number] = [8, 12];
    expect(checkOneCoordinateAxisIntersection(range1, range2)).toBe(true);
  });

  test('Range within another range', () => {
    const range1: [number, number] = [2, 8];
    const range2: [number, number] = [3, 7];
    expect(checkOneCoordinateAxisIntersection(range1, range2)).toBe(true);
  });
});

describe('checkRectangleIntersection', () => {
  test('Intersecting rectangles', () => {
    const rectangles: Rectangle[] = [
      {
        topLeftCoordinate: { x: 2, y: 2 },
        bottomRightCoordinate: { x: 8, y: 6 },
      },
      {
        topLeftCoordinate: { x: 5, y: 4 },
        bottomRightCoordinate: { x: 10, y: 9 },
      },
    ];
    expect(checkRectangleIntersection(rectangles)).toBe(true);
  });

  test('Non-intersecting rectangles', () => {
    const rectangles: Rectangle[] = [
      {
        topLeftCoordinate: { x: 0, y: 0 },
        bottomRightCoordinate: { x: 3, y: 3 },
      },
      {
        topLeftCoordinate: { x: 5, y: 5 },
        bottomRightCoordinate: { x: 8, y: 8 },
      },
    ];
    expect(checkRectangleIntersection(rectangles)).toBe(false);
  });
});


