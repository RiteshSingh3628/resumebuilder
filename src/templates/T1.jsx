import React from "react";

const ModernResumeTemplate = ({ data }) => {
  const { name, email, phone, address, summary, skills, experience, education } = data;

  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 font-sans">
      {/* Header */}
      <div className="text-center border-b pb-4">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="mt-2 text-sm text-gray-500">{email} | {phone} | {address}</p>
      </div>

      {/* Summary */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-800">Professional Summary</h2>
        <p className="mt-2 text-sm leading-relaxed">{summary}</p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-800">Skills</h2>
        <ul className="mt-2 grid grid-cols-2 gap-x-6 text-sm list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-800">Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="mt-4">
            <h3 className="font-semibold">{job.role} - {job.company}</h3>
            <p className="text-sm text-gray-500">{job.duration}</p>
            <p className="text-sm mt-1 leading-relaxed">{job.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-800">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mt-4">
            <h3 className="font-semibold">{edu.degree} - {edu.institution}</h3>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernResumeTemplate;
