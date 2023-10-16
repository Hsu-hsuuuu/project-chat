import React, { FC } from 'react';
import styles from './HeaderLeftSide.module.scss'

const HeaderLeftSide: FC = () => {
    return (
        <div className={ styles.left_side }>
            <h1>CHAT</h1>
            <div>
                <h3>Profile</h3>
                <img src="" alt="logo_image" />
            </div>
            <button></button> {/*&& <MyProfile /> */}
        </div>
    );
}

export default HeaderLeftSide;