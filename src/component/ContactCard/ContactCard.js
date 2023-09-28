import React from 'react'
import "./ContactCard.css"
function ContactCard({name,mobile}) {
  return (
    
    <div className='contact-card'>
      <h1>{name}</h1>
      <span>{mobile}</span>
    </div>
  )
}

export default ContactCard
