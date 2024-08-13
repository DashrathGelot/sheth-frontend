import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth/next';
import { GOOGLE_OAUTH, HttpMethod, paths } from '@/app/constant/urlResource';
import rest from '@/app/services/rest';

const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_OAUTH.ID,
            clientSecret: GOOGLE_OAUTH.SECRET,
            authorization: {
                params: {
                    prompt: "consent"
                }
            }
        })
    ]
    ,
    callbacks: {
        async signIn({account}) {
            const data = await rest(HttpMethod.POST, paths.OAUTH_LOGIN, {token: account.id_token})
            return true;
        },
        async redirect({ url, baseUrl }) { return baseUrl },
        // async session({ session, token, user }) {
        //     session.accessToken = token.accessToken
        //     session.idToken = token.idToken
        //     return session
        // },
        // async jwt({ token, account}) {
        //     if (account) {
        //       token.accessToken = account.access_token
        //       token.idToken = account.id_token
        //     }
        //     return token
        // }
    },
    events: {
        async signOut() {
            console.log("signed out!!!");
        }
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};