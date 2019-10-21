import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                <h1>Weather Finder</h1>
                <p>Find out temperature, conditions, and more...</p>
              { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
              { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
              { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
              { this.props.description && <p>Conditions: { this.props.description }</p> }
            </div>
        )
    }
}

export default Weather
