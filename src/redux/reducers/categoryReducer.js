import { FETCH_CATEGORY} from "../types";

const initialState={
    products:[]
}

export default function (state=initialState,action){

  switch (action.type){
  
    case FETCH_CATEGORY: 
        return {
            ...state,
           products: action.payload
        }
      default:
          return state;
  }

}