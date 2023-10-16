import React, { FC } from 'react';
import styles from './MainRightSide.module.scss';

const MainRightSide: FC = () => {
    return (
        <div className={ styles.main_right }>
            <h1 className={ styles.preview_text }>Select a dialog</h1>
        </div>
    );
}

export default MainRightSide;