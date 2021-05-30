import { Player, Labirint, Direction, Cell, Position } from "./types";
import { isNumber } from "util";
import { formLocationMessage } from "./form-location-message";

// > 3 шагов = длинный коридор
// <= 2 шагов = несколько шагов
// повороты
// развилка/тупик
// двери
// ключи
// развилка, информация: тупик, ключ, дверь

export const cellDirections = (cell: Cell) => (
  Object.keys(cell.directions)
    .map(key => Number(key) as Direction)
);


// если тупик
// если развилка
// событие: дверь, ключ, выход

const haveDoor = (cell: Cell) => {
  const directions = cellDirections(cell);
  if(directions.some(direction => isNumber(cell.directions[direction]))) {
    return true
  }
  return false;
}

const hasCome = (player: Player, cell: Cell): boolean => {
  const position = player.position;
  const directions = cellDirections(cell);

  const haveKey = () => (
    !!cell.keys && 
    !haveCoincidence(cell.keys, player.keys)
  );
  const haveExit = () => (
    position.row === 4 && position.col === 1 || 
    position.row === 4 && position.col === 0
  );
  const haveFork = () => (
    directions.filter(
      direction => cell.directions[direction] === true
    )
    .length !== 2
  );

  return haveFork() || haveKey() || haveDoor(cell) || haveExit(); 
};

const haveCoincidence = (array1: Array<any>, array2: Array<any>) => {
  return array1.some(object1 => array2.some(object2 => object1 === object2));
}

const pickUpKey = (cell: Cell, player: Player): boolean => {
  if(!!cell.keys && !haveCoincidence(cell.keys, player.keys)) {
    const filteredKeys = cell.keys
      .filter(cellKey => player.keys.every(playerKey => playerKey !== cellKey));

    filteredKeys.forEach(key => player.keys.push(key));
    console.log('keys: ', player.keys);
    return true;
  }
  return false;
}

export const getLockedDoorsKeys = (cell: Cell) => {
  const directions = cellDirections(cell);

  return directions
  .filter(direction => isNumber(cell.directions[direction]))
  .map(direction => cell.directions[direction]);;
}

// TODO: canOpenDoor
const canOpenDoors = (cell: Cell, player: Player): boolean => {
  const lockedDoorsKeys = getLockedDoorsKeys(cell);

  if(haveDoor(cell) && haveCoincidence(player.keys, lockedDoorsKeys)) {
    return true;
  }
  return false;
}

const newPosition = (playerPosition: Position, playerChoice: Direction): Position => {
  switch (playerChoice) {
    case Direction.up:
      return {
        row: playerPosition.row - 1,
        col: playerPosition.col,
      };
    case Direction.down:
      return {
        row: playerPosition.row + 1,
        col: playerPosition.col,
      };
    case Direction.left:
      return {
        row: playerPosition.row,
        col: playerPosition.col - 1,
      };
    case Direction.right:
      return {
        row: playerPosition.row,
        col: playerPosition.col + 1,
      };
  }
}


const invertDirection: Record<Direction, Direction> = {
  [Direction.up]: Direction.down,
  [Direction.down]: Direction.up,
  [Direction.left]: Direction.right,
  [Direction.right]: Direction.left,
};

const getNextDirection = (cell: Cell, lastDirection: Direction): Direction => {
  const invertedDirection = invertDirection[lastDirection];

  const directionsArray = cellDirections(cell);

  const availableDirections = directionsArray.filter(direction => (
    cell.directions[direction] === true &&
    direction !== invertedDirection
  ));

  return availableDirections[0];
};

export const move = (player: Player, labirint: Labirint, playerChoice: Direction) => {
  const route: Direction[] = [];
  const startLookDirection = player.lookDirection;

  let cell = labirint[player.position.row][player.position.col];
  let lastDirection = playerChoice;
  let nextDirection = playerChoice;

  do {
    route.push(nextDirection);
    player.position = newPosition(player.position, nextDirection);
    player.lookDirection = nextDirection;
    cell = labirint[player.position.row][player.position.col];
    lastDirection = nextDirection;
    nextDirection = getNextDirection(cell, lastDirection);
    console.log('row: ', player.position.row, '\ncol: ', player.position.col);
  } while (!hasCome(player, cell));
  console.log('lookDirection: ', player.lookDirection);
  player.locationMessage = formLocationMessage(
    {
      hasPickedUpKey: pickUpKey(cell, player),
      haveDoor: haveDoor(cell),
      canOpenDoor: canOpenDoors(cell, player),
      startLookDirection,
      route,
    },
    player,
    cell
  );
  console.log(player.locationMessage);
};

