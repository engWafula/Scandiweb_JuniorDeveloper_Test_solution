import React, { Component } from "react";
import styled from "styled-components";
import data from "./data";
import product from "../assets/product.png";
import shop from "../assets/shop.svg";

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item } = this.props;
    return (
      <SubContainer key={item.id}>
        <Images>
        <Image src={product} />
         <Icon>
         <Circle>
         <Cart src={shop} alt="shoping" />
         </Circle>
         </Icon>
         </Images>
        <Info>
          <Title>{item.name}</Title>
          <SubTitle>{item.price}</SubTitle>
        </Info>
      </SubContainer>
    );
  }
}


const Circle =styled.div`
opacity:0;
border-radius:50%;
background-color: #5ECE7B;
width: 35px;
height: 35px;
align-items:center;
justify-content:center;
position:absolute;
top:0;
left:0;
z-index:3;
display:flex;
transition : all 0.5s ease;

&:hover{
  cursor:pointer;
  transform:scale(1.1);
}
`

const Images=styled.div`
display:flex;
`

const Icon = styled.div`
position: absolute;
bottom:0.5;
margin-top:320px;
margin-left:290px;
`

const SubContainer = styled.div`
  display:flex;
  height: 70vh;
  margin:5px;
  padding: 5px;
  margin-left: 5px;
  min-width:280px;
  position:relative;
  background-color:white;

  transition: box-shadow .3s;
  &:hover{

    box-shadow: 0 0 11px rgba(33,33,33,.2); 
  }


  transition : all 0.5s ease;
  &:hover ${Circle }{
   opacity:1;
 
  }
`;
const Image = styled.img`
  width: 356px;
  height: 338px;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  bottom:0;
  margin-top:35px;
`;
const Title = styled.h1`
  position: static;
  height: 29px;
  left: 0px;
  right: 0px;
  top: 0px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  display: flex;
  align-items: center;

  /* --c-black */

  color: #1d1f22;
`;
const SubTitle = styled.h2`
  position: static;
  left: 0px;
  right: 0px;
  top: 0px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  display: flex;
  align-items: center;

  /* --c-black */

  color: #1d1f22;
`;

const Cart =styled.img`
object-fit:contain;
`