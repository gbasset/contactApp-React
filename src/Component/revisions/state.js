import React, { Component } from 'react'

/// la puissance de react est dans le rendu conditionnel , ce qui est permis par la state. 
// le mieux est d'avoir le state + en dessous de celui ci les fonction qui pourrons le modifier, et de passer ses fonctions aux autres component via des props ou via un rducer pour les tiliser une fois appelés dans 
// on peu passer des propriétés avec des fonctions flechés à des éléments voir cours passer des methodes entre les composants de welc
export default class State extends Component {
    state = {

        famille: {
            membre1: {
                nom: 'ginette',
                role: 'maman',
                age: 25,
            },
            membre2: {
                nom: 'jean',
                role: 'papa',
                age: 27,
            },
            membre3: {
                nom: 'Paulinette',
                role: 'fille',
                age: 2,
            },
            membre4: {
                nom: 'Geaorge',
                role: 'fils',
                age: 7,
            },


        }

    }

    render() {
console.log('famille',this.state.famille);

        return (
            <>

            </>
        )

    }
}