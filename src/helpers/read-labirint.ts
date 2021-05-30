import { readFileSync } from "fs"
import { Cell } from "../game/types";

export const loadLabirint = () => {
  const file = readFileSync('./files/testlabirint.json').toString();
  const labirint: Cell[][] = JSON.parse(file);
  return labirint;
}