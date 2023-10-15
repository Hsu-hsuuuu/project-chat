import React, { FC, useState } from 'react';
import ChatHeader from './components/ChatHeader/ChatHeader';
import styles from './Chat.module.scss';

const Chat: FC = () => {
  return (
    <div className={ styles.chat }>
      <div className={ styles.chat_window }>
        <ChatHeader />
      </div>
    </div>
  );
}

export default Chat;
