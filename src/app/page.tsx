import GameBoard from "@/components/game-board/game-board";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold px-5">Welcome to Word Finder</h1>
      <p className="mt-4 text-lg">
        Complete the game by finding all the words!
      </p>
      <GameBoard />
    </div>
  );
}
