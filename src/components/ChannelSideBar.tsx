import React , { useState } from 'react';

// Components
import ChannelTitle from './ChannelTitle';

// Icons
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

// Interfaces
import { Group as Props } from '../interfaces';

const ChannelSideBar: React.FC<Props> = ({ name , channels }) => {

	const [open, setOpen] = useState(true);

	return (
		<div>
			<div className='flex justify-between items-center p-3'>
				<div className='flex items-end group cursor-pointer'>
					<BiChevronDown
						className={`h-4 w-4 mr-2 group-hover:text-white ${open ? 'rotate-0' : '-rotate-90'} transform transition-all duration-300`}
					/>
					<h5
						className='font-bold uppercase text-xs group-hover:text-white select-none'
						onClick={() => setOpen(!open)}
					>{name}</h5>
				</div>
				<AiOutlinePlus className='h-5 w-5 cursor-pointer' />
			</div>

			{/* channels */}
			{open &&
				<div>
					{channels.map(channel => (
						<ChannelTitle {...channel} key={channel.id} />
					))}
				</div>
			}

		</div>
	)
}

export default ChannelSideBar;
