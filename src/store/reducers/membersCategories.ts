import { Category } from '../../interfaces';

const initialState: Category[] = [
    {
        category: 'Admin',
        members: [
            {
                name: 'Naman Arora',
                online: true
            }
        ]
    },
    {
        category: 'Members',
        members: []
    }
];

type Action = {
    type: string;
};

const membersCategoriesReducer = (
    state: Category[] = initialState,
    action: Action
) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default membersCategoriesReducer;
