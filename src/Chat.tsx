import React, { FC, useState } from 'react';
import styles from './Chat.module.scss';

const Chat: FC = () => {
  return (
    <div className={ styles.chat }>
      <div className={ styles.chat_window }>
        CHAT WINDOW
      </div>
    </div>
  );
}

export default Chat;
