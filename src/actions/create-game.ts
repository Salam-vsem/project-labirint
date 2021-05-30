import { createNewPlayer, PlayerIsNotUnique } from "../helpers/createNewPlayer"
import { readPlayers } from "../helpers/read-player";
import { game } from "../game/game";
import { inputString } from "../lib/input";
import { writePlayers } from "../helpers/write-player";
import { loadLabirint } from "../helpers/read-labirint";
import { labirint } from "../config/labirint";

export const createGame = () => {

    const players = readPlayers();
    // const labirint = loadLabirint();

    while(true) {
        try{
            const name = inputString('Введите имя нового игрока: ');
            players.push(createNewPlayer({
                name,
                players,
            }));
        
            writePlayers(players);
            return game(name, players, labirint);

        } catch(error) {
            if(error instanceof PlayerIsNotUnique) {
                console.log('Игрок с таким именем уже есть');
            }
        }
        
    }
};
