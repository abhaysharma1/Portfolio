import React from "react";

function Links() {
  return (
    <footer className="w-full border-t border-neutral-800/70 bg-black/50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-8 text-sm text-neutral-300">
        <span className="tracking-wide">
          © 2026 Abhay Sharma
        </span>
        <nav className="flex gap-7">
          <a
            href="https://www.linkedin.com/in/abhay-sharma-63b821277/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/abhaysharma1"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/bountyhunter9001/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LeetCode
          </a>
          <a
            href="https://www.geeksforgeeks.org/profile/abhayshau1k6"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GeeksForGeeks
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Links;
