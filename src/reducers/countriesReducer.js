const countriesReducer = (state={},action) => {
    switch(action.type){
        case 'SET_COUNTRIES_SUCCESS': return { ...action.payload }
        case 'SET_COUNTRIES_ERROR': return {...action.payload}
        default: return {...state}
    }
}
export default countriesReducer