import React, { Component } from 'react'
import axios from 'axios'

class Bew extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            address: [],
            button: 'Fetch'
        }
    }

    handleState = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response.data);
            this.setState({users: response.data, button: 'Fetching...'})
            console.log(this.state.users)
        })
    }

    address = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({address: response.data.address})
            console.log(response.data.address);
            // this.setState({address: response.data.address})
        })
      
    }

    render() {
        return (
            <div>
                <button onClick={this.handleState}>{this.state.button}</button>
                {this.state.users.map(user =>                   
                        <ul key={user.id} style={{backgroundColor: 'darkblue', color: 'white', padding: 'auto', margin: 'auto'}}>
                        <li>Name: {user.name}</li>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                        <button onClick={this.address}>Address{this.state.address.map(addres => 
                            <li>Suite: {addres.street}</li>
                       )}</button>
                        <br />
                        </ul>
                   
                   
                
                )}
            </div>
        )
    }
}

export default Bew
