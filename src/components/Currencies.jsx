import React, { Component } from 'react'
import  styled from 'styled-components'
import {mobile} from '../responsive'
import drop from "../assets/drop.svg";
import {connect} from  'react-redux'
import {fetchCurrencies} from '../redux/actions'

 class Currencies extends Component {

  handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
    
  };

  componentDidMount() {
    this.props.fetchCurrencies();
   
  }
  render() {
    const allCurrencies = this.props.currencies
    return (
      <div>
         <Left>
          <Currency >$</Currency>
          <StyledUl>
          <DropDownLi>
          <Dropdown onClick={() => this.handleClick("DropDown")}>
          <img src={drop} alt="shoping" width={6} height={3} />
          </Dropdown>
          <DropDownContent>
          {allCurrencies.map((currency)=>(
       <SubA key={currency.symbol} onClick={() => this.handleClick("Link1")}>{currency.symbol} {currency.label}</SubA>
 ))
          }
          </DropDownContent>
          </DropDownLi>
          </StyledUl>
          </Left>
      </div>
    )
  }
}

const mapStateToProps=state=>({
  currencies: state.currencies.currency
})



export default connect(mapStateToProps,{fetchCurrencies})(Currencies)

const Wrapper = styled.div`
   padding: 10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;

  ${mobile({
    padding: '10px 0px'
  
    })}
`;







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
