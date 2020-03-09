import React, { Component } from 'react'
/// manière la plus propre de faire, nottament pour le build à la fin. 

import AutreComposant from './AutreComposant'
// Le composant de type stateless est mieux pour la migration vers d'autres framework.
export const App = () => {

    
        return (
            <>
            {/* chaque component s'utilise comme ceci */}

            <App >
                
                {/* Un Component est une partie d'application , il peut etre de type classe ou de type fonctionnel 
                
                'class App extends Component'  veut dire je créé une classe qui s'appuis sur une autre classe
                
                
                */}
            </App>
            
            </>
        )
    

}





