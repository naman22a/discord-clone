import { User } from "../../interfaces";

const initialState: User = {
	id: 3790,
	name: 'Naman Arora'
}

type Action = {
	type: string;
}

const userReducer = (state: User = initialState, action: Action) => {
	switch (action.type) {

		default:
			return state;
	}
}

export default userReducer;