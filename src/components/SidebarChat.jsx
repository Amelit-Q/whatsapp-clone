import { Avatar } from '@material-ui/core';
import React from 'react';
import './../styles/sidebarChat.scss';

export const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = React.useState('');
  React.useEffect(() => {
    //calculate some random number for avatar
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt('Enter name for chat');
    if (roomName) {
      // some database stuff
    }
  };

  return !addNewChat ? (
    <div className="sidebar-chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebar-chat__info">
        <h2>Room name</h2>
        <p>last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebar-chat">
      <h2>Add new Chat</h2>
    </div>
  );
};
