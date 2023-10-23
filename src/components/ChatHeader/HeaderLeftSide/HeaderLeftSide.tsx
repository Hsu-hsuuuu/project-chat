import React, { FC, useState } from 'react';
import MyProfile from './MyProfile/MyProfile';

import styles from './HeaderLeftSide.module.scss';


const HeaderLeftSide: FC = () => {
    const [openProfile, setOpenProfile] = useState<boolean>(false);

    const handlerOpenProfile = (event: React.MouseEvent<HTMLElement>) => {
        setOpenProfile(!openProfile)
    }

    return (
        <div className={ styles.left_side }>
            <h1 className={ styles.chat_name }>CHAT</h1>
            <div className={ styles.my_profile_block }>
                <h3 className={ styles.profile_text }>Profile/Settings</h3>
                <img src="https://avatars.githubusercontent.com/u/122398890?v=4" alt="avatar"
                    className={ styles.my_profile_button }
                    onClick={ handlerOpenProfile }
                />
                {openProfile && <MyProfile />}
            </div>
        </div>
    );
}

export default HeaderLeftSide;