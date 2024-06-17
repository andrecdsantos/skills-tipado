//arquivo com as funcoes de autenticaçao do usuario. Autenticação: É o processo de verificar a identidade de um usuário. Em outras palavras, é a validação de que o usuário é quem ele afirma ser.
import type { NextAuthConfig } from "next-auth"

export const authConfig = {
    pages: { signIn: '/login'},//para a autenticacao ir para a minha pagina criada e nao a generica criada pelo next-auth
    callbacks: {
        authorized({auth, request: { nextUrl }}) { //auth conten os dados da sessao do usuario ou null
            const isLoggedIn = !!auth?.user // !!converte o resultado em booleano
            const isPrivateRoutes = nextUrl.pathname.startsWith('/private')// verifica se a rota é privada
            const isAuthRoutes = nextUrl.pathname.startsWith('/login')//verifica se o usuario esta tentando acessar uma rota de authenticacao

            if(!isLoggedIn && isPrivateRoutes) return false //se o usuario nao estiver logado e estiver tentando acessar uma rota privada
            if(isLoggedIn && isAuthRoutes) {//se o usuario esta logado e esta tentando acessar a rota de autenticacao(naz faz sentido)
                return Response.redirect(new URL('/private', nextUrl))//rota p ser enviado, a requisicao retornada da funcao authorized
            }
            return true//funcao authorized retorna usuario autenticado
        }
    },
    providers : [] //este providers esta vazio, mas sera sobreescrito pelo arquivo providers.ts
} as NextAuthConfig