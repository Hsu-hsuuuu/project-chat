import React, { FC } from 'react';
import styles from './ContactCard.module.scss'

const ContactCard: FC = () => {
    return (
        <div className={ styles.contact_card }>
            <div className={ styles.contact_photo }></div> {/* photo */}
            <div className={ styles.text_info_block }>
                <div className={ styles.name_block }>
                    <h2>Name</h2>
                    <h2>Lastname</h2>
                </div>
                <div className={ styles.last_message_block }>
                    <p className={ styles.last_message }>Last message...</p>
                </div>
            </div>
            <div className={ styles.new_message_counter }></div> 
        </div>
    );
}

export default ContactCard;