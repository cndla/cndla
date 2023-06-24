import Image from "next/image";
import "./workingWith.scss";

import React from "react";

const WorkingWith = ({ className, logo }) => {
  return (
    <div className={`${className} workingWith`}>
      <div className="workingWith__container">
        <Image
          width={466}
          height={154}
          src={logo}
          alt="workingWith"
          className="workingWith__container__logo"
        />
      </div>
    </div>
  );
};

export default WorkingWith;
