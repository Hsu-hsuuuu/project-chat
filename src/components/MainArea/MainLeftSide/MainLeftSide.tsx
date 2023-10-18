import React, { FC } from 'react';
import styles from './MainLeftSide.module.scss';
import ContactCard from './ContactCard/ContactCrad';

const MainLeftSide: FC = () => {
    return (
        <div className={ styles.main_left }>
            <ContactCard />
        </div>
    );
}

export default MainLeftSide;