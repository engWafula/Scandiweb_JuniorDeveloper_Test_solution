import React, { Component } from 'react'
import styled from 'styled-components'
import product from '../assets/product.png'
import {mobile} from '../responsive'


export default class Cart extends Component {
  render() {
    return (
      <Container>
       
       <Heading>Cart</Heading>
      <Line/>  
      <CartCard>
      {/* <CartImageHolder>
        
      </CartImageHolder> */}
      <InfoContainer>
      <Title>Appolo</Title>
            <SubTitle>Running Short</SubTitle>
            <PriceTitle>$50</PriceTitle>
            <FilterSize>
             <SizeOption>S</SizeOption>
             <SizeOption>M</SizeOption>
            </FilterSize>
      </InfoContainer>
     

    
      <CartQuantity>
        <Buttons>
          <QuantityButtonDecrement

          >
            -
          </QuantityButtonDecrement>
          <Quantity>2</Quantity>
          <QuantityButtonIncrement

          >
            +
          </QuantityButtonIncrement>
         
        </Buttons>

        <CartImage src={product} alt='changeme' />
      </CartQuantity>

   
      {/* <CartCost>
      
      </CartCost> */}
    </CartCard>
    <Line/>  
    </Container>
    )
  }
}

const Container = styled.div`

${mobile({
  padding:'15px',
  flexDirection:'column',
  marginTop:'15px'

  })}
`

const CartCard = styled.div`

padding: 50px;
display:flex;
align-items:flex-end;
justify-content:space-between;

${mobile({
  padding:'15px',
  flexDirection:'column',
  marginTop:'20px',
  alignItems:'center',
  justifyContent:'center'

  })}

`;

const CartImageHolder = styled.div`
  display: flex;
  height: 100px;
  flex-diretion: column;
  justify-content: center;
`;

const CartImage = styled.img`
height: 185px;
width: 141px;
left: 1057px;
top: 281px;
border-radius: 0px;

${mobile({
top:'150px',
left:'2000px',
width:'200px'

  })}

  
`;

const CartName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    grid-area: name;
  }
`;

const CartPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    grid-area: price;
  }
`;

const CartQuantity = styled.div`
  display: flex;
  flex-direction:row;
  flex:1;
padding:0 40px;
align-items:center;
margin-left:50px;

padding-left:100px;


${mobile({
  padding:'0 10px',
  marginBottom:'20px',
  padding:'15px',
  flexDirection:'column',
  marginTop:'5px',
  alignItems:'center',
  justifyContent:'center',
  paddingLeft:'10px',
  marginLeft:'5px',
  alignItems:'flex-start',
 left:'10px',
 marginRight:'100px'

  })}
`;

const CartCost = styled.div`
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    grid-area: cost;
  }
`;

const QuantityButtonDecrement = styled.div`
border: 1px solid #1D1F22;
  background: white;
  padding: 0px 7px;
  cursor: pointer;
  margin-bottom: 25px;
  text-align: center;
  &:hover {
    
    border:none;
    background:red;
  }



  ${mobile({
    padding:'0px 5px',
    marginBottom:'0px',
    maxWidth:'20px',
    marginLeft:'10px',
    height:'20px'
     })}
`;

const Quantity = styled.p`
  max-width: 35px;
  text-align: center;
  padding: 50px;
  margin-bottom: 30px;
  padding: 0px 7px;
 


  ${mobile({
    marginTop:'10px',
    maxWidth:'10px',
    marginLeft:'10px',
    padding:'20px',
    paddingTop:'46px'
     })}
`;

const InfoContainer = styled.div`
flex:1;
padding:0 30px;
margin-right:50px;
padding-right:100px;

${mobile({
justifyContent:'center',
alignItems:'center',
marginLeft:'30px',
paddingLeft:'20px'
   })}
`

const QuantityButtonIncrement = styled.div`
border: 1px solid #1D1F22;
  background: white;
  color: #1D1F22;
  padding: 0px 7px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 0px;
  &:hover {
  background: linear-gradient(316.98deg, #52D67A 16.88%, #5AEE87 84.04%);

    border: none;
  
  }



  ${mobile({
    padding:'0px 5px',
    marginBottom:'0px',
    maxWidth:'20px',
    marginLeft:'10px',
    height:'20px'
     })}
`;

const DeleteButton = styled.div`
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease;
    filter: invert(76%) sepia(76%) saturate(2224%) hue-rotate(295deg) brightness(87%) contrast(98%);
  }
`;

const StyledLink = styled.p`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right:20px;
  height: 185px;
  ${mobile({
    padding:'15px',
    flexDirection:'row',
    marginTop:'10px',
    paddingLeft:'0px',
    marginRight:'10px',
    height:'50px',
    justifyContent:'center',
    alignItems:'center'
  
    })}

`;


const Title=styled.h1`
font-family: Raleway;
font-size: 30px;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;


`
const SubTitle=styled.h2`
font-family: Raleway;
font-size: 30px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;
text-align: left;


`


const FilterSize=styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
`

const SizeOption=styled.div`
margin-right:20px;
align-items: center;
justify-content: center;
border: 1px solid #A6A6A6;
box-sizing: border-box;
padding: 10px;
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

width: 50px;
height: 18px;
left: 929px;
top: 384px;

font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;

`

const Line = styled.div`
height: 1px;
width: 1097px;
left: 100px;
top: 259px;
border-radius: 0px;
background: #E5E5E5;

${mobile({
  width:'500px',
  left:'30px',
  top:'20px'

  })}
`

const Heading =styled.h1`
font-family: Raleway;
font-size: 42px;
font-weight: 400;
align-items: center;
margin:3px;
margin-top:15px;
margin-bottom:30px;
margin-left:8px;
${mobile({
 fontSize:'30px',
 fontWeight:'300px',
 margin:'10px',
 marginTop:'8px',
 marginBottom:'20px',
 marginLeft:'100px'

  })}

`