import React, { FC } from 'react';
import styles from './ContactCard.module.scss'

const ContactCard: FC = () => {
    return (
        <div className={ styles.contact_card }>
            <div className={ styles.contact_photo }></div> {/* photo */}
            <div className={ styles.text_info_block }>
                <div className={ styles.name_block }>
                    <h2 className={ styles.contact_name }>name</h2>
                    <h2 className={ styles.contact_lastname }>lastname</h2>
                </div>
                <div className={ styles.last_message_block }>
                    <p className={ styles.last_message }>last msg</p>
                </div>
            </div>
            <div className={ styles.new_message_counter }></div> 
        </div>
    );
}

export default ContactCard;