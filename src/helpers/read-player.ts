import {readFileSync} from 'fs';
import { Player, Position } from '../game/types';
import { isArray, isObject, isString, isError, isNumber } from 'util';

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
    try {
        const playersArray = JSON.parse(readFileSync('./files/players.json').toString());

        if(!isPlayer(playersArray)) {
            console.log('Да это же не игрок, ауууу');
            return [];
        }

        return playersArray;
        
    } catch (e) {
        if (isError(e)) {
            console.log(e.message);
        }
        return [];
    }
};
