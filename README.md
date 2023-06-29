# Intersecting Rectangles

This script check if two rectangles are intersecting with each other. (test task)

## Available Scripts

In the project directory, you can run:

### `npm run start:dev <path/to/jsonWithRectanglesDara>`

Runs the script in the development mode.
You need to have npx installed on your PC to run the project via this script

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run start <path/to/jsonWithRectanglesDara>`

Runs the script in the prod mode.
Can be ran only after the project is built

### `npm run test`

Launches the test runner via Jest.


### `npm run lint`

Launches ES linter.

### Description

---

## Task description
You have a JSON that contains the coordinates of two rectangles. 
Using the JSON as input, you should determine whether any specified rectangles intersect or not.

## Task solution
This service parses JSON with Rectangles coordinates, does a minimum validation and 
builds straight lines for both coordinate axes for two triangles and checks if there are intersections for all axes.

### Author comment

The implementation can be extended via possibility to handle more than 2 rectangles.
It can be done by using two nested loops with coordinates. 
But it's considered as a logic which is out of the current task scope.

Also, some additional json checks can be done, e.g. if the figure can even exist via data we have, 
but again it's out if the scope of current task.
