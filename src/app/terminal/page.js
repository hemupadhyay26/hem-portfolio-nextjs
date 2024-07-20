"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { GITHUB_URL } from "../components/SocialUrl";
import {
  banner,
  help,
  aboutme,
  social,
  error_msg,
} from "../components/Commands";
import { renderHtml } from "../utils/renderHtml";

const commands = {
  whoami: renderHtml(aboutme),
  social: renderHtml(social),
  email: renderHtml([
    `<a href="mailto:hemupadhyay234@gmail.com">hemupadhyay234@gmail.com</a>`,
  ]),
  help: renderHtml(help),
};

export default function Terminal() {
  const [displayContent, setDisplayContent] = useState(
    renderHtml(banner).__html
  );
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null); // Reference for the input field

  const updateDisplayContent = (command, result) => {
    const updatedDisplayContent = `${displayContent}<div class="text-dark-grey0">[hem@armX6060]~$ ${command}</div><div>${result}</div>`;
    setDisplayContent(updatedDisplayContent);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedCommand = command.trim().toLowerCase();

      if (trimmedCommand === "clear") {
        const result = renderHtml(banner).__html;
        setDisplayContent(result);
        setHistory([...history, { command, result }]);
        setHistoryIndex(history.length + 1);
      } else if (commands[trimmedCommand]) {
        const result = commands[trimmedCommand].__html;
        updateDisplayContent(command, result);
        setHistory([...history, { command, result }]);
        setHistoryIndex(history.length + 1);
      } else {
        const errorResult = renderHtml(error_msg).__html;
        updateDisplayContent(command, errorResult);
        setHistory([...history, { command, result: errorResult }]);
        setHistoryIndex(history.length + 1);
      }
      setCommand("");
    } else if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setCommand(history[historyIndex - 1].command);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setCommand(history[historyIndex + 1].command);
      } else {
        setCommand("");
        setHistoryIndex(history.length);
      }
    }
  };

  // Focus the input field when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className="overflow-hidden text-[1.1rem] m-10"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="h-full m-2 relative overflow-hidden">
        <div className="bg-[#181818] border-dark-grey4 border rounded-[7px] shadow-lg shadow-dark-grey6 resize backdrop-blur-none transition-backdrop-filter duration-700 hover:backdrop-blur-lg">
          <header className="flex flex-col">
            <p className="p-2 text-center text-slate-400 bg-[#333333]">
              <Link href={GITHUB_URL} target="_blank">
                _CLi
              </Link>
            </p>
            <div className="p-8 text-[17.5px]">
              <div className="text-dark-secondary">
                Hem Upadhyay
                <pre className="text-dark-secondary">-----------------------</pre>
              </div>
              <div className="text-dark-secondary">
                Resume
                <Link
                  href="https://drive.google.com/file/d/1OxeI-mx4WreLWpwUB_FucBAJKi-usoqf/view"
                  target="blank"
                  className="p-1"
                >
                  → Download my resume....
                </Link>
              </div>
              <div className="text-dark-secondary">
                Github
                <Link
                  href="https://github.com/hemupadhyay26"
                  target="blank"
                  className="p-1 "
                >
                  → github.com/hemupadhyay26
                </Link>
              </div>
              <div className="text-dark-secondary">
                Twitter
                <Link
                  href="https://x.com/hemupadhyay16"
                  target="blank"
                  className="p-1"
                >
                  → twitter/hemupadhyay
                </Link>
              </div>

              <div className="text-dark-secondary">
                Linkedin
                <Link
                  href="https://www.linkedin.com/in/hem-upadhyay-4460b31b9/"
                  target="blank"
                  className="p-1"
                >
                  → linkedin/hem-upadhyay-4460b31b9
                </Link>
              </div>

              <div className="text-dark-secondary">
                Instagram
                <Link
                  href="https://www.instagram.com/hem_upadhyay_2.32/"
                  target="blank"
                  className="p-1"
                >
                  → instagram/hem_upadhyay_2.32
                </Link>
              </div>
            </div>
          </header>
          <div className="p-4">
            <div className="flex flex-col">
              <div id="before" className="text-dark-grey2 p-2 m-2">
                <div dangerouslySetInnerHTML={{ __html: displayContent }} />
              </div>
              <div id="prompt" className="flex flex-col md:flex-row">
                <div id="terminal" className="text-dark-secondary font-bold">
                  [hem@armX6060]~$
                </div>
                <div id="command" className="w-full">
                  <input
                    type="text"
                    id="texter"
                    ref={inputRef} // Set ref for the input field
                    className="bg-transparent w-full ml-2 text-dark-grey0 outline-none inline-block"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
