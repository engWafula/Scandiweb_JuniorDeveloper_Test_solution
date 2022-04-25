import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import currenciesReducer from './currenciesReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export const rootReducer =  combineReducers(
    {
        category:categoryReducer,
        currencies:currenciesReducer,
        product:productReducer,
        cart:cartReducer
    }
)


const configStorage = {
    key: 'root',
    storage,
    whitelist: ['cartData']
  };


  export default persistReducer(configStorage, rootReducer);