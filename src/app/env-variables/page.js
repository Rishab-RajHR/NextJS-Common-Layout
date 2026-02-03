import React from 'react'

const EnvironmentVariables = () => {
  console.log(process.env)
  return (
    <>
      <h2>Environment Variables in Next JS</h2>
      {
         process.env.NODE_ENV == 'development' ? <h3>development Mode</h3> : <h3>Production Mode</h3>
      }
    </>
  )
}

export default EnvironmentVariables
