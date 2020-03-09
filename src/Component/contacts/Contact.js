import React, { Component } from 'react'
import { Consumer } from '../../Context'

export default class Contact extends Component {
    state = {
        show: false,
    }

    handleclick = () => {
        this.setState({ show: !this.state.show })
    }
    supprimerContact = (id,dispatch) => {
dispatch({type: 'deleteContact', payload: id})
    }
    render() {
        const { email, tel, nom } = this.props;
        return (
            <Consumer>
                {value => {
                    return (

                        <div className='card card-body mb-3 text-center'>

                            <h4> {nom}&nbsp;  <i style={{ cursor: 'pointer' }} className='fas fa-sort-down' onClick={this.handleclick}> </i>
                                <i className='fas fa-times' style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={()=> this.supprimerContact(this.props.id, value.dispatch)}></i></h4>
                            {this.state.show ? (<ul className='card card-body mb-3'>
                                <li className='list-group-item'> Email : {email} </li>
                                <li className='list-group-item'> Telephone : {tel} </li>
                            </ul>) : null}

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
