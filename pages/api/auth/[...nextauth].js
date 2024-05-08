import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  
  

  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          let req1 = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
            method:"POST",
            headers:{
              'Content-Type': "application/json"
            },
            body:JSON.stringify(credentials)
          })
          let json = await req1.json()
          if(req1.status == 406){
            return {success:false, error:"Please try to login with correct credentials"}
          }
          else if (req1.status == 500){
            return {success:false, error:"Internal Server error. We are trying to fix the error. Sorry for inconvenience"}
          }
          else{
            return {success:true, email: json.user.email, authtoken: json.authtoken}
          }
        }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        },
      }),

  ],
  pages:{
    signIn: "/login"
  },
  session: {
    maxAge: 30 * 24 * 60 * 60,
    strategy: 'jwt'
  },
  secret: process.env.JWT_KEY,
  callbacks: {
    async jwt({token, user, account, profile, isNewUser}){
      // console.log(token)
      // console.log("latest", token, user, account, profile, isNewUser)
      return token
    },
    async signIn({ user, account, profile, email, credentials }){
      if(!user.success && !user.image){
        throw new Error(user.error)
      }
      else{
        return true
      }
    }
  }
}

export default NextAuth(authOptions)