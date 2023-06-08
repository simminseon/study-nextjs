import { connectDB } from '@/util/database';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '32cab7c3ad08ed524082',
      clientSecret: 'de97f7e910b95c112b8dd1061a95ebc1bca0ea11',
    }),
  ],
  secret: 'qwer1234',
  // adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
