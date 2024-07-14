'use client';
import Image from "next/image";
import DynamicText from "./components/DynamicText";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, X_URL } from "./components/SocialUrl";

export default function Home() {
  const handleDownload = () => {
    window.open("./Resume2Full.pdf", "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 p-4 sm:p-24">
      <div className="flex flex-col sm:flex-row items-center w-full">
        <div className="image-container mb-4 sm:mb-0 w-full sm:w-auto">
          <Image
            src="/hero.png"
            width={1200}
            height={1200}
            quality={80}
            alt="Picture of the author"
          />
          <div className="name-overlay text-center">Hem Upadhyay</div>
        </div>
        <div className="flex flex-col justify-center align-middle ml-0 sm:ml-10 space-y-6 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            Hi, I'm <DynamicText />
          </h1>
          <div className="flex flex-col space-y-4 items-center sm:items-start w-full">
            <div className="text-sm sm:text-base text-center sm:text-left">
              I'm Hem Chandra Upadhyay, a Computer Science graduate skilled in
              data structures, algorithms, AWS Cloud, and DevOps. I've developed
              various projects and am proficient in C++, Bash, Git, JavaScript,
              SQL, and frameworks like ReactJS, React Native, and NodeJS.
            </div>
            <div className="text-sm sm:text-base text-center sm:text-left">
              This site visited <span className="dark:text-light-secondary text-dark-secondary">0</span> times.
            </div>
            <div className="flex space-x-2 justify-center sm:justify-start w-full">
              <Button
                variant="contained"
                color="success"
                onClick={handleDownload}
                startIcon={<DownloadIcon />}
                size="small"
              >
                Download
              </Button>
              <Link href={X_URL} passHref>
                <XIcon className="hover:text-dark-secondary transition-all duration-300 cursor-pointer" />
              </Link>
              <Link href={LINKEDIN_URL} passHref>
                <LinkedInIcon className="hover:text-dark-secondary transition-all duration-300 cursor-pointer" />
              </Link>
              <Link href={INSTAGRAM_URL} passHref>
                <InstagramIcon className="hover:text-dark-secondary transition-all duration-300 cursor-pointer" />
              </Link>
              <Link href={GITHUB_URL} passHref>
                <GitHubIcon className="hover:text-dark-secondary transition-all duration-300 cursor-pointer" />
              </Link>
            </div>
            {/* <ToogleBtn/> */}
          </div>
        </div>
      </div>
    </main>
  );
}
