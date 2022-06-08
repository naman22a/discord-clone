import { Channel } from '../../interfaces';

interface Action {
    type: string;
}

const initialState: Channel = {
    id: 2,
    name: '📝 general',
    isActive: true
};

const channelReducer = (state: Channel = initialState, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default channelReducer;
