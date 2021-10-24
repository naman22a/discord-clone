import React from 'react';

// Components
import SidebarItem from './SidebarItem';

// Icons
import { SiDiscord } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaCompass } from 'react-icons/fa';

const Sidebar: React.FC = () => {

	const icons = [
		{
			id: 1,
			Icon: SiDiscord,
			animation: false
		},
		{
			id: 2,
			Icon: AiOutlinePlus,
			animation: true
		},
		{
			id: 3,
			Icon: FaCompass,
			animation: true
		},
		{
			id: 4,
			Icon: FiDownload,
			animation: true
		},
	]

	return (
		<div className='bg-gray-900 w-16 h-screen flex flex-col items-center p-3 text-white'>
			{icons.map(icon => <SidebarItem {...icon} key={icon.id} />)}
		</div>
	)
}

export default Sidebar;