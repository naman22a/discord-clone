import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Icons
import { BiChevronDown } from 'react-icons/bi';
import { AiFillSound } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { BsFillMicMuteFill, BsHeadphones } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';

// Components
import ChannelSideBar from './ChannelSideBar';

const Server: React.FC = () => {
    const servers = useSelector((state: RootState) => state.servers);
    const server = servers[0];
    const { groups } = server;

    const user = useSelector((state: RootState) => state.user);

    return (
        <div className="w-60 bg-gray-800 h-screen text-gray-500">
            <div className="text-white flex items-center justify-between py-4 px-5 shadow bg-gray-800 hover:bg-gray-700 cursor-pointer">
                <h3 className="font-bold">Server Name</h3>
                <BiChevronDown className="h-5 w-5" />
            </div>
            <div className="p-6 flex items-center">
                <AiFillSound className="h-5 w-5 mr-2" />
                <h4 className="text-lg">General</h4>
            </div>

            {groups.map(group => (
                <ChannelSideBar {...group} key={group.name} />
            ))}

            <div className="absolute bottom-0 p-3 bg-gray-850 w-full flex items-center">
                <div className="relative">
                    <SiDiscord className="h-8 w-8 bg-primary text-white rounded-full p-1.5" />
                    <div className="h-3 w-3 rounded-full bg-secondary absolute right-0 bottom-0 border-2 border-gray-800"></div>
                </div>
                <div className="flex mx-3 flex-col text-xs">
                    <h4 className="text-white font-semibold">{user.name}</h4>
                    <h5>#{user.id}</h5>
                </div>
                <div className="flex">
                    <BsFillMicMuteFill className="h-5 w-5 mx-1 hover:text-white cursor-pointer" />
                    <BsHeadphones className="h-5 w-5 mx-1 hover:text-white cursor-pointer" />
                    <IoIosSettings className="h-5 w-5 mx-1 hover:text-white cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Server;
