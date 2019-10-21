import React, { Component } from 'react'




import Form from './Components/Form'
import Weather from './Components/Weather'

const API_KEY = 'cca1c9dd2e99915f4619d130aa75375c';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
   getWeather = async (e) => {
     e.preventDefault();
     const city = e.target.elements.city.value;
     const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country) {
      console.log(data);
      this.setState({
        temperature: data.list[0].main.temp,
        city: data.city.name,
        country: data.city.country,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        error: ''
      });
    }

  }
  render() {
    return (
      <div>
        
        <Form getWeather={this.getWeather} />
        <Weather
         temperature={this.state.temperature}
         city={this.state.city}
         country={this.state.country}
         humidity={this.state.humidity}
         description={this.state.description}
         error={this.state.error}
         
         />
      </div>
    )
  }
}

export default App
