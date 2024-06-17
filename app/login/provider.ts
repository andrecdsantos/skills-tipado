//foi colocado o provider em arquivo separado pq pode ter varios provedores
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"//importando o arquivo auth.config.ts
import { z } from "zod"
import bcrypt  from 'bcrypt';
import { getUserByEmail } from "@/actions/users"
import NextAuth from 'next-auth';

const providers = {
    ...authConfig, //utilizando a arquivo auth.config no provedor
    providers: [ // sobreescrevendo o providers original no arquivo auth.config
    Credentials({
            async authorize(credentials){//func authorize retorna se o usuario da sessao foi autentocadp ou nao, true/false
                const parsedCredentials = z.object({ //AQUI A VALIDACAO É FEITA VERIFICANDO OS DADOS NO BANCO, ENQUANDO NA ACTION É FEITA A VALIDACAO NA HORA DE CRIAR A CONTA, EU DETERMINO AS REGRAS DE CRIACAO DA CONTA
                    email: z.string().email('Insira um email válido'),//verifica se o email existe no banco
                    password: z.string().min(6, 'Verifique os dados, a senha deve ter pelo menos 6 caracteres!')
                }).safeParse(credentials)

                if(parsedCredentials.success) { //se passou pela validação
                    const {email, password} = parsedCredentials.data //transferindo dados do obj para as consts
                    const user = await getUserByEmail(email)// funcao importada da action users q verifica se o email do usuario digitado esta cadastrado no banco

                    if(!user) return null//se o usuario nao existir no banco retorna null

                    const passwordMatch = await bcrypt.compare(password, user.password)//compara a senha digitada com a q esta criptofrafada no banco
                    if(passwordMatch) return user

                }

                return null
            }
        })
    ]
}

export const { auth, signIn, signOut } = NextAuth(providers) 