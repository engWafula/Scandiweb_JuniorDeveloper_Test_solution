
import React, { Component } from 'react'
import  {css} from 'styled-components'



export const mobile =(props)=>{

    return  css`
    @media only screen and (max-width:380px){
        ${props}
      }
    
    `
}

export const mobileSmall =(props)=>{

    return  css`
    @media only screen and (min-width:380px){
        ${props}
      }
    
    `
}
