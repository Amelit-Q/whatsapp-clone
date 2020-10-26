import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './../styles/chat.scss';

export const Chat = () => {
  const [seed, setSeed] = React.useState('');
  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__header-info">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__body-message">
          <span className="chat__body-message-name">Heeee</span>
          Test 1.39.12
        </p>
        <
      </div> 
      <div className="chat__footer"></div>
    </div>
  );
};
