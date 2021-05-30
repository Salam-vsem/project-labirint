export enum Direction {
    left,
    right,
    up,
    down,
}

export interface Position {
    row: number;
    col: number; 
}

export interface Player {
    name: string;
    locationMessage: string;
    lookDirection: Direction;
    position: {
        row: number;
        col: number;
    };
    keys: number[];
}

export type DoorKey = number;
export type CanMove = boolean;
export type PassInfo = CanMove | DoorKey;
export type DirectionsInfo = Record<Direction, PassInfo>;

export interface Cell {
    directions: DirectionsInfo;
    keys?: number[];
    isStart?: boolean;
    isFinish?: boolean;
}

export interface Position {
    row: number;
    col: number; 
}

export type Labirint = Cell[][];
