import React, { Component } from 'react'
///// creation d'un context 
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'deleteContact':
            return {
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            };
        case 'addContact':
            return{
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}
/// ici on exporte le provider, celui qui vas donner 
/// il faut lui passer le state qui pourras ensuite être disponile pour les autres components
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
            ,
            {
                id: 4,
                nom: 'Carolin',
                email: 'carolini@gmail.com',
                tel: '055 055 055'
            }
        ],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }
    render() {
        return (
            /// ici on rend le provider et on lui donne accès à tout le state avec la props value={this state}
            <Context.Provider value={this.state}>
                {/* this props.children permet d'afficher et utiliser les choses à l'intérieur d'un composant comme :
                <Text> 
                <p> </p>
                </Text>
                Là on pourras afficher le p grace au props.children                
                */}
                {this.props.children}
            </Context.Provider>
        )
    }

}
export const Consumer = Context.Consumer;