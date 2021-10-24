import React from 'react';
import { IconType } from 'react-icons';

interface Props {
	animation?: boolean;
	Icon: IconType;
	tooltip?: string;
}

const SidebarItem: React.FC<Props> = ({ animation = true, Icon , tooltip='tooltip' }) => {
	return (
		<>
			{animation &&
				<div className='sidebarItem'>
					<Icon className='h-7 w-7' />

					{/* <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left'>
						{tooltip}
					</span> */}
				</div>
			}
			{!animation &&
				<div className='bg-primary p-3 rounded-xl mb-4 cursor-pointer relative group'>
					<Icon className='h-7 w-7' />

					{/* <span className='tooltip group-hover:scale-100 scale-100'>
						{tooltip}
					</span> */}
				</div>
			}
		</>
	)
}

export default SidebarItem;
