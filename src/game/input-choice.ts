import { menu, Menu } from "../lib/menu";
import { Direction, Player, Labirint } from "./types";
import { getAvailableChoices, PlayerDirection, getAvailableDirections } from "./choise-to-direction";

export const inputChoice = (player: Player, labirint: Labirint) => {
  const locationMenu: Menu<Direction | null> = {};
  const currentCell = labirint[player.position.row][player.position.col];

  const availableDirections = getAvailableDirections(player, currentCell); // done
  
  const availableChoices = getAvailableChoices(player.lookDirection, availableDirections);
  
  if (PlayerDirection.forward in availableChoices) {
    locationMenu['Пойти вперед'] = () => availableChoices[PlayerDirection.forward];
  }
  if (PlayerDirection.right in availableChoices) {
    locationMenu['Пойти вправо'] = () => availableChoices[PlayerDirection.right];
  }
  if (PlayerDirection.left in availableChoices) {
    locationMenu['Пойти влево'] = () => availableChoices[PlayerDirection.left];
  }
  if (PlayerDirection.backward in availableChoices) {
    locationMenu['Пойти назад'] = () => availableChoices[PlayerDirection.backward];
  }
  locationMenu['Выйти в главное меню'] = () => null;

  // TEST
  //const playerChoice = choiceToDirection(player.lookDirection, PlayerDirection.forward); // menu(locationMenu);
  const playerChoice = menu(locationMenu);

  return playerChoice;
};