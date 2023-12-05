import React from 'react'

type InputProps = {
    label: string
}

function InputForm({ label }: InputProps) {

  return (
    <div className='flex items-center justify-center'>
        <input 
        type='text'
        placeholder={label}
        className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 outline-white bg-transparent h-8 py-6 px-4 border-4 border-white rounded-lg'>
        </input>
    </div>
  )
}

export default InputForm