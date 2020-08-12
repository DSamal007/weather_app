import axios from 'axios';

//on successful set countries
export const setCountries = (countries) => {
    return { type:'SET_COUNTRIES_SUCCESS', payload: countries }
}

//on error setting the countries
export const setCountriesError = (error) => {
    return { type:'SET_COUNTRIES_ERROR', payload: error }
}


//Action - for get countries
export const startSetCountries = (  ) => {
    return (dispatch) => {        
        console.log("this is countries action")
        axios({
            "method":"GET",
            "url":"https://countries-cities.p.rapidapi.com/location/country/list",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"countries-cities.p.rapidapi.com",
            "x-rapidapi-key":"1598b3422emsh8a1b5fd88184687p11f938jsn55210e1fcd2c",
            "useQueryString":true
            },"params":{   
            "format":"json"
            }
            })
        .then((response)=>{            
            if(response && response.data){
                const countries =  response.data.countries               
                dispatch(setCountries(countries));                
            }
        })
        .catch((error)=>{
            console.log(error, "response")
        })
    }       
}