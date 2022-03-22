import { doc, getDoc, setDoc } from "firebase/firestore"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import { database } from "../../../database"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ],

  pages:{
    signIn: "/login"
  },

  callbacks:{
      async jwt({token, account}){

        if(account?.providerAccountId){
          token.id = account.providerAccountId

          const snapshot = await getDoc(doc(database, "usersBlog", account.providerAccountId))

          if(snapshot.exists()){
            const user = snapshot.data()

            if(user.role){
              token.role = user.role
            }
          }else{
            const snapshot = await setDoc(
              doc(
                database,
                "usersBlog",
                account.providerAccountId
              ),{
                role: "regular",
                id: account.providerAccountId,
                email: token.email,
                name: token.name,
                picture: token.picture
              }
            )
            token.role = "regular"
          }
        }
        return token
      },
    async session({session, token, user}){
      if(token?.id && token?.role){
        session.user.id = token.id 
        session.user.role = token.role 
      }
      return session
    }
  }
  
})