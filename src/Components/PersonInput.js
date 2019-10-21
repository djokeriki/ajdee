import React, { Component } from 'react'
import axios from 'axios';

class PersonInput extends Component {
    constructor() {
        super();
        this.state = {
            id: 0
        }
    }
    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(response => {
            console.log(response);
            console.log(response.data);
            

        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person ID:
                        <input type="number" name="id" onChange={this.handleChange}  />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}

export default PersonInput
