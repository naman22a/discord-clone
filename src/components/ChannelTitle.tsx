import React , { useState } from 'react';

// Icons
import { HiHashtag } from 'react-icons/hi';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';

interface Props {
	name: string;
	isActive?: boolean;
}

const ChannelTitle: React.FC<Props> = ({ name, isActive = false }) => {

	const [hover , setHover] = useState(false);

	return (
		<div 
			className={`flex justify-between items-center m-2 p-2 ${hover || isActive ? 'bg-gray-700' : 'bg-gray-800'} rounded-lg cursor-pointer select-none`}
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className='flex justify-center items-center'>
				<HiHashtag className='h-5 w-5 mr-2' />
				<span className={`${(hover || isActive) ? 'text-white' : ''}  hover:text-white`}>
					{name}
				</span>
			</div>

			{(hover || isActive) &&
				<div className='flex items-center'>
					<BsFillPersonPlusFill className='h-4 w-4 mr-2' />
					<IoIosSettings className='h-4 w-4' />
				</div>
			}
		</div>
	)
}

export default ChannelTitle;
