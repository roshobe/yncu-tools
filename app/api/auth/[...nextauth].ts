import NextAuth, { AuthOptions, User, Session } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

interface UserWithUID extends User {
  username: string;
  uid: string;
}

declare module "next-auth" {
  interface Session {
    user: UserWithUID;
  }
}

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: { params: { scope: "openid profile user.Read email" } },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = session.user as UserWithUID;
      user.username = user.name
        ? user.name.split(" ").join("").toLocaleLowerCase()
        : ""; // Assign empty string if user.name is undefined
      user.uid = token.sub ?? ""; // Assign empty string if token.sub is undefined
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
