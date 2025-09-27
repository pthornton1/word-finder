import { tile } from "./types";

const solutionArray = [
  [
    { x: 0, y: 0 }, // a
    { x: 0, y: 1 }, // p
    { x: 0, y: 2 }, // p
    { x: 0, y: 3 }, // l
    { x: 0, y: 4 }, // e
  ],
  [
    { x: 1, y: 0 }, // s
    { x: 1, y: 1 }, // c
    { x: 1, y: 2 }, // o
    { x: 1, y: 3 }, // r
    { x: 1, y: 4 }, // e
  ],
  [
    { x: 2, y: 0 }, // m
    { x: 2, y: 1 }, // a
    { x: 2, y: 2 }, // r
    { x: 2, y: 3 }, // r
    { x: 2, y: 4 }, // y
  ],
  [
    { x: 3, y: 0 }, // t
    { x: 3, y: 1 }, // o
    { x: 3, y: 2 }, // n
    { x: 3, y: 3 }, // e
    { x: 3, y: 4 }, // d
  ],
  [
    { x: 4, y: 0 }, // l
    { x: 4, y: 1 }, // o
    { x: 4, y: 2 }, // v
    { x: 4, y: 3 }, // e
    { x: 4, y: 4 }, // d
  ],
];

export function isGameFinished(selectedTiles: tile[]): boolean {
  if (selectedTiles.length !== 5) return false;

  return solutionArray.some(
    (solution) =>
      solution.length === selectedTiles.length &&
      selectedTiles.every((tile) =>
        solution.some(
          (solutionTile) =>
            solutionTile.x === tile.x && solutionTile.y === tile.y
        )
      )
  );
}
