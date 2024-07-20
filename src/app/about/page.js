"use client";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Graduation,
  LearnedTechnologies,
  XIIth,
  Xth,
} from "../components/Content";
import { Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { SkillItem } from "../components/SkillItem";
import { Divider } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function About() {
  const handleDownload = () => {
    window.open("./Resume2Full.pdf", "_blank");
  };

  // State for managing visibility of sections
  const [isSkillsOpen, setIsSkillsOpen] = useState(false); // Initially open on larger screens
  const [isMobileView, setIsMobileView] = useState(false); // Track mobile view

  // Function to check if viewport is mobile size
  const checkMobileView = () => {
    return window.innerWidth < 768; // Adjust breakpoint as per your design needs
  };

  // Effect to set initial mobile view state and update on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(checkMobileView());
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle skills section visibility
  const toggleSkills = () => {
    setIsSkillsOpen(!isSkillsOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 p-4 sm:p-24">
      <section className="w-full">
        <div className="flex flex-col sm:flex-row sm:space-x-2">
          <div className="sm:w-1/2 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold">Skills</h1>
              {/* Toggle button for skills section on mobile */}
              {isMobileView && (
                <button
                  className="sm:hidden bg-transparent border border-solid border-gray-400 rounded px-2 py-1"
                  onClick={toggleSkills}
                >
                  {isSkillsOpen ? "Hide" : "Show"} Skills
                </button>
              )}
            </div>
            {/* Skills content */}
            {(isSkillsOpen || !isMobileView) && (
              <div className="flex flex-wrap">
                {LearnedTechnologies.map((tech, index) => (
                  <SkillItem
                    key={index}
                    name={tech.name}
                    proficiency={tech.proficiency}
                    status={tech.status}
                    imageUrl={tech.imageUrl}
                  />
                ))}
              </div>
            )}
          </div>
          <Divider
            orientation="vertical"
            color="success"
            className="hidden sm:flex m-4 p-4"
          ></Divider>
          <div className="flex flex-col space-y-4 mt-4 sm:mt-0 sm:ml-4">
            <h2 className="text-3xl font-bold">Education</h2>
            <div>
              <div className="flex space-x-2 items-center">
                <BusinessCenterIcon color="success" />
                <h3 className="text-xl">{Xth[0]}</h3>
              </div>
              <span className="text-lg text-dark-grey3">
                CGPA/MARK(%): {Xth[1]} (2017-2018)
              </span>
            </div>
            <div>
              <div className="flex space-x-2 items-center">
                <BusinessCenterIcon color="success" />
                <h3 className="text-xl">{XIIth[0]}</h3>
              </div>
              <span className="text-lg text-dark-grey3">
                CGPA/MARK(%): {XIIth[1]} (2018-2020)
              </span>
            </div>
            <div>
              <div className="flex space-x-2 items-center">
                <BusinessCenterIcon color="success" />
                <h3 className="text-xl">{Graduation[0]}</h3>
              </div>
              <span className="text-lg text-dark-grey3">
                CGPA/MARK(%): {Graduation[1]} (2020-2024)
              </span>
            </div>
            <Button
              variant="contained"
              color="success"
              onClick={handleDownload}
              startIcon={<DownloadIcon />}
              size="small"
            >
              Download
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
