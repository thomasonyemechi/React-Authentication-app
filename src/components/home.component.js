import React, {Component} from 'react';


export default class Home extends Component {

    state () {};


    render () {
        if(this.state.user){
            return (
                <h2>Hi {this.props.user.name} </h2>
            )
        }
        return (
            <h2>You are Not logged In</h2>
        )
    }
}