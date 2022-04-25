import React, { Component } from 'react'
import  styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {mobile} from '../responsive'
import {connect} from  'react-redux'
import {fetchCategory} from '../redux/actions'

 class Categories extends Component {

  componentDidMount() {
    this.props.fetchCategory();
   
  }


  render() {
    const product = this.props.category
   
    return (
        <>
      
      <Container>
        {
            product.map(
                (item,index) => 
               
                {

                  return(
                  <Wrapper key={index}>
                    {
                  item.products.map( (product,index)=>(   
                  <CategoryItem product={product} key={index}/>
                  )
                  )
                    }
                  </Wrapper>
                  )
                }
                
            )
        }
      </Container>
      </>
    )
  }
}

// Categories.propTypes = {
//   fetchCategory:PropTypes.func.isRequired,
//   category:PropTypes.array.isRequired
// }

const mapStateToProps=state=>({
  category: state.category.products
})

export default connect(mapStateToProps,{fetchCategory})(Categories);


const Container =styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-evenly;
margin:50px;
flex-direction:row;

${mobile({
 padding:'0px',
 margin:'0px'
})}
`
const Wrapper= styled.div`
flex: 0 0 33.3333%;

`