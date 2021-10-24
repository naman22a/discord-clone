import React from 'react';

// Icons
import { HiHashtag, HiUsers } from 'react-icons/hi';
import { IoMdNotifications } from 'react-icons/io';
import { BsFillPinAngleFill } from 'react-icons/bs';
import { MdInbox } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Components
import HeaderIcon from './HeaderIcon';

const Header: React.FC = () => {

	const { name } = useSelector((state: RootState) => state.channel);

	return (
		<header className='bg-gray-700 text-gray-500 flex p-4 justify-between items-center px-6 z-50 absolute w-full top-0 h-14 select-none shadow'>
			<div className='flex justify-center items-center'>
				<HiHashtag className='h-5 w-5 mr-2' />
				<h4 className='text-white font-bold'>
					{name}
				</h4>
			</div>
			<div className='flex justify-center items-center'>
				{/* icons */}
				<HeaderIcon Icon={IoMdNotifications} />
				<HeaderIcon Icon={BsFillPinAngleFill} />
				<HeaderIcon Icon={HiUsers} />

				<div className='bg-gray-900 flex justify-center items-center mx-3 py-1 px-3 rounded'>
					<input type="text" className='bg-transparent text-white outline-none text-sm w-20' placeholder='Search' />
					<AiOutlineSearch className='ml-2'/>
				</div>

				<HeaderIcon Icon={MdInbox} />
				<HeaderIcon Icon={BiHelpCircle} />
			</div>
		</header>
	)
}

export default Header;
