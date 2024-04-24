import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
      pages: {
          signIn: "/login",
      },
      providers: [
        CredentialsProvider({
          name: 'E-mail',
          credentials: {
            email: { label: "Email", type: "email", placeholder: "exemplo@email.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const user = {
              id: "1",
              email: "admin@email.com", 
              password: "123",
              name: "Andre admin",
              role: "admin"
            }
            const isValidEmail = user.email === credentials?.email
            const isValidPassword = user.password === credentials?.password
            if(!isValidEmail || !isValidPassword){
              return null
            }
            return user
          }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!, // !quando tenho certeza q n é vazio, ?? "" callback caso esteja vazio
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
          })
      ]
})

export { handler as GET, handler as POST }