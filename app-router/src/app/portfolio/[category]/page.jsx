import React from 'react'

export default function Category({params}) {
  console.log(params.category)
  return (
    <div>{params.category}</div>
  )
}
