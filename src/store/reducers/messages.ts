import { Message } from "../../interfaces";
import { ADD_MESSAGE } from "../actionTypes";

const initialState: Message[] = [
	{
		user: {
			name: 'Naman Arora',
			online: true
		},
		date: new Date(),
		msg: 'hi'
	},
]

type Action = {
	type: typeof ADD_MESSAGE;
	message: Message;
}

const messagesReducer = (state: Message[] = initialState, action: Action) => {
	switch (action.type) {

		case ADD_MESSAGE:
			return [...state, action.message];

		default:
			return state;
	}
}

export default messagesReducer;