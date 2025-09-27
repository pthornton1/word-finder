import { tile } from "./types";

export function isTileSelectable(
  selectedTiles: tile[],
  x: number,
  y: number
): boolean {
  if (selectedTiles.some((tile) => tile.x === x && tile.y === y)) {
    return true;
  }

  if (selectedTiles.length === 0) return true;

  const firstTile = selectedTiles[0];
  if (selectedTiles.length === 1) {
    return Math.abs(firstTile.x - x) <= 1 && Math.abs(firstTile.y - y) <= 1;
  }

  const lastTile = selectedTiles[selectedTiles.length - 1];
  const secondLastTile = selectedTiles[selectedTiles.length - 2];

  const dx = lastTile.x - secondLastTile.x;
  const dy = lastTile.y - secondLastTile.y;

  return (
    (lastTile.x + dx === x && lastTile.y + dy === y) ||
    (firstTile.x - dx === x && firstTile.y - dy === y)
  );
}
