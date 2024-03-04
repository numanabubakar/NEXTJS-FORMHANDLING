import React from 'react'


const blogData =[{
    id:1,
    desc:"top route page",
    slug:"top"
},{
    id:2,
    desc:"top2 route page",
    slug:"top2"
},]
export default function page({ params }: { params: { slug: string } }) {
    const currentBlog = blogData.filter((i)=>i.slug==params.slug)
  return (
    <div>{currentBlog[0]?.desc}</div>
    
  )
}
