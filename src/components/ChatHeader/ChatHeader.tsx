import React, { FC } from 'react';
import HeaderLeftSide from './HeaderLeftSide/HeaderLeftSide';
import HeaderRightSide from './HeaderRightSide/HeaderRightSide';
import styles from './ChatHeader.module.scss';

const ChatHeader: FC = () => {
    return (
      <div className={ styles.chat_header }>
        <HeaderLeftSide />
        <span className={ styles.partition }/>
        <HeaderRightSide />
      </div>
    );
  }
  
export default ChatHeader;