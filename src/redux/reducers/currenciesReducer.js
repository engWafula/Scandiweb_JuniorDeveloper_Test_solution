import { FETCH_CURRENCIES} from "../types";

const initialState={
    currency:[]
}

export default function (state=initialState,action){

  switch (action.type){
  
    case FETCH_CURRENCIES: 
        return {
            ...state,
           currency: action.payload
        }
      default:
          return state;
  }

}