import React, { Component } from 'react'
import  styled from 'styled-components'
import Navbar from '../components/Navbar'
import CartItem from "../components/CartItem";
import {mobile} from '../responsive'
export default class Cart extends Component {
  render() {
    return (
      <>
    
    <Container>
      <Wrapper>
       <CartItem/>
      </Wrapper>
    </Container>
    </>
  )
}
}



const Container =styled.div`

`
const Wrapper =styled.div`
display:flex;
padding:20px;
justify-content:space-evenly;
align-items:center;
margin-top:30px;

${mobile({
  padding:'40px',
  top:'0px',
 marginTop:'0px',
 alignItems:'center',
 justifyContent:'center',
 overflow:'hidden'

  })}
`




