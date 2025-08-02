"use client";

import Tile from "@/components/game-board/tile/tile";
import { useState } from "react";

const words = ["apple", "score", "marry", "toned", "loved"];
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
const totalWords = 5; // Total number of words to find

type tilesType = {
  x: number;
  y: number;
};

const checkIfCompleted = (selectedTiles: tilesType[]) => {
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
};

export default function GameBoard() {
  const [selectedTiles, setSelectedTiles] = useState<tilesType[]>([]);
  const [completedTiles, setCompletedTiles] = useState<tilesType[]>([]);
  const [foundWords, setFoundWords] = useState<number>(0);

  const onTileSelect = ({ x, y }: { x: number; y: number }) => {
    const currentSelection = [...selectedTiles];
    if (currentSelection.some((tile) => tile.x === x && tile.y === y)) {
      const index = currentSelection.findIndex(
        (tile) => tile.x === x && tile.y === y
      );
      currentSelection.splice(index, 1);
    } else {
      currentSelection.push({ x, y });
    }
    setSelectedTiles(currentSelection);
    if (checkIfCompleted(currentSelection)) {
      setSelectedTiles([]);
      setCompletedTiles([...currentSelection, ...completedTiles]);
      setFoundWords(foundWords + 1);
      if (foundWords + 1 === totalWords) {
        alert("All words found! Great job!");
      }
    }
  };

  return (
    <div className="p-4">
      {words.map((word, index) => (
        <div key={index} className="flex space-x-4 mb-4">
          {word.split("").map((letter, letterIndex) => (
            <Tile
              key={letterIndex}
              letter={letter}
              completed={completedTiles.some(
                (tile) => tile.x === index && tile.y === letterIndex
              )}
              selected={selectedTiles.some(
                (tile) => tile.x === index && tile.y === letterIndex
              )}
              position={{ x: index, y: letterIndex }}
              onTileSelect={onTileSelect}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
