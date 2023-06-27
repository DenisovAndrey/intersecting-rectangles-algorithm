interface Coordinate {
  x: number;
  y: number;
}

export interface Rectangle {
  topLeftCoordinate: Coordinate;
  bottomRightCoordinate: Coordinate;
}
