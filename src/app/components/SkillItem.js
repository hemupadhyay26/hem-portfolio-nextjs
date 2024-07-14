import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const SkillItem = ({ name, proficiency, status, imageUrl }) => {
  const proficiencyValue = parseInt(proficiency.replace('%', ''));

  return (
    <div className="inline-block space-y-2 m-6 hover:bg-dark-grey4 p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div>
        <img src={imageUrl} alt={name} className="w-16 h-16 mb-2" />
        <div className="flex space-x-2">
          <div className="flex justify-center items-center">
            <span className="text-xl font-semibold">{name}</span>
            {status === "ongoing" && (
              <span className="text-red-500 font-bold">*</span>
            )}
          </div>
          <div className="w-10 h-10 mt-1">
            <CircularProgressbar
              value={proficiencyValue}
              text={`${proficiencyValue}%`}
              styles={buildStyles({
                textColor: "white",
                pathColor: "var(--color-grey0)",
                trailColor: "gray",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
