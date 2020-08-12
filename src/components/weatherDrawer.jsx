import React from 'react';
import { Drawer } from 'antd';
import { connect } from 'react-redux';

let weatherData;
class WeatherDrawer extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  render(){
    if(this.props.citiesWeatherData && this.props.citiesWeatherData[0]){
        weatherData = this.props.citiesWeatherData[0]
    }
    return ( 
        <React.Fragment>
        <div>           
            { this.props.citiesWeatherData ? 
            <>
            <Drawer
                title={`Current Weather Data of city: ${weatherData && weatherData.location ? weatherData.location.name : null }`}
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.visible}
                >
                <img alt="" src={weatherData && weatherData.current && weatherData.current.weather_icons ? weatherData.current.weather_icons[0] : null}/>
                <p>Temprature {weatherData && weatherData.current && weatherData.current.temperature ? weatherData.current.temperature + ' degree': null}</p>
                <p>Weather Description : {weatherData && weatherData.current &&  weatherData.current.weather_descriptions ? weatherData.current.weather_descriptions[0] : null}</p>
                
                </Drawer>
            </>: null
            
        }
        </div>      
        </React.Fragment>  
    );    
  }  
}


const mapStateToProps = (state) => {   
    return {
        citiesWeatherData: state.citiesWeatherData,      
    }
  }

export default connect(mapStateToProps)(WeatherDrawer);
