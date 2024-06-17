import NextAuth from "next-auth"
import { authConfig } from "./app/login/auth.config"

export default NextAuth(authConfig).auth//verifica se o usuario esta autenticado ou n, se sim traz a session se n null

export const config = {
    matcher: [
      /*
       *regex
       * Match all confirma tudo menos estes caminhos especificos:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
       '/((?!api|_next/static|_next/image|favicon.ico).*)'  
    ]
}