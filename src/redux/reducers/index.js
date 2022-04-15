import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import currenciesReducer from './currenciesReducer'


export default combineReducers(
    {
        category:categoryReducer,
        currencies:currenciesReducer
    }
)
