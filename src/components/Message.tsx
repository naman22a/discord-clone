import React from 'react';

// Icons
import { SiDiscord } from 'react-icons/si';
import { pad } from '../helpers/pad';
import { Member } from '../interfaces';

interface Props {
    user: Member;
    msg: string;
    date: Date;
}

const Message: React.FC<Props> = ({ user, msg, date }) => {
    return (
        <div className="flex items-center my-3 hover:bg-gray-800 p-2 rounded">
            <SiDiscord className="h-8 w-8 bg-primary text-white rounded-full p-1.5 mr-3" />
            <div>
                <div className="flex items-center">
                    <h4 className="mr-2 text-green-400 cursor-pointer hover:underline">
                        {user.name}
                    </h4>
                    <span className="text-xs text-gray-500 cursor-default">
                        {pad(date.getDate())}/{pad(date.getMonth() + 1)}/
                        {pad(date.getFullYear())}
                    </span>
                </div>
                <p className="text-sm">{msg}</p>
            </div>
        </div>
    );
};

export default Message;
