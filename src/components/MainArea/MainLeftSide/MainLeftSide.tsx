import React, { FC } from 'react';
import styles from './MainLeftSide.module.scss';

const MainLeftSide: FC = () => {
    return (
        <div className={ styles.main_left }>
            <div className={ styles.contact }>
                <div className={ styles.contact_photo}></div> {/* photo */}
            </div>
        </div>
    );
}

export default MainLeftSide;