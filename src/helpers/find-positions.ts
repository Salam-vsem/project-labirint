import { Labirint, Position } from '../game/types'

export const findStartOrFinishPosition = (labirint: Labirint, isFinish?: boolean): Position | undefined => {
  for(let i = 0; i < labirint.length; i++) {
      for(let j = 0; j < labirint[i].length; j++) {
          if(isFinish? labirint[i][j].isFinish: labirint[i][j].isStart) {
              return (
                {
                    row: i,
                    col: j
                }
              )
          }
      }
  }
  return undefined;
}
