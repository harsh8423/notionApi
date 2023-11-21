import React from 'react'
import Page from '../pageTemplates/Page'

export default function ChildPage(props) {
  const {id}=props
  console.log("child Page")
  return (
    id? <Page id={id} paged={true}/>:"" 
  )
}
