// import axios from 'axios';

//on successful set countries
export const setCitiesWeatherData = ( data ) => {
    return { type:'SET_CITIES_WEATHER_DATA_SUCCESS', payload: data }
}

//on error setting the countries
export const setCitiesWeatherDataError = (error) => {
    return { type:'SET_CITIES_WEATHER_DATA_ERROR', payload: error }
}

//Action - for get countries
export const startSetCitiesWeatherData = ( data ) => {
    return (dispatch) => {        
        console.log(data,"data")
        dispatch(setCitiesWeatherData(data))
    }       
}