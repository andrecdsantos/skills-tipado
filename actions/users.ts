'use server'

import { z } from "zod" //biblioteca para validar dados em aplicativos TypeScript
import bcrypt  from 'bcrypt' //usado para armazenar senhas de forma segura em um banco de dados, protegendo-as contra ataques de força bruta e aumentando a segurança geral do sistema de autenticação
import { sql } from '@vercel/postgres'
import { redirect } from "next/navigation"
import { User } from "@/types/user"
import { signIn } from "@/app/login/provider"

const UserSchema = z.object({
    id: z.string(),
    name: z.string({ required_error: 'O nome é obrigatório'})
    .min(3, 'O nome deve conter pelo menos 3 letras'),
    email: z.string().email('Insira um email válido!'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    image: z.string(),
    role: z.string()
})

const CreateUser = UserSchema.omit({ id: true, image: true, role: true}) //campos nao obrigatorios, que serao omitidos no cad no banco

type CreateUserState = { // criando uma tipagem para a variavel que armazenas os erros dos campos ta tabela
    errors?: {
        name?: string[] //array pq name tem mais de uma validacao de erro
        email?: string[]
        password?: string[]
    }
}

export async function createUser(state: CreateUserState, formData: FormData) {
    const validatedFields = CreateUser.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    })

    if(!validatedFields.success) {//se nao passou por todas as validacoes
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Preencha todos os campos' //mensagem de erro universal
        }
    }

    //se nao entrou no if entao os campos foram validados com sucesso e continua abaixo
    const { name, email, password} = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)// parametros hash(campoParaCriptografar, e o nivel de segurança)
    const googleImage = "http://profiles.google.com/s2/photos/profile/" + email.split("@")[0] // este split divide a string em partes, o numero de cortes é por '@', e qual parte/indice do corte eu quero usar por [indice]
    const role = 'user'

    try {
        await sql`INSERT INTO users (name, email, password, image, role) VALUES (${name}, ${email}, ${hashedPassword}, ${googleImage}, ${role})`
    } catch (error) {
        return { message: 'Falha ao inserir usuário no banco de dados'}
    }

    //se nao cair no catch
    redirect('/login')
}

export async function getUserByEmail(email: string) {
    try {
        const { rows } = await sql<User>`SELECT * FROM users WHERE email = ${email}`// seleciona todos os registros onde satisfazer a query
        return rows[0] // [0] para retorna a primeira linha de registro que encontrar no banco
    } catch (error) {
        throw new Error('Este usuário não existe! Verifique os dados.')
    }
}

export async function authenticate(state: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', Object.fromEntries(formData))//signIn que e criei em providers.ts e o tipo de credencial
    } catch (error) {//diferenciando erros de autenticacao de outros tipos de erros
        if((error as Error).message.includes('CredentialsSigin')) return 'CredentialsSingin'
        
        throw error //outros erros genericos
    }
}