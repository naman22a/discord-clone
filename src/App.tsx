import React from 'react';

// Components
import Sidebar from './components/Sidebar';
import Server from './components/Server';
import Header from './components/Header';
import MemberList from './components/MemberList';
import Chat from './components/Chat';

const App: React.FC = () => {
    return (
        <div className="flex relative h-screen w-full">
            <div className="flex">
                <Sidebar />
                <Server />
            </div>
            <div className="relative w-full h-full">
                <Header />
                <div className="flex justify-between absolute w-full h-full top-0 left-0 pt-14">
                    <Chat />
                    <MemberList />
                </div>
            </div>
        </div>
    );
};

export default App;
