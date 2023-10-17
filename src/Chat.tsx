import React, { FC } from 'react';
import ChatHeader from './components/ChatHeader/ChatHeader';
import styles from './Chat.module.scss';
import MainArea from './components/MainArea/MainArea';

const Chat: FC = () => {
  return (
    <div className={ styles.chat }>
      <div className={ styles.chat_window }>
        <ChatHeader />
        <MainArea />
      </div>
    </div>
  );
}

export default Chat;
