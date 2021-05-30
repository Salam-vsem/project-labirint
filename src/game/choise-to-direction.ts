import { Direction, Cell, Player } from "./types";
import { clearLine } from "readline";

export enum PlayerDirection {
  left,
  right,
  forward,
  backward,
}


export type Choice = Record<Direction, PlayerDirection>;

export const lookUp: Choice = {
  [Direction.up]: PlayerDirection.forward,
  [Direction.right]: PlayerDirection.right,
  [Direction.down]: PlayerDirection.backward,
  [Direction.left]: PlayerDirection.left,
};

export const lookRight: Choice = {
  [Direction.up]: PlayerDirection.left,
  [Direction.right]: PlayerDirection.forward,
  [Direction.down]: PlayerDirection.right,
  [Direction.left]: PlayerDirection.backward,
};

export const lookDown: Choice = {
  [Direction.up]: PlayerDirection.backward,
  [Direction.right]: PlayerDirection.left,
  [Direction.down]: PlayerDirection.forward,
  [Direction.left]: PlayerDirection.right,
};

export const lookLeft: Choice = {
  [Direction.up]: PlayerDirection.right,
  [Direction.right]: PlayerDirection.backward,
  [Direction.down]: PlayerDirection.left,
  [Direction.left]: PlayerDirection.forward,
};

export const lookDirectionToChoice: Record<Direction, Choice> = {
  [Direction.up]: lookUp,
  [Direction.right]: lookRight,
  [Direction.down]: lookDown,
  [Direction.left]: lookLeft,
};

export const getAvailableDirections = (player: Player, currentCell: Cell): Direction[] => {

  const availableDirections = Object
    .keys(currentCell.directions)
    .map(key => Number(key) as Direction)
    .filter(direction => currentCell.directions[direction] === true || player.keys.some(key => key === currentCell.directions[direction]));

    return availableDirections;
  
}

export const getAvailableChoices = (
  lookDirection: Direction,
  availableDirections: Direction[]
): Record<PlayerDirection, Direction> => {
  return availableDirections.reduce(
    (choices, direction) => {
      const choice = lookDirectionToChoice[lookDirection][direction];

      choices[choice] = direction;
      
      return choices;
    },
    {} as Record<PlayerDirection, Direction>
  );
};