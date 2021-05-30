// import { move } from './game/move';
// import { Direction, Player } from './game/types';
// import { labirint } from './config/labirint';
// import { createNewPlayer } from './helpers/createNewPlayer';
// import { inputChoice } from './game/input-choice';
// const players: Player[] = [];
// const player = createNewPlayer({
//   name: 'oleg',
//   players
// });
// move(player, labirint, inputChoice(player, labirint));

export enum NodeEnv {
  dev = 'dev',
  test = 'test',
}

if (process.env.NODE_ENV === NodeEnv.dev) {
  console.log('Я крутой прогер :)');
}

// try {
//   // throw '!!!';
// } catch(e) {
//   if (e === 'TEST') {
//     console.log(e);
//   } else {
//     throw e;
//   }
// } finally {
//   console.log('finally');
// }
// console.log('end');
