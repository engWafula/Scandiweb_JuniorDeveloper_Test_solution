import React, { Component } from 'react'
import  styled from 'styled-components'
import pic from "../assets/pic.svg";
import pic1 from "../assets/cross.svg";
import shop from "../assets/shop.svg";
import drop from "../assets/drop.svg";




export default class Navbar extends Component {
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
        <img src={pic1} alt="shoping" />
        </Pic>
        </CentralContent>
        <RightContent>
          <Left>
          <Currency>$</Currency>
          <Dropdown>
          <img src={drop} alt="shoping" width={6} height={3} />
          </Dropdown>
          </Left>
          <Cart>
          <img src={shop} alt="shoping" />
          </Cart>
        </RightContent>
        </Wrapper>
      </Container>
    )
  }
}


const Container = styled.div`
  height: 50px;
  background-color: white;
`;

const Wrapper = styled.div`
   padding: 10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const LeftContent= styled.div`
flex:1;
display:flex;
align-items:center;

`
const Title = styled.h1`
  position: static;
  height: 20px;
  left: 0%;
  right: 0%;
  top: calc(50% - 20px / 2 - 16px);
  margin-left:25px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
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
const Dropdown = styled.div`
margin-left:10px;
cursor:pointer;
align-items:center;
`