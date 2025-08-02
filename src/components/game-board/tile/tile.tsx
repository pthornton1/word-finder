export default function Tile({
  letter,
  completed,
  selected,
  onTileSelect,
  position,
}: {
  letter: string;
  completed: boolean;
  position: { x: number; y: number };
  onTileSelect: (tile: { x: number; y: number }) => void;
  selected: boolean;
}) {
  const handleTileClick = () => {
    onTileSelect(position);
  };

  if (!completed)
    return (
      <button
        onClick={() => handleTileClick()}
        className={`ring-2 rounded-lg p-6 flex items-center justify-center ${
          selected ? "bg-green-300" : "bg-gray-200"
        } transition-colors duration-300 hover:bg-blue-200 focus:outline-none hover:cursor-pointer`}
      >
        <span className="text-lg font-bold">{letter.toUpperCase()}</span>
      </button>
    );
  return (
    <button
      className={`ring-2 rounded-lg p-6 flex items-center justify-center hover:cursor-disabled bg-green-500`}
    >
      <span className="text-lg font-bold">{letter.toUpperCase()}</span>
    </button>
  );
}
