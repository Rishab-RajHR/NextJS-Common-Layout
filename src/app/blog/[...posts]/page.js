'use client'

import { use } from 'react';

const Posts = ({params}) => {
 
   const resolveParams = use(params)
   
  return (
    <>
      <h2>Blog: {resolveParams.posts[0]}</h2> 
      <h2>Post: {resolveParams.posts[1]}</h2> 
    </>
  )
}

export default Posts;
