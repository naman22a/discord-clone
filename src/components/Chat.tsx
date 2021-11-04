import React, { useState } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addMessage } from '../store/actions/messages';

// Icons
import { IoMdAddCircle } from 'react-icons/io';
import { AiFillGift } from 'react-icons/ai';
import { RiFileGifFill } from 'react-icons/ri';
import { ImAttachment } from 'react-icons/im';
import { BsEmojiSmileFill } from 'react-icons/bs';

// Components
import Message from './Message';

const Chat: React.FC = () => {

	const channel = useSelector((state: RootState) => state.channel);
	const messages = useSelector((state: RootState) => state.messages);
	const user = useSelector((state: RootState) => state.user);

	const [msg, setMsg] = useState('');

	const dispatch = useDispatch();

	const handleMsgEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			dispatch(addMessage({
				user: {
					name: user.name,
					online: true
				},
				date: new Date(),
				msg,
			}));

			setMsg('')
		}
	}

	return (
		<div className='bg-gray-700 w-full text-white relative p-3'>
			<div className='overflow-y-scrol h-full'>
				{messages.map(message => <Message  {...message} key={message.date.getTime().toString()} />)}
			</div>

			{/* message Box */}
			<div className='text-gray-400 absolute bottom-0 p-3 w-full bg-gray-700'>
				<div className='p-3 bg-gray-600 w-full rounded-xl flex items-center'>
					<IoMdAddCircle className='message-box-icon' />
					<input
						type="text"
						placeholder={`Message # ${channel.name}`}
						className='bg-transparent w-full outline-none text-white'
						value={msg}
						onChange={(e) => setMsg(e.target.value)}
						onKeyUp={(e) => handleMsgEnter(e)}
					/>
					<AiFillGift className='message-box-icon' />
					<RiFileGifFill className='message-box-icon' />
					<ImAttachment className='message-box-icon' />
					<BsEmojiSmileFill className='message-box-icon' />
				</div>
			</div>
		</div>
	)
}

export default Chat;
