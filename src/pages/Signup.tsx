
import React from 'react'
import { Input } from '../Components/CreateModal'
import Button from '../Components/button'

const Signup = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-grey-200'>
       <div className='bg-white p-6 rounded-md shadow-md w-96'>
        <Input placeholder={"UserName"}/>
         <Input placeholder={"Password"}/>
         <div className='flex justify-center '>

         <Button variant='primary' size='md' text={"Signup"}/>
         </div>
       </div>
    </div>
  )
}

export default Signup
