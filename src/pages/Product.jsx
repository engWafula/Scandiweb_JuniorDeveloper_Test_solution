import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  styled from 'styled-components'
import Navbar from '../components/Navbar'
import product from '../assets/product.png'
import {mobile} from '../responsive'
import {connect} from  'react-redux'
import {fetchProduct,AddCart} from '../redux/actions'
import HTMLReactParser from 'html-react-parser';


 class Product extends Component {
  componentDidMount() {
    this.props.fetchProduct();
   
  }
  render() {
    const productDetails = this.props.product
    const id =this.props.product.id
    console.log(id)
    return (
      <Container>
      
       
        <Wrapper>
          <ImageConatiner>
            <Image src={productDetails.gallery} />
          </ImageConatiner>

          <InfoContainer>
            <Title>{productDetails.brand}</Title>
            <SubTitle>{productDetails.name}</SubTitle>

            <Title>Size:</Title>
            <FilterSize>
    
             <SizeOption>S</SizeOption>
             <SizeOption>M</SizeOption>
    
            </FilterSize>
            <PriceTitle>Price:</PriceTitle>
            {/* <Price>{productDetails.prices[0].currency.symbol} {productDetails.prices[0].amount}</Price> */}
            {/* <Link to='/cart'> */}
            <Button onClick={()=>this.props.AddCart()}>ADD TO CART</Button>
            {/* </Link> */}
             {/* <Desc> {HTMLReactParser(productDetails.description)}</Desc>   */}
          </InfoContainer>
        </Wrapper>
      </Container>
    )
  }
}

const mapStateToProps=state=>({
  product: state.product.product
})

function mapDispatchToProps(dispatch){
  return{
      fetchProduct:()=>dispatch(fetchProduct()),
      AddCart:item=>dispatch(AddCart(item))
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product )

const Container=styled.div`



`
const Wrapper = styled.div`
padding: 50px;
display:flex;
align-items:center;
justify-content:center;

${mobile({
  padding:'15px',
  flexDirection:'column',


  })}

`
const ImageConatiner = styled.div`
flex:1;
margin-left:100px;
${mobile({
  marginLeft:'45px',
  alignItems:'center',
  justifyContent:'center',
  marginTop:'20px'

  })}
`

const Image = styled.img`
width:90%;
object-fit:cover;
${mobile({
width:'70%',
objectFit:'contain'
  })}
`



const Price =styled.h1`
font-family: Raleway;
font-size: 24px;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;


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

const InfoContainer = styled.div`
flex:1;
padding:0 20px;
`

const Button =styled.button`

padding: 10px 20px;
font-size: 1rem;
color:white;
font-weight: 600;
cursor: pointer;
border: none;
margin-top:10px;
background-color:#5ECE7B;
width: 292px;
height: 52px;
left: 929px;
top: 478px;


`
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
const Desc =styled.p`

width: 100%;
height: 103px;
left: calc(50% - 292px/2 + 355px);
bottom: 72px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 159.96%;


color: #1D1F22;

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

const Images =styled.div`
display:flex;
display:flex;
`
const SideImage =styled.img`
width:10%;
object-fit:contain;
flex-direction:column;

`