import React, { useState } from "react";
import { SkillsProps } from "./skills.types";

const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <p>Skills</p>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>はじめる</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>ログイン</button>
      )}
    </div>
  );
};

export default Skills;
