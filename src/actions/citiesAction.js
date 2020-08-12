import axios from 'axios';

//on successful set countries
export const setCities = (cities) => {
    return { type:'SET_CITIES_SUCCESS', payload: cities }
}

//on error setting the countries
export const setCitiesError = (error) => {
    return { type:'SET_CITIES_ERROR', payload: error }
}


//Action - for get countries
export const startSetCities = ( cityId ) => {
    return (dispatch) => {        
        // console.log(cityId,"cityid")
            axios({
                "method":"GET",
                "url":`https://countries-cities.p.rapidapi.com/location/country/${cityId}/city/list`,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"countries-cities.p.rapidapi.com",
                "x-rapidapi-key":"1598b3422emsh8a1b5fd88184687p11f938jsn55210e1fcd2c",
                "useQueryString":true
                },"params":{
                "page":"2",
                "per_page":"06",
                "format":"json",
                // "population":"15000"
                }
                })
            .then((response)=>{
                console.log(response, "response")
                if(response && response.data && response.data.cities){
                    dispatch(setCities(response.data.cities))
                }
                })
            .catch((error)=>{
                console.log(error)
                })
    }       
}