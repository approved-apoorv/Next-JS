"use client"
import React, { useState } from 'react'
import Link from 'next/link'

export default function Shorten() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState(false)
  const [copied, setCopied] = useState(false) 

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        setUrl("")
        setShortUrl("")
        setCopied(false) 
        console.log(setShortUrl)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  const handleCopy = () => {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = generated;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (success) {
      setCopied(true);
    } else {
      alert("Copy failed");
    }
  } catch (err) {
    console.error("Fallback copy failed:", err);
  }
};

  return (
    <div className='mx-auto max-w-lg bg-[#EEF5FF] drop-shadow-xl my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input
          type="text"
          value={url}
          className='px-4 py-2 bg-white focus:outline-[#176B87] rounded-md'
          placeholder='Enter your URL'
          onChange={e => { setUrl(e.target.value) }} />

        <input
          type="text"
          value={shortUrl}
          className='px-4 py-2 bg-white focus:outline-[#176B87] rounded-md'
          placeholder='Enter your preferred short URL text'
          onChange={e => { setShortUrl(e.target.value) }} />

        <button onClick={generate} className='bg-[#176B87] hover:bg-[#86B6F6] hover:drop-shadow-xl hover:text-gray-900 text-white p-2.5 rounded-xl font-semibold my-4'>Generate</button>
      </div>

      {generated && <>
        <span className='font-bold text-lg '>Your Link: </span>
        <code><br />
          <div className='flex justify-between'>
            <a className='flex items-center' target='_blank' href={generated}> {generated} </a>
            <button
              className=' bg-[#176B87] hover:bg-[#86B6F6] hover:text-gray-900 text-white py-1 px-3 rounded-xl'
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </code>
        
      </>}

      </div >
      )
}
