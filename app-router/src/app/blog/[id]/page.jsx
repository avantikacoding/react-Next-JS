import React from 'react'

export default function BlogPost(params) {
  console.log(params['params']['id'],'stupidKiki')
  return (
    <div>BlogPost {params.id}</div>
  )
}
