import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#202322] py-12 text-center text-[#b7bbb3]">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex justify-center items-center gap-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#f47d65]"
          >
            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 7.5 7 7.5s-1.14 1.56-2.29 2.56C3.57 11 3 12.1 3 13.25c0 2.22 1.8 4.05 4 4.05z" />
            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
          </svg>
          <span className="text-xl font-bold tracking-tight">All About Plumbing</span>
        </div>
        <p className="mb-6 text-sm">
          1710 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30318 | (404) 636-5033
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} All About Plumbing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
