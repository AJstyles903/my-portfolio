import React, { Children } from 'react'

const Heading = ({children}) => {
  return (
    <h3 className='my-2 text-2xl font-bold'>{children}</h3>
  )
}

export default Heading