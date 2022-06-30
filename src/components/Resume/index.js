import React, { useState } from "react";
import JuliaResumeTemplate from "../../assets/images/JuliaResumeTemplate";

function Resume() {
  return (
    <div>
      <Document file={JuliaResumeTemplate}></Document>
    </div>
  );
}

export default Resume;
