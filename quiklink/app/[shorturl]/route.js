import clientPromise from '@/lib/mongodb';

export async function GET(req, { params }) {
  const client = await clientPromise;
  const db = client.db('quiklinks');
  const doc = await db.collection('url').findOne({ shorturl: params.shorturl });

  const destination = doc?.url || process.env.NEXT_PUBLIC_HOST;

  console.log('Redirect param:', params.shorturl);
  console.log('Mongo doc url:', doc?.url);
  console.log('Destination:', destination);

  return Response.redirect(destination, 302);
}
