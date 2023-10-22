import React, { FC, useEffect, useState } from 'react';
import fetch from 'node-fetch';
import ContactCard from './ContactCard/ContactCrad';
import styles from './MainLeftSide.module.scss';

interface Contact {
    id: number;
    photo: string;
    name: string;
    lastname: string;
    lastmsg: string;
    countmsg?: number;
}

const MainLeftSide: FC = () => {

    const [contacts, setContacts] = useState<Array<Contact>>([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/084c9795-e9b3-4fa0-8a7b-dfed02fdbf29')
            .then((response) => response.json())
            .then((value) => {
                setContacts(value);
            })
    }, [])

    console.log(contacts)

    return (
        <div className={ styles.main_left }>
            {contacts.map((contacts) => 
                <ContactCard 
                    key={contacts.id} 
                    photo={contacts.photo}
                    name={contacts.name}
                    lastname={contacts.lastname}
                    lastmsg={contacts.lastmsg}
                    countmsg={contacts.countmsg}
                />
            )}
        </div>
    );
}

export default MainLeftSide;