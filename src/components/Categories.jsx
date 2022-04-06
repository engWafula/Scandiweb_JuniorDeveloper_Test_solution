import React, { Component } from 'react'
import  styled from 'styled-components'
import data from './data'
import CategoryItem from './CategoryItem'
import {mobile} from '../responsive'


export default class Categories extends Component {
  render() {
    return (
        <>
      
      <Container>
        {
            data.map(
                (item) => 
               
                (
                   
                  <CategoryItem item={item}/>
              
                )
                
            )
        }
      </Container>
      </>
    )
  }
}



const Container =styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between;
margin:50px;


${mobile({
 padding:'0px',
 margin:'0px'
})}
`
