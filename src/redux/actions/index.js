import { FETCH_CATEGORY,FETCH_CURRENCIES } from "../types";

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
