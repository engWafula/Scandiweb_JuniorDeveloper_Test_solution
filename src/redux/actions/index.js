import { FETCH_CATEGORY,
  FETCH_CURRENCIES,
  FETCH_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
  UPDATE_CART
} from "../types";

const baseURL='http://localhost:4000/'
const CATEFORIES = `
{
    categories{
      name,
      products{
        brand,
        inStock,
        description,
        category,
        gallery,
        id,
        name,
        prices{
          amount,
          currency{
            label,
            symbol
          }
        }
      }
    }
  }
`

const CURRENCIES=`
{
    currencies{
      label,
      symbol
    }
  }
`


// const PRODUCT = (id) => {
//   return `{
//     product(id:${id}){
//         id,
//           name,
//           description,
//       gallery,
//       brand,
//       brand,
//       prices{
//         amount,
//         currency{
//           label,
//           symbol
//         }
        
//       }
//     }

//   }`
// }


const PRODUCT=`
{
  product(id:"apple-airpods-pro"){
     id,
       name,
        description,
    gallery,
    brand,
    brand,
    prices{
      amount,
          currency{
            label,
            symbol
          }
      
    }
  }
}
`
export const fetchCategory=()=>dispatch=>{
         
        fetch(baseURL,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                query:CATEFORIES
            })
        })
        .then(response => response.json())
        .then(data => dispatch({
            type:FETCH_CATEGORY,
            payload:data.data.categories
        }))
    }


    export const fetchCurrencies=()=>dispatch=>{
         
        fetch(baseURL,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                query:CURRENCIES
            })
        })
        .then(response => response.json())
        .then(data => dispatch({
            type:FETCH_CURRENCIES,
            payload:data.data.currencies
        }))
    }
    export const fetchProduct=()=>dispatch=>{
         
      fetch(baseURL,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
              query:PRODUCT
          })
      })
      .then(response => response.json())
      .then(data => dispatch({
          type:FETCH_PRODUCT,
          payload:data.data.product
      }))
  }


  export function GetNumberCart(){
    return{
        type:GET_NUMBER_CART
    }
}

export function AddCart(ITEM_ID){
    return {
        type:ADD_CART,
        payload:{
         id:ITEM_ID
        }
    }
}
export function UpdateCart(payload){
    return {
        type:UPDATE_CART,
        payload
    }
}
export function DeleteCart(ITEM_ID){
    return{
        type:DELETE_CART,
        payload:{
          id:ITEM_ID
         }
    }
}

export function IncreaseQuantity(payload){
    return{
        type:INCREASE_QUANTITY,
        payload
    }
}
export function DecreaseQuantity(payload){
    return{
        type:DECREASE_QUANTITY,
        payload
    }
}

