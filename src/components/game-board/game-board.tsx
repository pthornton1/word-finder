"use client";

import Tile from "@/components/game-board/tile/tile";
import { isGameFinished } from "./helpers/isGameFinished";
import { isTileSelectable } from "./helpers/isTileSelectable";
import { tile } from "./helpers/types";
import { useEffect, useState } from "react";

const words = ["apple", "score", "marry", "toned", "loved"];
const totalWords = 5; // Total number of words to find

export default function GameBoard() {
  const [selectedTiles, setSelectedTiles] = useState<tile[]>([]);
  const [completedTiles, setCompletedTiles] = useState<tile[]>([]);
  const [foundWords, setFoundWords] = useState<number>(0);
  const [solutionArray, setSolutionArray] = useState<tile[][]>([]);

  useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then(({ solutionArray }) => {
        setSolutionArray(solutionArray);
      })
      .catch((err) => console.error("Error fetching solution array:", err));
  }, []);

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
    if (isGameFinished(currentSelection, solutionArray)) {
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
              selectable={isTileSelectable(selectedTiles, index, letterIndex)}
              onTileSelect={onTileSelect}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
