import { Labirint, Direction } from "../game/types";

export const labirint: Labirint = [
    [
        {
                directions: {
                    [Direction.down]: true,
                    [Direction.right]: false,
                    [Direction.left]: false,
                    [Direction.up]: false,
                },
                keys: [222],
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
                [Direction.right]: 222,
                [Direction.left]: false,
                [Direction.up]: 111,
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
            keys: [111]
    },  
    ],

    [
        {
            directions: {
                [Direction.down]: true,
                [Direction.right]: false,
                [Direction.left]: false,
                [Direction.up]: true,
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
                [Direction.down]: false,
                [Direction.right]: true,
                [Direction.left]: 222,
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