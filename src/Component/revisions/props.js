import React, { Component } from 'react'

import AutreComposant from './AutreComposant'
export class App extends Component {


    render() {
        return (

            <App >
                {/* this props.children permet d'afficher et utiliser les choses à l'intérieur d'un composant comme :
                <Text> 
                <p> </p>
                </Text>
                Là on pourras afficher le p grace au props.children                
                */}
                <AutreComposant nom='jiji' />

                {/* Un props est un paramètre que l'on vas passer à un component tel un attribut que l'on passe à un élément HTML , on peut appeler la props dans les autres component avec : const = (props) => {  return (<p> props.nom </p>) } ou bien en faisant une fonction 
                
                const = (props) => { const name = props.nom return ( <p> name </p>) }
    
               troisième manière de faire : 
               const = ({nom}) => {  return (<p> nom </p>) }
                la props est renvoyée sous forme d'objet .


                Dans un composant de type classe, il faut marquer this.props.leNomDeLaProps

                Possibilité d'importer toutes les props également en la destrucrutant dans un composant de type classe, 
                const {titre, auteur} = this.props

 */}
                <AutreComposant nom='fredo' />


                {this.props.children}
            </App>
        )
    }

}


