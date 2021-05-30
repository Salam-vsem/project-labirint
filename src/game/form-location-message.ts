import { Player, Direction, Cell } from "./types";
import { lookDirectionToChoice, PlayerDirection } from "./choise-to-direction";
import { cellDirections, getLockedDoorsKeys } from "./move";
import { isNumber } from "util";

type Route = Direction[];

type ChoiceNames = Record<PlayerDirection, string>;

type ChoiceDirections = Record<PlayerDirection, string>;

const choiceMove = (canMove: boolean) => canMove? 'Можно пройти': 'Нельзя пройти';

const choiceDirections: ChoiceDirections = {
  [PlayerDirection.forward]: 'спереди',
  [PlayerDirection.right]: 'справа',
  [PlayerDirection.backward]: 'сзади',
  [PlayerDirection.left]: 'слева',
}

const choiceNames: ChoiceNames = {
  [PlayerDirection.forward]: 'прошел вперед',
  [PlayerDirection.right]: 'свернул направо',
  [PlayerDirection.backward]: 'повернул назад',
  [PlayerDirection.left]: 'свернул налево',
}

const getRouteMessage = (startLookDirection: Direction, route: Route): string => {
  let lookDirection = startLookDirection; 
  let routeText = 'Ты : ';

  for(const direction of route) {
    const step = lookDirectionToChoice[lookDirection][direction];
    lookDirection = direction;
    routeText += choiceNames[step] + ' ';
  }

  routeText += '\n----------\n';
  return routeText;
};

const getClosedDoorsInfoMessage = (haveDoor: boolean, cell: Cell, player: Player, lookDirection: Direction): string => {
  if(haveDoor) {
    const directions = cellDirections(cell);
    const lockedDoorsDirections = directions.filter(direction => isNumber(cell.directions[direction]));
    const lockedDoorsKeys = getLockedDoorsKeys(cell);

    let doorsInfo = '';

    for(let i = 0; i < lockedDoorsDirections.length; i++) {
      const direction = lockedDoorsDirections[i];
      const doorDirectionByPlayerView = lookDirectionToChoice[lookDirection][direction];
      const canMove = player.keys.some(key => key === lockedDoorsKeys[i]);
      
      doorsInfo +=
        '  Закрытая дверь находится ' + choiceDirections[doorDirectionByPlayerView] + '\n' +
        '  ' + choiceMove(canMove) + '\n\n';
    }

    return doorsInfo;
  }
  
  return '';
}

export interface FormLocationProps {
  hasPickedUpKey: boolean;
  haveDoor: boolean;
  canOpenDoor: boolean;
  startLookDirection: Direction;
  route: Route;
}

export const formLocationMessage = (
  props: FormLocationProps,
  player: Player,
  cell: Cell
) => {

let locationMessage = '';

  const {
    hasPickedUpKey,
    haveDoor,
    canOpenDoor,
    startLookDirection,
    route,
  } = props;

  locationMessage += getRouteMessage(startLookDirection, route);

  if(hasPickedUpKey) {
    locationMessage += '  Вы остановились и подобрали ключ!!!\n  ----------\n';
  }

  if(!canOpenDoor && haveDoor) {
    locationMessage += '  Ты перед закрытой дверью. Ты не можешь открыть эту дверь\n  ----------\n';
  }
  else if(canOpenDoor) {
    locationMessage += '  Ты перед закрытой дверью. Ты можешь открыть эту дверь\n ----------\n';
  }

  locationMessage += getClosedDoorsInfoMessage(haveDoor, cell, player, player.lookDirection);

  return locationMessage;
}