import { Labirint, Direction } from "../game/types";

export const defaultLabirint: Labirint = [
    [
        {
                directions: {
                    [Direction.down]: true,
                    [Direction.right]: false,
                    [Direction.left]: false,
                    [Direction.up]: false,
                },
                keys: [2],
        },
        {
            directions: {
                [Direction.down]: false,
                [Direction.right]: true,
                [Direction.left]: false,
                [Direction.up]: false,
            }
        },
        {
                directions: {
                    [Direction.down]: true,
                    [Direction.right]: true,
                    [Direction.left]: true,
                    [Direction.up]: false,
            }
        },
        {
                directions: {
                    [Direction.down]: true,
                    [Direction.right]: false,
                    [Direction.left]: true,
                    [Direction.up]: false,
                }
        },
        {
            directions: {
                [Direction.down]: true,
                [Direction.right]: false,
                [Direction.left]: false,
                [Direction.up]: false,
            }
    } 
    ],

    [
        {
            directions: {
                [Direction.down]: true,
                [Direction.right]: 2,
                [Direction.left]: false,
                [Direction.up]: 1,
            },
    },
    {
            directions: {
                [Direction.down]: true,
                [Direction.right]: false,
                [Direction.left]: false,
                [Direction.up]: false,
        }
    },
    {
            directions: {
                [Direction.down]: true,
                [Direction.right]: false,
                [Direction.left]: false,
                [Direction.up]: true,
        }
    },
    {
            directions: {
                [Direction.down]: true,
                [Direction.right]: true,
                [Direction.left]: false,
                [Direction.up]: true,
            }
    },
    {
            directions: {
                [Direction.down]: true,
                [Direction.right]: false,
                [Direction.left]: true,
                [Direction.up]: true,
            }
    },
    ],
    
    [
        {
            directions: {
                [Direction.down]: false,
                [Direction.right]: true,
                [Direction.left]: false,
                [Direction.up]: true,
            },
    },
    {
            directions: {
                [Direction.down]: true,
                [Direction.right]: true,
                [Direction.left]: true,
                [Direction.up]: true,
        }
    },
    {
            directions: {
                [Direction.down]: false,
                [Direction.right]: false,
                [Direction.left]: true,
                [Direction.up]: true,
        }
    },
    {
            directions: {
                [Direction.down]: true,
                [Direction.right]: false,
                [Direction.left]: false,
                [Direction.up]: true,
            }
    },
    {
            directions: {
                [Direction.down]: false,
                [Direction.right]: false,
                [Direction.left]: false,
                [Direction.up]: true,
            }
    }, 
    ],

    [
        {
            directions: {
                [Direction.down]: true,
                [Direction.right]: true,
                [Direction.left]: false,
                [Direction.up]: false,
            },
    },
    {
            directions: {
                [Direction.down]: false,
                [Direction.right]: false,
                [Direction.left]: true,
                [Direction.up]: true,
        }
    },
    {
            directions: {
                [Direction.down]: false,
                [Direction.right]: true,
                [Direction.left]: false,
                [Direction.up]: false,
        }
    },
    {
            directions: {
                [Direction.down]: true,
                [Direction.right]: true,
                [Direction.left]: true,
                [Direction.up]: true,
            }
    },
    {
            directions: {
                [Direction.down]: true,
                [Direction.right]: false,
                [Direction.left]: true,
                [Direction.up]: false,
            },
            keys: [1]
    },  
    ],

    [
        {
            isStart: true,
            directions: {
                [Direction.down]: false,
                [Direction.right]: false,
                [Direction.left]: false,
                [Direction.up]: true,
            },
        },
        {
                isFinish: true,
                directions: {
                    [Direction.down]: false,
                    [Direction.right]: false,
                    [Direction.left]: false,
                    [Direction.up]: false,
            }
        },
        {
                directions: {
                    [Direction.down]: false,
                    [Direction.right]: true,
                    [Direction.left]: 2,
                    [Direction.up]: false,
            }
        },
        {
                directions: {
                    [Direction.down]: false,
                    [Direction.right]: false,
                    [Direction.left]: true,
                    [Direction.up]: true,
                }
        },
        {
                directions: {
                    [Direction.down]: false,
                    [Direction.right]: false,
                    [Direction.left]: false,
                    [Direction.up]: true,
                }
        }, 
    ],
];