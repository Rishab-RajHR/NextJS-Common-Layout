"use client"

import { useState } from "react"

const StyleWithNextJS = () => {
   const [style, setStyle] = useState({ backgroundColor: 'aqua'});
  return (
    <>
     <h2>Style with NextJS</h2> 
     {/* <h3 style={{backgroundColor: 'red'}}>Hello</h3> */}
     <h3 style={style}>Hello</h3>
     <button onClick={() => setStyle({backgroundColor: 'yellow'})}>Change Color</button>
    </>
  )
}

export default StyleWithNextJS
