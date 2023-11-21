import React from 'react'
import Page from '../pageTemplates/Page'

export default function ColumnList(props) {
    const {id}= props
    return (
      <div className=''>
        {id!=null && <Page id={id} paged={true}/>}
      </div>
    )
  
}
