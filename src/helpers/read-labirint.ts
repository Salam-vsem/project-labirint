import { readFileSync } from "fs"
import { Cell } from "../game/types";

export const loadLabirint = (labirintName: string) => {
  try {
    const file = readFileSync(`files/maps/${labirintName}.json`).toString();
    const labirint: Cell[][] = JSON.parse(file);
    return labirint;
  }catch(e) {
    return undefined;
  }
}