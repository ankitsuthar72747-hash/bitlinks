"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" shrink-0 flex flex-col w-108 not-md:ml-1 mx-auto  md:w-2/3 md:gap-10 my-2 md:my-5 shadow-navbar">
      <div className="bg-surface h-16 flex pl-3 md:px-4 items-center rounded-xl border border-light">
        <div className="text-heading text-xl md:text-3xl font-bold">
          BitLinks
        </div>
        <ul className="hidden md:flex pl-40 gap-1.5 md:gap-4 text-[9px] md:text-lg font-semibold items-center justify-center-safe w-full ">
          <Link
            className="underline-offset-22 decoration-primary-hover decoration-2  hover:underline text-muted hover:text-primary-hover"
            href="/"
          >
            <li>Home</li>
          </Link>
          <Link
            className="underline-offset-22 decoration-primary-hover decoration-2  hover:underline text-muted hover:text-primary-hover"
            href="/About"
          >
            <li>About</li>
          </Link>
          <Link
            className="underline-offset-22 decoration-primary-hover decoration-2  hover:underline text-muted hover:text-primary-hover"
            href="/shorten"
          >
            <li>Shorten</li>
          </Link>
          <Link
            className="underline-offset-22 decoration-primary-hover decoration-2  hover:underline text-muted  hover:text-primary-hover"
            href="/Contact"
          >
            <li>Contact Us</li>
          </Link>
        </ul>
        <ul className="hidden md:flex md:text-lg text-sm w-90 pl-10">
          <li className="flex gap-3 md:gap-4 font-semibold items-center justify-end text-inverse">
            <button className="bg-primary hover:bg-primary-hover px-3 py-2 md:py-1 rounded-lg">
              <Link href="/shorten">Try Now</Link>
            </button>
            <button className="bg-primary hover:bg-primary-hover px-3 py-2 md:py-1 rounded-lg ">
              <Link
                target="_blank"
                href="https://github.com/ankitsuthar72747-hash?tab=repositories"
              >
                Github
              </Link>
            </button>
          </li>
        </ul>

        {/*                          on mobile                   */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden pl-78 p-2 text-heading hover:text-primary-hover focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 p-4 bg-surface rounded-xl flex flex-col gap-3">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/About" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/shorten" onClick={() => setIsOpen(false)}>
            Shorten
          </Link>
          <Link href="/Contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <div className="pt-3 border-t border-light flex gap-3 text-inverse text-center text-sm">
            <Link
              href="/shorten"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-primary hover:bg-primary-hover py-2 rounded-lg"
            >
              Try Now
            </Link>
            <Link
              target="_blank"
              href="https://github.com/ankitsuthar72747-hash?tab=repositories"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-primary hover:bg-primary-hover py-2 rounded-lg"
            >
              Github
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
