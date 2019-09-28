import React from 'react'

const Weather = (props) =>{
    return(
		
        <div className="weather__info">
			<p className="weather__key">location: <span className="weather__value" > { props.weather.city }, { props.weather.country }</span></p>
			<p className="weather__key">temperature: <span className="weather__value" >  { props.weather.temperature }°	</span></p>
			<p className="weather__key">humidity: <span className="weather__value" >  { props.weather.humidity }% </span></p>
			<p className="weather__key">description: <span className="weather__value" >  { props.weather.description } </span></p>

		</div>
		
    );
}

export default Weather;