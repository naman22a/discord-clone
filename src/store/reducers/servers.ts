import { Server } from '../../interfaces';

type Action = {
    type: string;
};

const initialState: [Server] = [
    {
        name: 'Server name',
        groups: [
            {
                name: 'text channels',
                channels: [
                    {
                        id: 1,
                        name: '📝 general',
                        isActive: true
                    },
                    {
                        id: 2,
                        name: '🤔 queries',
                        isActive: false
                    },
                    {
                        id: 3,
                        name: '🧾 rules',
                        isActive: false
                    },
                    {
                        id: 4,
                        name: '🔊 annoucements',
                        isActive: false
                    }
                ]
            }
        ]
    }
];

const serversReducer = (state: Server[] = initialState, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default serversReducer;
