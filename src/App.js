import React, { useState } from 'react';
import Title from './components/sider';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';
import Error from './components/Error'

const API_KEY = '63410200ef9ffd44f210400340dd016';

const initialValues = [{temperature: '', city: '', country: '', humidity: '', description: ''}];

function App() {
  const [weather, setWeather] = useState(initialValues);
  const [ error, setError ] = useState({ show: false});
  const [visible, setVisible] = useState({show: false});
  
  

  const getWeather = async(event) => {
    event.preventDefault();
    const city = event.target.city.value;
    const country = event.target.country.value;
    if(city && country){
      setVisible({show: true});
      setError({show: false});
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
       setWeather({ temperature: data.main.temp, city: data.name, country: data.sys.country, humidity: data.main.humidity, description: data.weather[0].description});

    } else {
      setError({show: true, text: 'Please enter the values on the input'});
    }
      
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title/>
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={getWeather}/>
                {error.show && <Error error={error}/>}
                {visible.show && <Weather weather={weather}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
       
      
      
    </div>
  );
}

export default App;
