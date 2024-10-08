import { Input } from '@/components/input'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 p-10 flex-1'>
      <div className='flex flex-1 flex-col'>
        <Image
          src='/Logo.svg'
          alt='Logo'
          width={200}
          height={300}
        />
        <div className='flex flex-col items-center justify-center flex-1'>
          <Image
            src='/Background.png'
            alt='background'
            width={2000}
            height={2000}
            quality={100}
            className='w-full'
          />
        </div>
      </div>
      <div className='flex flex-col flex-1 bg-white rounded-xl overflow-auto p-16 items-center '>
        <div className='flex flex-col w-full max-w-[450px] gap-12 flex-1'>
          <div>
            <h1 className='text-gray-500 text-2xl leading-tight font-bold'>
              Acesse sua conta
            </h1>
            <p className='text-gray-400 text-sm'>
              Informe seu e-mail e senha para entrar
            </p>
          </div>
          <form className='flex flex-col gap-5'>
            <Input
              label='Email'
              icon={
                <Image
                  src='/icon/mail-02.svg'
                  alt=''
                  width={24}
                  height={24}
                />
              }
              placeholder='Seu e-mail cadastrado'
            />
            <Input
              label='Senha'
              icon={
                <Image
                  src='/icon/access.svg'
                  alt=''
                  width={24}
                  height={24}
                />
              }
              placeholder='Seu senha cadastrado'
            />
            <button
              type='submit'
              className='p-5 w-full rounded-lg bg-orange-600 text-white font-medium my-12'
            >
              Acessar
            </button>
          </form>
          <div className='mt-auto'>
            <p className='mb-5'>Ainda não tem conta?</p>
            <button
              type='submit'
              className='p-5 w-full rounded-lg border border-orange-600 text-orange-600 font-medium'
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
