import React from 'react';
import { IconType } from 'react-icons';

interface Props {
    Icon: IconType;
}

const HeaderIcon: React.FC<Props> = ({ Icon }) => {
    // Todo: add tooltip

    return (
        <>
            <Icon className="h-5 w-5 mx-2 hover:text-white cursor-pointer" />
        </>
    );
};

export default HeaderIcon;
