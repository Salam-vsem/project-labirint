import { readPlayers } from "../helpers/read-player";
import { game } from "../game/game";
import { inputString } from "../lib/input";
import { loadLabirint } from "../helpers/read-labirint";
import { defaultLabirint } from "../config/labirint";

export const loadGame = () => {
    const players = readPlayers();
    // const labirint = labirintName? loadLabirint();

    while(true) {
        const name = inputString('Введите имя вашего игрока: ');   
        const player = players.find(player => player.name === name)
        if(player) {
            const labirint = player.labirintName? loadLabirint(player.labirintName): defaultLabirint;
            if(!labirint) {
                console.log('неудалось загрузить лабиринт');
                return;
            }
            return game(name, players, labirint);
        }
        console.log('Игрока с таким именем не существует');
    }
       
}