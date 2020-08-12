import React, { useState }  from 'react';
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import { 
  Card, 
  Row, 
  Col, 
  Button 
} from 'antd';
import WeatherDrawer from './weatherDrawer';
import { startSetCitiesWeatherData } from '../actions/citiesWeatherDataAction';

const Home = ({ dispatch }) => {
  const cities = useSelector(state => state.cities[0]);
  const [state, setState] = useState({    
    visible: false,
    weatherData : []     
  })

  //get the current weather data
  const handleClick = (name) => {       
    axios.get(`http://api.weatherstack.com/current?access_key=0806e222c800e6526018c3e140605048&query=${name}`)
        .then(response=> {
        dispatch(startSetCitiesWeatherData(response.data)); 
        setState({visible: true, weatherData: response.data})       
        })
        .catch(err =>{
        console.log(err,"err")
        })
  }

  const handleClose = () => {
    setState({visible : false})
  }
  
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>        
        { cities && cities.length > 0  ? cities.map((city, index) => 
        <React.Fragment key={index}>
        <Col span={5}>
          <Card title={`City name : ${city.name}`} bordered={true} style={{ width:   250 , boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <p>Population : {city.population}</p>
        <Button type="primary" onClick={() => handleClick(city.name)}> Get Current Weather Data</Button> 
        </Card>
        <br/>
        </Col>
        </React.Fragment>)  : null}
        </Row>
        <WeatherDrawer 
          visible={state.visible}
          onClose={handleClose}

        />
      </div>
    );
  }


export default connect()(Home);