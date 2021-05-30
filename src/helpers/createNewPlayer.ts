
import { Player, Direction, Labirint, Position } from '../game/types'
import { loadLabirint } from './read-labirint';
import { findStartOrFinish } from '../helpers/find-positions';

interface PlayerValidationInfo {
    name: string;
    players: Player[];
}

export class PlayerIsNotUnique extends Error {
    constructor() {
        super();
        this.message = 'Такое имя уже есть';
    }
}

export class StartError extends Error {
    constructor() {
        super();
        this.message = 'не удалось найти точку старта';
    }
}

const nameIsUnique = (playerInfo: PlayerValidationInfo) => {
    return playerInfo
        .players
        .every(player => player.name != playerInfo.name);
}

export const createNewPlayer = (player: PlayerValidationInfo): Player => {
    const labirint = loadLabirint();
    const start = findStartOrFinish(labirint, true);
    if(!start) {
        throw new StartError();
    }
    if(!nameIsUnique(player)) {
        throw new PlayerIsNotUnique();
    }
    
    return {
        name: player.name,
        locationMessage: 'Вы на старте.',
        lookDirection: Direction.up,
        position: {
            row: start.row,
            col: start.col
        },
        keys: [],
    };
} 
