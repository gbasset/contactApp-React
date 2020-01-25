import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action ) => {
    switch(action.type) {
        case 'deleteContact':
          return {
              contacts: state.contacts.filter(contact =>
                 contact.id !== action.payload)
        };
        default: 
        return state;
    }
}
export class Provider extends Component {

    state = {
        contacts: [
            {
                id: 1,
                nom: 'Gigi La frite',
                email: 'gigi@gmail.com',
                tel: '055 055 055'
            },
            {
                id: 2,
                nom: 'John Vega',
                email: 'Jvega@gmail.com',
                tel: '055 055 055'
            },
            {
                id: 3,
                nom: 'Ambert',
                email: 'gigi@gmail.com',
                tel: '055 055 055'
            },
            {
                id: 4,
                nom: 'Jinette',
                email: 'gigi@gmail.com',
                tel: '055 055 055'
            }
        ],

        dispatch: action => {
            this.setState( state => reducer(state, action))
        }
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }

}
export const Consumer = Context.Consumer;