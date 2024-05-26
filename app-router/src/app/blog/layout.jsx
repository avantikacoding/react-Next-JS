// 'use client'
export default function BlogLayout({children}) {
    console.log( children, "zoz  {children}")
    console.log( children, "zoz  {children}")
  return (
    <div>
        <h4>Blog Layout</h4>
        {children}
    </div>
  )
}
