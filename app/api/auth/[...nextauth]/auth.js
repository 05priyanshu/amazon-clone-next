// app/auth.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {connectToDatabase} from '@/utils/DbConnect';
import { users } from "@/models/userModel";
import bcrypt from 'bcrypt';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        await connectToDatabase();

        const user = await users.findOne({ email: credentials.email });
        if (!user) {
          toast.error("Incorrect emailaur password");
        }

        // console.log("hi")

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          toast.error("Incorrect email aur password");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export { authOptions };
export default NextAuth(authOptions);
