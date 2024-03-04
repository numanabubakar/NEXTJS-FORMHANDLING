import { FormData, contactDisplayType } from '@/app/types/type'
import React from 'react'

function DisplayContact(props:contactDisplayType) {
  return (
    <div>
       <h2>Contact Info</h2>
       <p>Name :{props.formData.name}</p>
       <p>Father Name :{props.formData.Fname}</p>
       <p>Email:{props.formData.email}</p>
       <p>Phone No : {props.formData.phoneNo}</p>
       <p>CNIC : {props.formData.cnic}</p>
      

    </div>
  )
}

export default DisplayContact