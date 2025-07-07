'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function RedirectClient() {
  const { shorturl } = useParams();

  useEffect(() => {
    if (shorturl) {
      window.location.href = `${process.env.NEXT_PUBLIC_HOST}/${shorturl}`; // triggers server-side redirect
    }
  }, [shorturl]);

  return <p className="text-center mt-10">Redirecting...</p>;
}