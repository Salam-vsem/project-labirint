import { writeFileSync } from "fs";
import { Player } from "../game/types";

export const writePlayers = (players: Player[]) => {
    const newJson = JSON.stringify(players, null, 4);
    writeFileSync('./files/players.json', newJson);
}
