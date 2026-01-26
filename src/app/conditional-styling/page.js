"use client";
import { useState } from 'react';
import style from '../conditionalStyling.module.css'

const ConditionalStyling = () => {
   const [color, setColor] = useState('blue');
   const {green} = style;
  return (
    <>
     <h2 className={style.heading}>Conditional Styling in Next JS</h2> 
     {/* conditional styling */}
     {/* <h3 className={color == 'blue' ? style.green : style.pink}>Hello, Alex</h3> */}
     {/* use style attribute */}
     {/* <h3 style={{backgroundColor: color=='blue' ? 'yellow' : 'purple'}}>Hello, Alex</h3> */}
     {/* use id attribute */}
     {/* <h3 id={style.my}>Hello, Alex</h3> */}
     {/* mutiple tags */}
     <h3 className={green}>Hello, Alex</h3>
     <h3 className={green}>Hello, Basil</h3>
     <h3 className={green}>Hello, George</h3>
     <h3 className={green}>Hello, Tovino</h3>
     <button onClick={() => setColor('red')}>Change Color</button>
    </>
  );
}

export default ConditionalStyling
