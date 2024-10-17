import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import MicrosoftProvider from "next-auth/providers/azure-ad";
import AppleProvider from "next-auth/providers/apple";

export const authOptions = {
     providers: [
          GoogleProvider({
               clientId: process.env.GOOGLE_CLIENT_ID,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
          FacebookProvider({
               clientId: process.env.FACEBOOK_CLIENT_ID,
               clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
          }),
          MicrosoftProvider({
               clientId: process.env.MICROSOFT_CLIENT_ID,
               clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
               tenantId: process.env.MICROSOFT_TENANT_ID,
          }),
          AppleProvider({
               clientId: process.env.APPLE_CLIENT_ID,
               clientSecret: process.env.APPLE_CLIENT_SECRET,
          }),
     ],
     secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}