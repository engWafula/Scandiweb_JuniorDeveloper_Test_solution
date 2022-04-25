import React, { Component } from "react";
import styled from "styled-components";
import shop from "../assets/shop.svg";
import product from '../assets/product.png'
import { Link } from "react-router-dom";
import  {connect} from  'react-redux'



class MiniCart extends Component {
  handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => {
    return (
   
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick("DropDown")}>
          <Cart>
          <img src={shop} alt="shoping" />
          </Cart>
          </Dropbtn>
          <DropDownContent>
            <Title>My Bag,{this.props.numberCart} items</Title>
           <Wrapper>

           <CartCard>
      {/* <CartImageHolder>
        
      </CartImageHolder> */}
      <InfoContainer>
      <SubTitle>Appolo</SubTitle>
            <SubTitle>Running</SubTitle>
            <PriceTitle>$50</PriceTitle>
            <FilterSize>
             <SizeOption>S</SizeOption>
             <SizeOption>M</SizeOption>
            </FilterSize>
            <PriceTotal>Total</PriceTotal> 
          
            <ViewBag>
     
              <Heading>
              VIEW BAG
                </Heading>
           
              </ViewBag> 
            
      </InfoContainer>
  
     
    
      
      <CartQuantity>
        <Buttons>
          <QuantityButtonDecrement

          >
            -
          </QuantityButtonDecrement>
          <Quantity>{this.props.numberCart}</Quantity>
          <QuantityButtonIncrement

          >
            +
          </QuantityButtonIncrement>
          <PriceTotal>$100</PriceTotal> 
          <CheckOut><ButtonTitle>CHECK OUT</ButtonTitle></CheckOut>
        </Buttons>
       
        <CartImage src={product} alt='changeme' />
      
      </CartQuantity>

     
    </CartCard>
           </Wrapper>
          </DropDownContent>
        </DropDownLi>
    
    );
  };
}
const mapStateToProps = state =>{
  return{
      numberCart:state.cart.numberCart
  }
}
export default connect(mapStateToProps,null)(MiniCart)


const ButtonTitle=styled.h4`
position: static;
width: 100%;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 10px;
padding:10px;
align-items: center;
text-align: center;
text-transform: uppercase;
color: white;
`

const Heading= styled.h4`
position: static;
width: 100%;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 10px;
padding:10px;
align-items: center;
text-align: center;
text-transform: uppercase;
color: #1D1F22;
`
const CheckOut =styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:15px;
position:absolute;
width: 100px;
height: 20px;
left: 0px;
top: 120px;
background: #5ECE7B;
border: 1px solid #1D1F22;
box-sizing: border-box;
cursor: pointer;
border: none;


`
const ViewBag = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:15px;
position: absolute;
text-color:white;
color:white;
width: 100px;
height: 20px;
left: 0px;
top: 160px;
cursor: pointer;
background: #FFFFFF;
border: 1px solid #1D1F22;
box-sizing: border-box;

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

const PriceTotal = styled.h2`
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
margin-top:20px;


`



const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
 
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 40px;
  
width: 325px;
top: 55px;
border-radius: 0px;

`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  

  &:hover ${DropDownContent} {
    display: block;
  }
`;






const Title = styled.h2`
font-family: Raleway;
font-size: 16px;
font-weight: 700;
line-height: 26px;
letter-spacing: 0em;
text-align: right;
padding: 12px 10px;
text-decoration: none;
display: block;
text-align: left;
margin-bottom:-20px;

`


const Wrapper = styled.div`
display:flex;
padding:10px;
justify-content:space-evenly;
align-items:center;
margin-top:2px;
padding-top:3px;

`



const CartCard = styled.div`

padding: 25px;
display:flex;
align-items:center;
justify-content:center;


  @media (max-width: 700px) {
    grid-template-columns: 15% 35% 14% 22% 14%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 25% 17% 33% 25%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
      'image name name name'
      'image price quantity cost';
  }
`;


const CartImage = styled.img`
height: 100px;
width: 100px;
left: 10px;
top: 135px;
border-radius: 0px;
margin-bottom:50px;


  overflow: hidden;
  @media (max-width: 600px) {
    grid-area: image;
  }
`;





const CartQuantity = styled.div`
  display: flex;
  flex-direction:row;
  flex:1;
padding:0 40px;
align-items:center;
margin-left:10px;

padding-left:10px;


  @media (max-width: 600px) {
    grid-area: quantity;
  }
`;


const QuantityButtonDecrement = styled.div`
border: 1px solid #1D1F22;
  background: white;
  padding: 0px 3px;
  cursor: pointer;
  margin-bottom: 5px;
  text-align: center;
  
  &:hover {
   
    border:none;
    background:red;
  }
`;

const Quantity = styled.p`
  max-width: 35px;
  text-align: center;
  padding: 0px;
  margin-bottom: 30px;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    transition: all 0.2s ease;
  }
`;

const InfoContainer = styled.div`
flex:1;
padding:0 15px;
margin-right:15px;
padding-right:15px;
position:relative;

`



const QuantityButtonIncrement = styled.div`
border: 1px solid #1D1F22;
  background: white;
  color: #1D1F22;
  padding: 0px 3px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 0px;
  &:hover {
  background: linear-gradient(316.98deg, #52D67A 16.88%, #5AEE87 84.04%);

    border: none;
  
  }
`;



const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right:10px;
  height: 85px;
  position:relative;

`;

const SubTitle=styled.h2`
font-family: Raleway;
font-size: 16px;
font-weight: 300;
line-height: 5px;
letter-spacing: 0px;
text-align: left;



`


const FilterSize=styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
`

const SizeOption=styled.div`
margin-right:5px;
align-items: center;
justify-content: center;
border: 1px solid #A6A6A6;
box-sizing: border-box;
padding: 3px;
cursor:pointer;
transition : all 0.5s ease;

&:hover{
  cursor:pointer;
  transform:scale(1.1);
  background-color:black;
  color:white;
}
`



const PriceTitle =styled.h2`
font-family: Raleway;
font-size: 16px;
font-weight: 300;
line-height: 26px;
letter-spacing: 0px;
text-align: left;


`
