import React, { Component } from 'react'
import  styled from 'styled-components'
import data from './data'
import CategoryItem from './CategoryItem'
import {mobile} from '../responsive'
import {connect} from  'react-redux'
import {fetchCategory} from '../redux/actions'
import PropTypes from 'prop-types'

 class Categories extends Component {

  componentDidMount() {
    this.props.fetchCategory();
   
  }


  render() {
    const product = this.props.category
    console.log(product)
    return (
        <>
      
      <Container>
        {
            product.map(
                (item) => 
               
                {

                  return(
                  <div>
                    {
                  item.products.map( (product)=>(   
                  <CategoryItem product={product}/>
                  )
                  )
                    }
                  </div>
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


${mobile({
 padding:'0px',
 margin:'0px'
})}
`
