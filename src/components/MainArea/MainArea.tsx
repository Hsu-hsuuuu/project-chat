import React, { FC } from 'react';
import styles from './MainArea.module.scss';
import MainLeftSide from './MainLeftSide/MainLeftSide';
import MainRightSide from './MainRightSide/MainRightSide';

const MainArea: FC = () => {
    return (
        <div className={ styles.main }>
            <MainLeftSide />
            <span className={ styles.scroll }/>
            <MainRightSide />
        </div>
    );
}

export default MainArea;