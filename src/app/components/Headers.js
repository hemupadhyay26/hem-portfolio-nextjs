import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { GITHUB_URL } from "./SocialUrl.js";

export default function Headers() {
  return (
    <Navbar className="flex justify-center p-5 border-dark-grey5 border-b-2 bg-dark-primary">
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className=" hover:text-dark-secondary transition-all duration-300 outline-none link-underline-grow"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            aria-current="page"
            className=" hover:text-dark-secondary transition-all duration-300 outline-none link-underline-grow"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/terminal"
            className=" hover:text-light-secondary transition-all duration-300 outline-none link-underline-grow"
          >
            Ask Terminal
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href={GITHUB_URL}
            className=" hover:text-dark-secondary transition-all duration-300 outline-none link-underline-grow"
          >
              Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
