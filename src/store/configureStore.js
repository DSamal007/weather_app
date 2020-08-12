import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

//import reducers
import countriesReducer from '../reducers/countriesReducer';
import citiesReducer from '../reducers/citiesReducer';
import citiesWeatherDataReducer from '../reducers/citiesWeatherDataReducer';

const configureStore = () => {
    const store = createStore(combineReducers({        
        countries: countriesReducer,
        cities: citiesReducer,
        citiesWeatherData : citiesWeatherDataReducer            
    }),composeWithDevTools(applyMiddleware(thunk)))
    return store
}

export default configureStore