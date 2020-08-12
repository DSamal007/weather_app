const citiesWeatherDataReducer = (state=[],action) => {
    switch(action.type){
        case 'SET_CITIES_WEATHER_DATA_SUCCESS': return [action.payload ] 
        case 'SET_CITIES_WEATHER_DATA_ERROR': return [action.payload ]
        default: return [...state]
    }
}
export default citiesWeatherDataReducer