import { connectDB } from '@/util/database';

export default async function Home() {
  // let client = await connectDB;
  // const db = client.db('forum');
  // let result = await db.collection('post').find().toArray();

  return <div>메인</div>;
}
