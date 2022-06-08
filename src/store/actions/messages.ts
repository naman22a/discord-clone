import { Message } from '../../interfaces';
import { ADD_MESSAGE } from '../actionTypes';

export const addMessage = (message: Message) => {
    return {
        type: ADD_MESSAGE,
        message
    };
};
