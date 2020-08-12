const citiesReducer = (state=[],action) => {
    switch(action.type){
        case 'SET_CITIES_SUCCESS': return [action.payload ] 
        case 'SET_CITIES_ERROR': return [action.payload ]
        default: return [...state]
    }
}
export default citiesReducer