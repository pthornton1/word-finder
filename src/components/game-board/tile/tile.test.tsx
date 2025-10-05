import { render, screen } from "@testing-library/react";
import Tile from "./tile";

const mockProps = {
  letter: "a",
  completed: false,
  selected: false,
  position: { x: 0, y: 0 },
  onTileSelect: jest.fn(),
  selectable: true,
};

describe("Tile component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the tile correctly when not completed", () => {
    render(<Tile {...mockProps} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("A");
    expect(button).toHaveClass("bg-gray-200");
  });

  it("should render the tile correctly when selected", () => {
    render(<Tile {...mockProps} selected={true} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-green-300");
  });

  it("should render the tile correctly when completed", () => {
    render(<Tile {...mockProps} completed={true} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-green-500");
  });

  it("should call onTileSelect when clicked and selectable", () => {
    render(<Tile {...mockProps} />);
    const button = screen.getByRole("button");
    button.click();
    expect(mockProps.onTileSelect).toHaveBeenCalledWith({ x: 0, y: 0 });
  });

  it("should not call onTileSelect when clicked and not selectable", () => {
    const testProps = { ...mockProps, selectable: false };
    render(<Tile {...testProps} />);
    const button = screen.getByRole("button");
    button.click();
    expect(testProps.onTileSelect).not.toHaveBeenCalled();
  });
});
