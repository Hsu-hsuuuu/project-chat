import React, { FC } from 'react';
import styles from './ContactCard.module.scss'


interface ContactProps {
    photo: string;
    name: string;
    lastname: string;
    lastmsg: string;
    countmsg?: number;
}

const ContactCard: FC<ContactProps> = ( {photo, name, lastname, lastmsg, countmsg}: ContactProps ) => {
    console.log(countmsg)
    return (
        <div className={ styles.contact_card }>
            <img src={photo} alt=""className={ styles.contact_photo } />
            <div className={ styles.text_info_block }>
                <div className={ styles.name_block }>
                    <h2>{name}</h2>
                    <h2>{lastname}</h2>
                </div>
                <div className={ styles.last_message_block }>
                    <p className={ styles.last_message }>{lastmsg}...</p>
                </div>
            </div>
            <div className={ countmsg === 0 ? styles.new_message_counter_hidden  : styles.new_message_counter}>
                {countmsg}
            </div>
        </div>
    );
}

export default ContactCard;