import React, { useEffect, useState } from 'react'
import "./App.css"
import contactlist from "../../data/contact-list"
import ContactCard from '../../component/ContactCard/ContactCard';
function App() {
    const [contacts, setContacts] = useState(contactlist);
    const [serachTerm, setSearchTerm] = useState('')
    useEffect(() => {
        const filteredContacts = contactlist.filter((contact) => {
            const name = contact.name.toLocaleLowerCase();
            const mobile = contact.mobile.toString();
            const query = serachTerm.toLocaleLowerCase();
            return (name.includes(query) || mobile.includes(query))
        })
        setContacts(filteredContacts);
    }, [serachTerm]
    )
    return (
        <>
            <h1 className='heading'>Contact-List</h1>
            <input type='text'
                placeholder='search'
                className='search'
                value={serachTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }} />
            <div className='contact-list-container'>
                {contacts.map((contact, index) => {
                    const { name, mobile } = contact;
                    return <ContactCard key={index} name={name} mobile={mobile} />
                })}
            </div>
            {
                contacts.length === 0 ? <h2 className='heading'>No contact found</h2> : null
            }
        </>
    )
}

export default App
