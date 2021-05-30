import { Player, Labirint, Cell, Position } from "./types";
import { menu, Menu } from "../lib/menu";
import { Direction } from "./types";
import { writePlayers } from "../helpers/write-player";
import { isUndefined, isNumber } from "util";
import { move } from "./move";
import { inputChoice } from "./input-choice";
import { defaultLabirint } from "../config/labirint";
import { findStartOrFinishPosition } from "../helpers/find-positions";

/*
начинаем игру (цикл локация)
    пишем текст, описывающий происходящее
    спрашиваем игрока, что сделать
    в зависимости от ответа переходим на новую локацию
    при переходе на новую локацию сохранять текущий прогресс
когда игрок выходит из лабиринта, игра заканчивается
    если вышел в начале, то он проигрывает
    если вышел в конце, то он выигрывает
*/

// если останавливается перед дверью, то выводить(ты перед дверью)(done)
// если подобрал ключ(ты подобрал ключ) и положить ему ключ (done)
// дверь в каком направлении, и есть ли ключ у тебя(почти done)

// проерка выиграл ли
const playerWin = (player: Player, finishPosition: Position): boolean => {
    if(player.position.row === finishPosition.row && player.position.col === finishPosition.col) {
        return true;
    }
    return false;
}

// проверка проиграл ли 
const playerLose = (player: Player, startPosition: Position): boolean => {
    if(player.position.row === startPosition.row && player.position.col === startPosition.col) {
        return true;
    }
    return false;
}

export const game = (playerName: string, players: Player[], labirint: Labirint): void => {

    // достаем игрока из массива по его имени
    const playerID = players.map(player => player.name).indexOf(playerName);
    const player = players[playerID];
    const start = findStartOrFinishPosition(labirint);
    const finish = findStartOrFinishPosition(labirint, true);

    if(!start || !finish) {
        return;
    }

    console.log(player.locationMessage);

    while (true) {
        const playerChoice: Direction | null = inputChoice(player, labirint);

        if(playerChoice === null) {
            return;
        }

        if(playerWin(player, finish)) {
            console.log('////////// Y O U    W I N //////////\n');
            player.position.col = 0;
            return;
        }

        move(player, labirint, playerChoice);

        // save location
        writePlayers(players);
    }
};
