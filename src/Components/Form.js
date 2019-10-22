import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
          <form style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}} onSubmit={this.props.getWeather}>
              <input type='text' name='city' placeholder='City' />
              <input type='text' name='country' placeholder='Country' />
              <button>Get Weather</button>
          </form>  
        );
    }
}

export default Form
