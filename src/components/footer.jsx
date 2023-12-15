import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-indigo-600 text-center lg:text-left font-normal">
      <div className="container p-6">
        <div className="flex justify-around py-6">
          <div className="mb-6">
            <ul className="mb-0 list-none flex flex-col gap-5">
              <li>
                <div className="text-white font-bold">Support</div>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <ul className="mb-0 list-none flex flex-col gap-5">
              <li>
                <div className="text-white font-bold">Company</div>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Press
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <ul className="mb-0 list-none flex flex-col gap-5">
              <li>
                <a href="#!" className="text-white font-bold">
                  Legal
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Claims
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-200">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-indigo-700 p-4 text-center text-white ">
        © 2020 Your Company, Inc. All rights reserved.
      </div>
    </footer>
  );
}
