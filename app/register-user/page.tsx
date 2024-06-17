'use client'//para poder usar use client com action precisa importar o useFormState

import { createUser } from "@/actions/users"
import Link from "next/link"
import { useFormState } from "react-dom" //hook para poder usar uma funcao server side(createUser()) em um componente no client side 

const RegisterUser = () => {
    const errorsState = { message: '', errors: {} }
    const [state, dispatch] = useFormState(createUser, errorsState)//primeiro parametro a funcao e o segundo os estados dos erros
  return (
    <main className="w-full max-w-screen-xl mx-auto p-4 xl:p-10">
      <div className="flex flex-col justify-center items-center">
        <form action={dispatch} className="w-96 p-10 bg-tertiary border rounded">
            <h1 className="text-secondary mb-4 text-center">Crie uma conta para continuar</h1>
            <div className="grid gap-1 mb-4">
                <label htmlFor="name" className="text-secondary">Nome de Usuário</label>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Nome..."
                    className="max-w-xs h-9 px-2 text-sm text-secondary placeholder:text-gray-500 border rounded" 
                />
                {state.errors?.name && state.errors.name.map(error=> //se deu algum erro, faz um map(pq pode ter mais de um erro[] ) e lista cada um  dos erros 
                    <p key={error} className="text-sm text-red-500">{error}</p>
                )}
            </div>
            <div className="grid gap-1 mb-4">
                <label htmlFor="email" className="text-secondary">email</label>
                <input 
                    type="text" 
                    name="email"
                    placeholder="email@gmail.com"
                    className="max-w-xs h-9 px-2 text-sm text-secondary placeholder:text-gray-500 border rounded" 
                />
                {state.errors?.email && state.errors.email.map(error=> //se deu algum erro, faz um map(pq pode ter mais de um erro[] ) e lista cada um  dos erros 
                    <p key={error} className="text-sm text-red-500">{error}</p>
                )}
            </div>
            <div className="grid gap-1 mb-4">
                <label htmlFor="password" className="text-secondary">Senha</label>
                <input 
                    type="password" 
                    name="password"
                    placeholder="senha..."
                    className="max-w-xs h-9 px-2 text-sm text-secondary placeholder:text-gray-500 border rounded" 
                />
                {state.errors?.password && state.errors.password.map(error=> //se deu algum erro, faz um map(pq pode ter mais de um erro[] ) e lista cada um  dos erros 
                    <p key={error} className="text-sm text-red-500">{error}</p>
                )}
            </div>
            <button className="px-4 py-2 mb-4 mx-auto bg-violet-50 hover:bg-violet-100 text-secondary border rounded">Criar conta</button>
            <p className="w-full text-secondary">
                Já tem uma conta? {' '}
                <Link href={'/login'} className="hover:underline">Faça login</Link>
            </p>
        </form>
      </div>
    </main>
  )
}

export default RegisterUser