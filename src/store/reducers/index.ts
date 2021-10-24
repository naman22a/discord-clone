import { combineReducers } from 'redux';

// Reducers
import serversReducer from './servers';
import channelReducer from './channel';
import userReducer from './user';
import membersCategoriesReducer from './membersCategories';
import messagesReducer from './messages';

const rootReducer = combineReducers({
	servers: serversReducer,
	channel: channelReducer,
	user: userReducer,
	membersCategories: membersCategoriesReducer,
	messages: messagesReducer,
});

export default rootReducer;