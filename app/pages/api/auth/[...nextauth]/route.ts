import prisma from "@/lib/prisma";
import NextAuth from "next-auth/next";
import { Account, AuthOptions, Profile, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",

            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Enter your email address",
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },
            authorize: async (credentials, req) => {
                if (!credentials) {
                    return null;
                }
                const { email, password } = credentials;

                const user = await prisma.user.findUnique({
                    where: { 
                        email
                    }
                });

                if (!user || user.password === null) {
                    return null;
                }

                const userPassword = user.password;

                const isValidPassword = bcrypt.compareSync(password, userPassword);

                if(!isValidPassword) {
                    return null;
                }
                return { ...user, id: user.id.toString() };
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    },
    secret: process.env.NEXTAUTH_SECRET_KEY,
    jwt: {
        async encode({ secret, token }) {
            if(!token) {
                throw new Error('No token to encode');
            }
            return jwt.sign(token, secret);
        },
        async decode({ secret, token }) {
            if(!token) {
                throw new Error('No token to encode');
            }
            const decodeToken = jwt.verify(token, secret);
            if(typeof decodeToken === 'string') {
                return JSON.parse(decodeToken);
            } else {
                return decodeToken
            }
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // will be stored in the cookies for 30 days
        updateAge: 24 * 30 * 60 , // updated every single day
    },
    callbacks: {
        async session(params: { session: Session; token: JWT; user: User }) {
            if (params.session.user) {
                params.session.user.email = params.token.email
            }
            return params.session;
        },
        async jwt(params: { 
            token: JWT;
            user?: User | undefined;
            account?: Account | null | undefined;
            profile?: Profile | undefined;
            isNewUser?: boolean | undefined;
        }) {
            if(params.user) {
                params.token.email = params.user.email;
            }
            return params.token;
        }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

