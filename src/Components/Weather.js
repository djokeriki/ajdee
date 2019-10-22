import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                <h1 style={{backgroundColor: 'darkblue', color: 'white', textAlign: 'center'}}>Weather Finder</h1>
                <p style={{padding: '10px', marginTop: '0', backgroundColor: 'darkred', color: 'white', textAlign: 'center', fontWeight: 'bolder'}}>Find out temperature, conditions, and more...</p>
              { this.props.city && this.props.country && <p style={{backgroundColor: 'yellow', color: 'green'}}>Location: { this.props.city }, { this.props.country }</p> }
              { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
              { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
              { this.props.description && <p>Conditions: { this.props.description }</p> }
            </div>
        )
    }
}

export default Weather
