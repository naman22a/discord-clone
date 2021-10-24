import React from 'react';

// Icons
import { SiDiscord } from 'react-icons/si';
import { Member } from '../interfaces';

interface Props {
	category: string;
	members: Member[];
}

const MembersCategory: React.FC<Props> = ({ category, members }) => {

	return (
		<div className='mb-4'>
			<h5 className='font-semibold uppercase text-xs mb-2'>{category} - {members.length}</h5>
			{members.map(member => (
				<div className='flex items-center cursor-pointer hover:bg-gray-700 py-2 rounded-md' key={member.name}>
					<div className='relative'>
						<SiDiscord className='h-8 w-8 bg-primary text-white rounded-full p-1.5' />
						{member.online &&
							<div className='h-3 w-3 rounded-full bg-secondary absolute right-0 bottom-0 border-2 border-gray-800'></div>
						}

					</div>
					<h6 className={`${member.online ? 'text-secondary' : ''} ml-2 text-sm`}>{member.name}</h6>
				</div>
			))}
		</div>
	)
}

export default MembersCategory;
