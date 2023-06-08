import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { authOptions } from '@/pages/api/auth/[...nextauth].js';
import { getServerSession } from 'next-auth';
import UserInfo from '@/components/userInfo/UserInfo';
import LogOutBtn from '@/components/button/LogOutBtn';
import LoginBtn from '@/components/button/LoginBtn';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  if (session) {
    console.log(session);
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/">Appleforum</Link>
          {/* <Link href="/list">List</Link> */}
          <UserInfo>{session ? <LogOutBtn /> : <LoginBtn />}</UserInfo>
          {session && <div>{session.user.name}님 안녕하세요?</div>}
        </div>
        {children}
      </body>
    </html>
  );
}