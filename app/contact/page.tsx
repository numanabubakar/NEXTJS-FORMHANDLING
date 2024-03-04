'use client'
import React, { useState } from 'react';
import { FormData, onChangeEventType } from '../types/type';
import DisplayContact from '../components/Displaycontact/DisplayContact';

const  Contact=()=>{
  const [formData, setFormData] = useState<FormData>({ name: '',Fname:'', email: '' ,phoneNo:0,cnic:0});

  const handleChange = (event: onChangeEventType) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '',Fname:'' ,email: '',phoneNo:0,cnic:0 });
  };

  return (
    <>
    <form className="flex flex-col space-y-2 container w-96  mx-auto p-2 " onSubmit={handleSubmit}>
      <label htmlFor="name" className="text-sm font-medium">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      <label htmlFor="email" className="text-sm font-medium">
        Father Name
      </label>
      <input
        id="Fname"
        type="text"
        name="Fname"
        value={formData.Fname}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
       
       <label htmlFor="email" className="text-sm font-medium">
        Phone No#
      </label>
      <input
        id="phoneNo"
        type="number"
        name="phoneNo"
        value={formData.phoneNo}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
       <label htmlFor="email" className="text-sm font-medium">
        CNIC
      </label>
      <input
        id="cnic"
        type="number"
        name="cnic"
        value={formData.cnic}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
        >
        Submit
      </button>
    </form>
    <div>
      <DisplayContact formData={formData} />
    </div>
        </>
  );
}

export default Contact;