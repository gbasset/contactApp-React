import React from 'react'
import PropTypes from 'prop-types'
export default function Titre(props) {

    return (
        <>
            <h1 className='text-primary'> Contact</h1>
            {props.nom}
        </>
    )


}
Titre.ropTypes = {
    nom: PropTypes.string.isRequired
}
