import React, { Component } from 'react'
import { Consumer } from '../../Context'

export default class AddContact extends Component {
    state = {
        nom: ' ',
        email: ' ',
        tel: ' '
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (dispatch, e) => {
        e.preventDefault()
        console.log('this.state', this.state)
        const newContact = {
            id: Math.floor(Math.random() * Math.floor(10145454645556)),
            nom: this.state.nom,
            email: this.state.email,
            tel: this.state.tel,
        }
        dispatch({ type: "addContact", payload: newContact })
        this.setState(
            {
                nom: ' ',
                email: ' ',
                tel: ' '
            })
        this.props.history.push('/')
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (<div className="card mb-3">
                        <div className="card-header"> Ajouter un contact </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                                <div className="form-group">
                                    <label htmlFor="nom"> Nom </label>
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Votre nom..."
                                        name="nom"
                                        value={this.state.nom}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"> Email </label>
                                    <input type="email" className="form-control form-control-lg"
                                        placeholder="Votre email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}>

                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tel"> Tel </label>
                                    <input type="tel" className="form-control form-control-lg"
                                        placeholder="Votre telephone"
                                        name="tel"
                                        value={this.state.tel}
                                        onChange={this.onChange}>
                                    </input>
                                </div>
                                <input type="submit" value="Ajouter un contact" className="btn btn-block btn-primary" />

                            </form>
                        </div>
                    </div>)
                }}
            </Consumer>
        )
    }

}