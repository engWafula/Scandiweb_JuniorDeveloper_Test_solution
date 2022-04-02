import React, { Component } from 'react'
import  styled from 'styled-components'
import data from './data'
import CategoryItem from './CategoryItem'


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
`
