import React from 'react'

export const PostCreator = () => {
  return (
    <div className='bg-yellow-500 mx-3  rounded-3xl my-4 flex flex-col items-center p-4'>
      <form>
        <h1 className='text-center mb-3'>Post Form</h1>
        <input type='text' className='focus:border-none focus:outline-none focus:ring-0 rounded-full px-2' placeholder='Write something...'></input>
        <button ></button>

      </form>
    </div>
  )
}
