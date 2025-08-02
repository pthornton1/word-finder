import Tile from "@/components/game-board/tile/tile";

const words = ["apple", "score", "marry", "toned", "loved"];

export default function GameBoard() {
  return (
    <div className="p-4">
      {words.map((word, index) => (
        <div key={index} className="flex space-x-4 mb-4">
          {word.split("").map((letter, letterIndex) => (
            <Tile key={letterIndex} letter={letter} completed={false} />
          ))}
        </div>
      ))}
    </div>
  );
}
