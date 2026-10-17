// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-surface flex fixed bottom-0 left-2 w-108 md:mx-auto justify-center items-center border-t border-border-light py-4 z-50">
  {/* <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-sm text-muted">
    <p>© 2026 BitLinks</p> */}
    <ul className="flex gap-3 not-md:ml-2 md:gap-8 w-100 md:w-2/3 text-sm md:text-lg">
      <Link href={"/"}><li>Home</li></Link>
      <Link href={"/shorten"}><li>URL shorten</li></Link>
      <Link href={"/about"}><li>about</li></Link>
      <Link href={"/contact"}><li>conatct</li></Link>
    </ul>
    <div className='text-xl font-bold me-5 md:mr- text-black'>
        BitLinks
    </div>
</footer>
  );
};

export default Footer;