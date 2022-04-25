import React, { Component } from 'react'
import pic from "../assets/pic.svg";
import pic1 from "../assets/cross.svg";
import shop from "../assets/shop.svg";
import  styled from 'styled-components'
import MiniCart from './MiniCart'
import {mobile} from '../responsive'
import Currencies from './Currencies'
import  {connect} from  'react-redux'


 class Navbar extends Component {


  render() {
    return (
      <Container>
        <Wrapper>
        <LeftContent>
          <Title >WOMEN</Title >
          <Title >MEN</Title >
          <Title >KIDS</Title >
        </LeftContent>
        <CentralContent>
          <Pic>
        <img src={pic} alt="shoping" />
        </Pic>
        </CentralContent>
        <RightContent>
          <Currencies/>
          <Basket>
          <MiniCart/> 
          <Number>
        {this.props.numberCart}
          </Number>
          </Basket>
        </RightContent>
        </Wrapper>
      </Container>
    )
  }
}

const mapStateToProps = state =>{
  return{
      numberCart:state.cart.numberCart
  }
}
export default connect(mapStateToProps,null)(Navbar)


const Container = styled.div`
  height: 50px;
  ${mobile({
    height: "50px",
  })}
`;


const Number = styled.div`
display:flex,
opacity: 0;
border-radius: 50%;
background-color: black;
text-align:center;
color:white;
width: 20px;
height: 20px;
align-items: center;
justify-content: center;
position: absolute;
top: 14px;
right: 45px;
z-index: 5;
transition: all 0.5s ease;
padding: 4px;
${mobile({
  padding:'5px',
  width: '15px',
height: '15px',
right:'30px',
top:'23px'

  })}

`

const Basket =styled.div`
${mobile({
  marginBottom:'2px'

  })}
`

const Wrapper = styled.div`
   padding: 10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;

  ${mobile({
    padding: '10px 0px'
  
    })}
`;

const LeftContent= styled.div`
flex:1;
display:flex;
align-items:center;

`
const Title = styled.h1`
  position: static;
  height: 20px;
  top: calc(50% - 20px / 2 - 16px);
  margin-left:25px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  cursor:pointer;



  &:hover  {
    border-bottom:3px solid  #5ece7b;

  }

  ${mobile({
    height: '15px',
    fontWeight: '400',
    fontSize:'8px'
    })}
`;
const CentralContent= styled.div`
flex:1;
display:flex;
justify-content: center;
align-items: center;
`
const RightContent= styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
margin-right:30px;
`

const Pic = styled.div`
height: 28.619224548339844px;
width: 31.181222915649414px;
left: 0px;
top: 1.3076171875px;
border-radius: 0px;

${mobile({
   display:'none'

  })}

`

const Cart = styled.div`
height: 13.008859634399414px;
width: 20px;
left: 0px;
top: 1.3076171875px;
border-radius: 0px;
font-size:14px;
cursor:pointer;
align-items:center;
`


const Currency= styled.h1`
font-family: Raleway;
font-size: 18px;
font-weight: 500;
line-height: 29px;
letter-spacing: 0em;
text-align: left;

`

const Left = styled.div`
display:flex;
align-items:center;
margin-right:20px;
`


const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
 align-items:center;
 justify-content:center;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
width: 114px;
right: 100px;
top: 55px;


`;

const Dropdown = styled.div`
margin-left:10px;
cursor:pointer;
align-items:center;

display: inline-block;
${mobile({
  padding: '10px 0px',
  marginBottom:'10px'
  })}

`

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  &:hover {
    background-color: #f1f1f1;
    cursor:pointer;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const DropDownLi = styled(Wrapper)`
  display: inline-block;
  &:hover {
   
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;
