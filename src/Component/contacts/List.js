import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../Context'
export default class List extends Component {

    supprime = (id) => {
        const nouveauContact = this.state.contacts.filter(contact => contact.id !== id)
        this.setState({ contacts: nouveauContact })
    }
    render() {

        return (
            <Consumer>
                {value => {
                    return (
                        <>
                            <h3 className="display-3 my-4">Nos contacts</h3>
                            {value.contacts.map(contact => (
                                <Contact key={contact.id} id={contact.id} nom={contact.nom} email={contact.email} tel={contact.tel} supprimeClick={() => this.supprime(contact.id)} />
                            ))}

                        </>
                    )
                }}
            </Consumer>
        )

    }
}
