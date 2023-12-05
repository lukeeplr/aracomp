import React from 'react'
import InputForm from './InputForm'
import { RiLoginBoxLine } from "react-icons/ri";
import Button from './Button';
import Link from 'next/link';


function FormLogin() {

  return (
    <div className='w-[600px] h-[700px] bg-[#161616] flex flex-col justify-center items-center rounded-xl'>
      <div className='px-8 py-4 flex flex-col gap-6 items-center justify-center h-full w-full'>
        <InputForm label={'Usuário'}/>
        <InputForm label={'Senha'}/>
        

        <Button icon={<RiLoginBoxLine />} type={'Login'}>
        <Link
        href='/'
        >
          Login
        </Link>
        </Button>

      </div>
      <p className='mb-10'>Ainda não tem uma conta? 
        <span className='text-blue-500 ml-2'>
          Cadastre-se
        </span></p>
    </div>
  )
}

export default FormLogin