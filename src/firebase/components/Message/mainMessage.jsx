import React from 'react';
import Sidebar from "./Sidebar"
import Chat from './Chat';

const Mainmessage = () => {
    return (
        <div>
                <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
        </div>
    );
}

export default Mainmessage;
