import React, { Component } from 'react'
import Contact from './Contact'
export default class List extends Component {
    state = {
        contacts: [
            {
                id:1,
                nom: 'Gigi La frite',
                email: 'gigi@gmail.com',
                tel : '055 055 055'
            },
            {
                id:2,
                nom: 'John Vega',
                email: 'Jvega@gmail.com',
                tel : '055 055 055'
            },
            {
                id:3,
                nom: 'Ambert',
                email: 'gigi@gmail.com',
                tel : '055 055 055'
            },
            {
                id:4,
                nom: 'Jinette',
                email: 'gigi@gmail.com',
                tel : '055 055 055'
            }
        ]
    }
    supprime = (id) => {
        const nouveauContact = this.state.contacts.filter(contact => contact.id !== id)
        this.setState({contacts: nouveauContact})
    }
    render() {
        return (
            <>
                {this.state.contacts.map(contact => (
                    <Contact key={contact.id} nom={contact.nom} email={contact.email} tel={contact.tel} supprimeClick={() => this.supprime(contact.id)}/>
                ))}
                
            </>
        )
    }
}
