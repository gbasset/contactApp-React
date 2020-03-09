import React, { Component } from 'react'
/// manière la plus propre de faire, nottament pour le build à la fin. 

import AutreComposant from './AutreComposant'

// tjrs penser à bien exporter le composant 
// tjrs mettre en Majuscule les éléments React pour les differencier des autres jsx
export class App extends Component {


    render()/// permet de rendre le jsx qui sera par la suite rendu sous forme de Javascript qui generera du html
    {
        return (
            <>
            {/* chaque component s'utilise comme ceci */}

            <App >
                
                {/* Un Component est une partie d'application , il peut etre de type classe ou de type fonctionnel 
                
                'class App extends Component'  veut dire je créé une classe qui s'appuis sur une autre classe
                l'utilité d'un composant est d'être réutilisé dans tte l'application .
                
                
                */}
            </App>
            
            </>
        )
    }

}





