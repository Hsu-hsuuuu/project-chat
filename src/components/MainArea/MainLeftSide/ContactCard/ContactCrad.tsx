import React, { FC, useState } from 'react';
import styles from './ContactCard.module.scss'


interface ContactProps {
    id: number;
    photo: string;
    name: string;
    lastname: string;
    lastmsg: string;
    countmsg?: number;
}

const ContactCard: FC<ContactProps> = ( {id, photo, name, lastname, lastmsg, countmsg}: ContactProps ) => {
    const [choose, setChoose] = useState<number | null>(null) // state Функция выбора контакта по айди

    const chatSelection = (id: number) => { // Функция выбора контакта по айди
        if(choose !== id) {
            return setChoose(id + 1);
        }
        setChoose(null);
    }

    console.log(choose)
    
    return (
        <div className={ styles.contact_card } onClick={() => chatSelection(id)}>
            <img src={photo} alt="contact_photo" className={ styles.contact_photo } />
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