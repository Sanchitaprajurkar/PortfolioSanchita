import React from "react";
import { FaTrophy, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

// Correct image imports
import NASAImage from "/src/assets/NASA.jpg";
import InnoveraImage from "/src/assets/innovera.jpg";
import PythonImage from "/src/assets/python.jpg";
import FounderImage from "/src/assets/founder.jpg";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Global Finalist - NASA Space Apps Challenge 2024",
      type: "Competition",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
      image: NASAImage,
      linkedin:
        "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_nasa-spaceapps-hackathon-activity-7249832317622312961-4Vrm?utm_medium=ios_app&rcm=ACoAAEfACLABJSLnU9EAgZ3Oz95T7kdPcxROKUs&utm_source=social_share_send&utm_campaign=copy_link",
    },
    {
      id: 2,
      title: "Winner at Innov-era Hackathon",
      type: "Hackathon",
      icon: <FaTrophy className="text-blue-600 text-4xl" />,
      image: InnoveraImage,
      linkedin:
        "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_hackathon-innovation-teamwork-activity-7303815823628939265-vAqJ?utm_medium=ios_app&rcm=ACoAAEfACLABJSLnU9EAgZ3Oz95T7kdPcxROKUs&utm_source=social_share_send&utm_campaign=copy_link",
    },
    {
      id: 3,
      title: "Winner in Python Mini Project Competition",
      type: "Technical Competition",
      icon: <FaTrophy className="text-purple-600 text-4xl" />,
      image: PythonImage,
      linkedin:
        "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_hello-connections-thrilled-to-share-activity-7247288494287384576-vvpR?utm_medium=ios_app&rcm=ACoAAEfACLABJSLnU9EAgZ3Oz95T7kdPcxROKUs&utm_source=social_share_send&utm_campaign=copy_link",
    },
    {
      id: 4,
      title: "Completed Startup Course by Sudhir Kadam",
      type: "Professional Development",
      icon: <FaCertificate className="text-red-600 text-4xl" />,
      image: FounderImage,
      linkedin:
        "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_innovation-entrepreneurship-startupjourney-activity-7308514628098039808-3-t7?utm_medium=ios_app&rcm=ACoAAEfACLABJSLnU9EAgZ3Oz95T7kdPcxROKUs&utm_source=social_share_send&utm_campaign=copy_link",
    },
    {
      id: 5,
      title: "Volunteering",
      type: "Professional Development",
      icon: <FaCertificate className="text-red-600 text-4xl" />,
      image: FounderImage,
      linkedin:
       "https://www.linkedin.com/posts/sanchita-rajurkar-840180297_education-aiineducation-worldeducationfair-activity-7312514621423120385-LJqn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfACLABJSLnU9EAgZ3Oz95T7kdPcxROKUs",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "AI Certification - Deep Learning Specialization",
      type: "Professional Certification",
      icon: <FaCertificate className="text-green-600 text-4xl" />,
      image: "/src/assets/ai-certification.jpg", // Placeholder path
      linkedin: "https://www.linkedin.com/in/sanchita-rajurkar-840180297/", // Update with actual LinkedIn post
    },
    {
      id: 2,
      title: "Advanced Python Programming Certification",
      type: "Technical Certification",
      icon: <FaCertificate className="text-blue-600 text-4xl" />,
      image: "/src/assets/python-certification.jpg", // Placeholder path
      linkedin: "https://www.linkedin.com/in/sanchita-rajurkar-840180297/", // Update with actual LinkedIn post
    },
  ];

  const renderCardSection = (title, items) => (
    <div className="w-full bg-black py-16 text-white">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            {title}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {items.map(({ id, title, type, icon, image, linkedin }) => (
            <div
              key={id}
              className="bg-gray-900 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 duration-300"
            >
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 mb-4">{type}</p>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-600"
              >
                View on LinkedIn <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div id="achievements-and-certifications">
      {renderCardSection("Achievements", achievements)}
      {renderCardSection("Certifications", certifications)}
    </div>
  );
};

export default Achievements;
