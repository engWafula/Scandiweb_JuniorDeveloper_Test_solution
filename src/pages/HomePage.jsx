import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import  styled from 'styled-components'
export default class HomePage extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <Heading>Category Name</Heading>
       <Categories/>
      </div>
    )
  }
}


const Heading =styled.h1`
font-family: Raleway;
font-size: 42px;
font-weight: 400;
align-items: center;
margin:3px;
margin-top:15px;
margin-bottom:25px;
margin-left:30px;

`