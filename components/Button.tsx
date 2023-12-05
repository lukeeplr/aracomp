'use client'
import React from 'react'

type ButtonProps = {
    children: React.ReactNode
    icon: React.ReactNode
    type: 'Login' | 'Logout' | 'Cadastro'
}

function Button({children, icon, type}: ButtonProps) {

    const onClick = (type: string) => {
        if (type === 'Login') {
            console.log('Fez login!')
        } else if (type === 'Cadastro') {
            console.log('Fez cadastro')
        } else {
            console.log('Desconectou-se')
        }
    }

  return (
    <button 
    className='w-full bg-[#F72585] h-12 rounded-md'
    onClick={() => onClick(type)}>
        <div className='text-white flex items-center justify-center gap-2 font-semibold'>
        {icon}
        {children}
        </div>
    </button>
  )
}

export default Button