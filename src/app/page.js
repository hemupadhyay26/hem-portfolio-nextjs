"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import DynamicText from "./components/DynamicText";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  X_URL,
} from "./components/SocialUrl";
import { AboutTxt } from "./components/Content";

const formatCount = (count) => {
  if (count >= 1_000_000_000) {
    return (count / 1_000_000_000).toFixed(1) + "B";
  } else if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1) + "M";
  } else {
    return count.toLocaleString();
  }
};

export default function Home() {
  const [visitCount, setVisitCount] = useState(0);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const updateCounter = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_LAMBDA_URL);
        const data = await response.json();
        setVisitCount(data); // Assuming the API returns the count as a plain number
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    if (isFirstLoad.current) {
      updateCounter();
      isFirstLoad.current = false;
    }
  }, []);

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
            priority
          />
          <div className="name-overlay text-center">Hem Upadhyay</div>
        </div>
        <div className="flex flex-col justify-center align-middle ml-0 sm:ml-10 space-y-6 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            Hi, I&apos;m <DynamicText />
          </h1>
          <div className="flex flex-col space-y-4 items-center sm:items-start w-full">
            <div className="text-sm sm:text-base text-center sm:text-left">
              {AboutTxt}
            </div>
            <div className="text-sm sm:text-base text-center sm:text-left">
              This site visited{" "}
              <span className="dark:text-dark-secondary font-bold text-light-secondary">
                {formatCount(visitCount)}
              </span>{" "}
              times.
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
              <Link href={X_URL} target="_blank" passHref>
                <XIcon className="hover:text-dark-secondary transition-all duration-300 cursor-pointer" />
              </Link>
              <Link href={LINKEDIN_URL} target="_blank" passHref>
                <LinkedInIcon className="hover:text-dark-secondary transition-all duration-300 cursor-pointer" />
              </Link>
              <Link href={INSTAGRAM_URL} target="_blank" passHref>
                <InstagramIcon className="hover:text-dark-secondary transition-all duration-300 cursor-pointer" />
              </Link>
              <Link href={GITHUB_URL} target="_blank" passHref>
                <GitHubIcon className="hover:text-dark-secondary transition-all duration-300 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
