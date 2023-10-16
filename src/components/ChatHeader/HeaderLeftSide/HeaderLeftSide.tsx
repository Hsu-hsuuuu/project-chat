import React, { FC } from 'react';
import styles from './HeaderLeftSide.module.scss'

const HeaderLeftSide: FC = () => {
    return (
        <div className={ styles.left_side }>
            <h1>CHAT</h1>
            <div className={ styles.my_profile_block }>
                <h3 className={ styles.profile_text }>Profile</h3>
                <button className={ styles.my_profile_button }>
                    
                </button> {/*&& <MyProfile /> */}
            </div>
        </div>
    );
}

export default HeaderLeftSide;