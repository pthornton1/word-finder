"use client";
import { useState } from "react";

export default function Tile({
  letter,
  completed = false,
}: {
  letter: string;
  completed: boolean;
}) {
  const [isSelected, setIsSelected] = useState(false);
  if (!completed)
    return (
      <button
        onClick={() => setIsSelected(!isSelected)}
        className={`ring-2 rounded-lg p-6 flex items-center justify-center ${
          isSelected ? "bg-green-300" : "bg-gray-200"
        } transition-colors duration-300 hover:bg-blue-200 focus:outline-none hover:cursor-pointer`}
      >
        <span className="text-lg font-bold">{letter.toUpperCase()}</span>
      </button>
    );
  <button
    onClick={() => setIsSelected(!isSelected)}
    className={`ring-2 rounded-lg p-6 flex items-center justify-center hover:cursor-disabled`}
  >
    <span className="text-lg font-bold">{letter.toUpperCase()}</span>
  </button>;
}
