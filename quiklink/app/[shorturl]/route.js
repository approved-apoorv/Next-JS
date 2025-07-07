export const runtime = 'nodejs';

import clientPromise from '@/lib/mongodb';
import { redirect } from 'next/navigation';

export async function GET(_, { params }) {
  const client = await clientPromise;
  const db = client.db('quiklinks');
  const doc = await db.collection('url').findOne({ shorturl: params.shorturl });

  return redirect(doc?.url || process.env.NEXT_PUBLIC_HOST);
}