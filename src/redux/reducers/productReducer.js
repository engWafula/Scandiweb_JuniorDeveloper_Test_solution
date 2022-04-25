import { FETCH_PRODUCT} from "../types";

const initialState={
    product:[]
}

export default function (state=initialState,action){

  switch (action.type){
  
    case FETCH_PRODUCT: 
        return {
            ...state,
           product: action.payload
        }
      default:
          return state;
  }

}