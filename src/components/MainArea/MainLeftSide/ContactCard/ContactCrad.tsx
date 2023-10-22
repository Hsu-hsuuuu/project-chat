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
    
    return (
        <div className={ styles.contact_card }>
            <div className={ styles.contact_photo }>{photo}</div> 
            <div className={ styles.text_info_block }>
                <div className={ styles.name_block }>
                    <h2>{name}</h2>
                    <h2>{lastname}</h2>
                </div>
                <div className={ styles.last_message_block }>
                    <p className={ styles.last_message }>{lastmsg}...</p>
                </div>
            </div>
            <div className={ styles.new_message_counter }>{countmsg}</div> 
        </div>
    );
}

export default ContactCard;