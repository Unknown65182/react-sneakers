/* eslint-disable new-cap */
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import db from "@/libs/db";

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  adapter: FirebaseAdapter(db),
  pages: { signIn: "/?signIn" },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

export default (req, res) => NextAuth(req, res, options);
