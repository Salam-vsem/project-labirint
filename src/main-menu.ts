import { menu } from "./lib/menu";
import { createGame } from './actions/create-game';
import { loadGame } from "./actions/load-game";

(() => {
    while (true) {
        
        const result = menu<boolean | void>({
            'Новая игра': () => createGame(),
            'Загрузить игру': () => loadGame(),
            'О разработчиках': () => {}, // from file
            'Выйти': () => false,
        });

        if (result === false) {
            return false;;
        }
    }
})();