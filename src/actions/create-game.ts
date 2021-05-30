import { createNewPlayer, PlayerIsNotUnique } from "../helpers/createNewPlayer"
import { readPlayers } from "../helpers/read-player";
import { game } from "../game/game";
import { inputString } from "../lib/input";
import { writePlayers } from "../helpers/write-player";
import { loadLabirint } from "../helpers/read-labirint";
import { defaultLabirint } from "../config/labirint";

export const createGame = () => {

    const players = readPlayers();
    let labirint = defaultLabirint;
    let labirintName;
    while(true) {
        const input = inputString('Введите название вашей карты из папки files/maps\nЕсли такой нет нажмите Enter:\n\n')
        if(input === '') {
            break;
        }
        const result = loadLabirint(input);
        if(result) {
            labirintName = input;
            labirint = result;
            break;
        }
        else {
            console.log('Не удалось найти такую карту, попробуйте снова')
        }
    }

    while(true) {
        try{
            const name = inputString('Введите имя нового игрока: ');
            players.push(
                createNewPlayer(
                {
                    name,
                    players,
                },  
                labirint,
                labirintName,
            ));
    
            writePlayers(players);
            return game(name, players, labirint);

        } catch(error) {
            if(error instanceof PlayerIsNotUnique) {
                console.log('Игрок с таким именем уже есть');
            }
        }
        
    }
};
