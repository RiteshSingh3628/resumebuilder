import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import Heading from "../collectData/Heading";

function PersonalDetails() {
    const steps = ['Heading', 'Work history', 'Education', 'Skills', 'Summary', 'Finalize'];
  return (
    <div>
      {/* pc view */}
      <div className="flex w-full">
        {/* right side section which contains the stepper */}
        <div className="w-1/6 bg-blue-[#013564] h-screen flex flex-col pt-5 pl-10">
            <h1 className="text-2xl font-bold mb-5">Resume Builder</h1>
          <Stepper activeStep={2} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        {/* center element which contains the form */}
        <div className="w-2/3 bg-red-50">
            <Heading />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
