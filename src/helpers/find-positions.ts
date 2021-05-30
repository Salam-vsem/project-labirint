import { Labirint, Position } from '../game/types'

export const findStartOrFinish = (labirint: Labirint, startOrFinish: boolean): Position | undefined => {
  let result = undefined;
  for(let i = 0; i < labirint.length; i++) {
      for(let j = 0; j < labirint[i].length; j++) {
          if(startOrFinish? labirint[i][j].isStart : labirint[i][j].isFinish) {
              result = {
                  row: i,
                  col: j
              }
          }
      }
  }
  return result;
}
