'use client'

import { usePathname } from "next/navigation"

export default function layout({ children }) {
  const currentPathName = usePathname();
  console.log(currentPathName)
  return (
    <>
      {
          currentPathName !== '/contact/company' ? <h2>Common layout for Contact</h2> : null
      }
      {
          children
      }
    </>
  )
}


