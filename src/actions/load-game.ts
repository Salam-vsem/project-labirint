import { createNewPlayer, PlayerIsNotUnique } from "../helpers/createNewPlayer"
import { readPlayers } from "../helpers/read-player";
import { game } from "../game/game";
import { inputString } from "../lib/input";
import { writePlayers } from "../helpers/write-player";
import { loadLabirint } from "../helpers/read-labirint";

export const loadGame = () => {
    const players = readPlayers();
    const labirint = loadLabirint();

    while(true) {
        const name = inputString('Введите имя вашего игрока: ');   
        loadLabirint();

        if(players.some(player => player.name === name)) {
            return game(name, players, labirint);
        }
        console.log('Игрока с таким именем не существует');
    }
       
}