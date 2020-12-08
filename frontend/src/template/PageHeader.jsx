import React from 'react'

const PageHeader = props => {
    return(
       <h2>{ props.name } <small>{ props.small } </small></h2>
    )
}

export default PageHeader