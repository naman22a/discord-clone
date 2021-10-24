import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../store';

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

	return (
		<div className='bg-gray-700 w-full text-white relative p-3'>
			<div className='overflow-y-scrol h-full'>
				{messages.map(message => <Message  {...message} />)}
				
			</div>

			{/* message Box */}
			<div className='text-gray-400 absolute bottom-0 p-3 w-full bg-gray-700'>
				<div className='p-3 bg-gray-600 w-full rounded-xl flex items-center'>
					<IoMdAddCircle className='message-box-icon' />
					<input type="text" placeholder={`Message # ${channel.name}`} className='bg-transparent w-full outline-none text-white' />
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
