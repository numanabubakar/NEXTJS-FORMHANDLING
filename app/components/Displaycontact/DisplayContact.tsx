import { FormData, contactDisplayType } from '@/app/types/type'
import React from 'react'

function DisplayContact(props:{formData:FormData[]}) {
  return (
    <div>
       <h2>Contact Info</h2>
      {
        props.formData.map((item,key)=>{
return(
  <div key={key}>
<p>Name :{item.name}</p>
<p>Father Name :{item.Fname}</p>
<p>Email : {item.email}</p>
<p>Phone No : {item.phoneNo}</p>
<p>CNIC : {item.cnic}</p>
  </div>
)
        })
      }
       
      

    </div>
  )
}

export default DisplayContact