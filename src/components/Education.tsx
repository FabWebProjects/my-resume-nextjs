import React from 'react';
import educationData from '../data/education.json';

const Education: React.FC = () => {
  return (
    <div className="mb-8 text-white">
      <h2 className="text-sm font-medium mb-2">{educationData.title}</h2>
      <div className="border-t border-gray-300 w-full mb-4"></div>
      {educationData.courses.map((course, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-xs">{course.name}</h3>
          <p className="text-xs">{course.organism}</p>
          <p className="text-xs">{course.year} | {course.duration} | Niveau: {course.level}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
