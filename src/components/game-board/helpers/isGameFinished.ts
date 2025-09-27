import { tile } from "./types";

export function isGameFinished(
  selectedTiles: tile[],
  solutionArray: tile[][]
): boolean {
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
