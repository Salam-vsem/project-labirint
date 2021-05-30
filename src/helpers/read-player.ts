import {readFileSync} from 'fs';
import { Player, Position } from '../game/types';
import { isArray, isObject, isString, isError, isNumber } from 'util';
import { writePlayers } from './write-player';

const isPosition = (position: Position): position is Position => (
    isObject(position) &&
    isNumber(position.row) &&
    isNumber(position.col)
);

const isPlayer = (playersArray: Player[]): playersArray is Player[] => (
    isArray(playersArray) &&
    playersArray.every((player: Player) => (
        isPosition(player.position) && 
        isString(player.name) && 
        isNumber(player.lookDirection) &&
        isArray(player.keys)
    ))
);

export const readPlayers = () => {
    let playersArray: Player[] = [];
    try {
        playersArray = JSON.parse(readFileSync('./files/players.json').toString())
    }catch(e) {
        playersArray = [];
    }

    if(!isPlayer(playersArray)) {
        return [];
    }

    return playersArray;
};
