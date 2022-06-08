import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Components
import MembersCategory from './MembersCategory';

const MemberList: React.FC = () => {
    const membersCategories = useSelector(
        (state: RootState) => state.membersCategories
    );

    return (
        <div className="bg-gray-800 text-gray-500 h-full px-3 py-3 flex flex-col select-none w-72">
            {/* members categories */}

            {membersCategories.map(category => (
                <MembersCategory {...category} key={category.category} />
            ))}
        </div>
    );
};

export default MemberList;
