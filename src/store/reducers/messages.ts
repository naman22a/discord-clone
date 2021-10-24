import { Message } from "../../interfaces"; 

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
	type: string;
}

const messagesReducer = (state: Message[] = initialState , action: Action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default messagesReducer;