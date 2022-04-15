import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "./data";
import product from "../assets/product.png";
import shop from "../assets/shop.svg";
import { mobile } from "../responsive";

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    return (
      <SubContainer key={product.id}>
        <Wrapper>
        <Images>
          <Image src={product.gallery[0]} />
          <Icon>
            <Circle>
              <Link to='/product'>
              <Cart src={shop} alt="shoping" />
              </Link>
            </Circle>
          </Icon>
        </Images>
        <Info>
          <Title>{product.name}</Title>
       
          <SubTitle>{product.prices[0].currency.symbol} {product.prices[0].amount}</SubTitle>
     
        </Info>
        </Wrapper>
      </SubContainer>
    );
  }
}


const Wrapper =styled.div`

`
const Circle = styled.div`
  opacity: 0;
  border-radius: 50%;
  background-color: #5ece7b;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  transition: all 0.5s ease;
  padding: "10px";
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Images = styled.div`
  display: flex;
`;

const Icon = styled.div`
  position: absolute;
  bottom: 0.5;
  margin-top: 270px;
  margin-left: 230px;

  ${mobile({
    marginTop: "270px",
    marginLeft: "230px",
  })}
`;

const SubContainer = styled.div`
  display: flex;
  flex: 1 1 30%;
  height: 60vh;
  margin: 5px;
  padding: 5px;
  margin-left: 5px;
  min-width: 280px;
  position: relative;
  background-color: white;
  margin-bottom: 10px;
  transition: box-shadow 0.3s;
  &:hover {
    border-radius: "10px";
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }

  transition: all 0.5s ease;
  &:hover ${Circle} {
    opacity: 1;
  }

  ${mobile({
    height: "54vh",
    overflow: "hidden",
    marginLeft: "30px",
  })}
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;

  ${mobile({
    objectFit: "contain",
    width: "300px",
    height: "300px",
  })}
`;
const Info = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 35px;
  ${mobile({
    top: "260px",
    marginBottom: "5px",
    padding: "10px",
  })}
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

const Cart = styled.img`
  object-fit: contain;
  width: 30px;
  height: 30px;
`;
