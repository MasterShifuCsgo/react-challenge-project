import React, { Component } from 'react';

import Contacts from './Contacts'
import Card from './Card'

class ContactCards extends Component {

  constructor(){
    super()    
    this.state = {
      contacts: Contacts
    }
  }

  render() {

    const contactCards = this.state.contacts.map((contact) =>{      
      return <Card key={contact.id} contact={contact}></Card>
    })

    

    return (
      <div className='columns is-multiline'>                          
        {contactCards}
      </div>
    );
  }
}

export default ContactCards;