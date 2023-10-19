import React, { FC } from 'react';
import fetch from 'node-fetch';
import styles from './ContactCard.module.scss'



interface Contact {
    id: number;
    photo: string;
    name: string;
    lastname: string;
    lastmsg: string;
    countmsg?: number;
}


const ContactCard: FC = () => {

    const fetchContact = async (): Promise<Contact []> =>
        fetch('https://mocki.io/v1/084c9795-e9b3-4fa0-8a7b-dfed02fdbf29')
            .then((response) => {
                // if (!response.ok) {
                //     throw new Error(response.statusText)
                // }
                return response.json()
            })
            .then((data) => {
                console.log(data)
                return data as Contact[]
            })
            .catch((error) => {
                console.error(error)
                return []
            })

    fetchContact()

    console.log()

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