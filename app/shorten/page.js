"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const handlechange = (first) => {};
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setShorturl("");

        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="border border-light md:mx-auto w-full max-w-108 not-md:ml-8 md:max-w-lg my-20 bg-surface p-10 rounded-xl shadow-card  flex  flex-col gap-6">
        <h1 className="font-bold text-xl md:text-2xl text-center">{`Generate Your Short URL's`}</h1>
        <div className="flex flex-col gap-3 w-full">
          <input
            type="text"
            value={url}
            className=" px-4 py-1.5 focus:outline-border-focus outline-1 outline-border-input bg-input rounded-md"
            placeholder="Enter your URl"
            onChange={(e) => seturl(e.target.value)}
          />
          <input
            type="text"
            value={shorturl}
            className="px-4 py-1.5 focus:outline-border-focus outline-1 outline-border-input bg-input rounded-md"
            placeholder="Enter Your Preferred Short URL Text"
            onChange={(e) => setShorturl(e.target.value)}
          />
          <button
            onClick={generate}
            className="bg-primary hover:bg-primary-hover  px-2 py-1 rounded-lg font-bold text-white my-3"
          >
            Generate
          </button>
        </div>
        {generated && (
          <>
            <span className="font-bold">Your Link</span>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Shorten;
