import React, { Component } from 'react'
import axios from 'axios'


class Newer extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response);
            this.setState({users: response.data})
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map(user => 
                        <React.Fragment key={user.id}>
                            <li style={{backgroundColor: 'darkblue', color: 'white'}}>{user.id}</li>
                            <li style={{backgroundColor: 'yellow', color: 'blue'}}>{user.name}</li>
                            <li style={{backgroundColor: 'green', color: 'white'}}>{user.username}</li>
                            <li style={{backgroundColor: 'black', color: 'white'}}>{user.email}</li>
                            <br />
                            <hr />

                        </React.Fragment>

                    )}
                </ul>
            </div>
        );
    }
}

export default Newer
